"use client"

import {
    Spinner,
    Pagination,
    Table,
    TableBody,
    TableCell,
    TableColumn,
    TableHeader,
    TableRow,
    getKeyValue,
    Button,
    useDisclosure,
    ModalContent,
    ModalHeader,
    ModalBody,
    Listbox,
    ListboxItem,
    ModalFooter,
    Modal,
    Card, CardBody, CardFooter, SortDescriptor, DropdownTrigger, Dropdown, DropdownMenu, DropdownItem
} from "@nextui-org/react";
import React, {
    forwardRef, Key,
    useContext,
    useEffect,
    useImperativeHandle,
    useState
} from "react";
import useSWR, {KeyedMutator} from 'swr';
import {ColumnSize} from "@react-types/table";
import {LoadingState} from "@react-types/shared";
import {
    ArrowDropDown,
    DeleteForeverOutlined,
    DeleteOutlined,
    DeleteSweepOutlined,
    DriveFileRenameOutlineOutlined,
    ListOutlined,
    RecyclingOutlined,
    RefreshOutlined, StarBorderOutlined, StarOutlined, ViewColumn, ViewColumnRounded,
} from "@mui/icons-material";
import {AdminContext} from "@/context/admin.context";
import {Tooltip} from "@nextui-org/tooltip";
import {FormHandlerRefType} from "@/stories/RahsazAdmin/FormHandler";
import {UseDisclosureReturn} from "@nextui-org/use-disclosure";
import {axiosCoreWithAuth} from "@/lib/axios";
import {CardHeader} from "@nextui-org/card";
import {Property} from "csstype";
import {PaginationResponse} from "@/types/PaginationResponse";
import {Input} from "@nextui-org/input";
import {convertFilterToQueryString} from "@/lib/convertFilterObjectToQuery";


type ColumnRenderType<T> = (value: any, ctx: T, id?: string | number | null) => JSX.Element

type ToolsCellType<T> = {
    editable?: boolean;
    removable?: boolean;
    chooseDefault?: boolean;
    extra?: ColumnRenderType<T>;
}


export type ColumnType<T> = {
    key: string;
    title: string;
    align?: "start" | "center" | "end";
    hideHeader?: boolean;
    allowsSorting?: boolean;
    isRowHeader?: boolean;
    textValue?: string;
    width?: ColumnSize | null;
    minWidth?: Property.MinWidth<string | number>;
    maxWidth?: Property.MaxWidth<string | number>;

    toolsCell?: ToolsCellType<T>;
    render?: ColumnRenderType<T>;
}


export type TableListRefType = {
    refresh: () => void;
}


export type TableListProps<T> = {
    apiRoute: string;
    columns: ColumnType<T>[];
    defaultPerPage?: number;
    editingId?: string | number | null;
    enableTrashBox?: boolean;

    formRef?: React.MutableRefObject<FormHandlerRefType | undefined>;
}


export const TableList = forwardRef(<T, >(props: TableListProps<T>, ref: any) => {

    const {
        apiRoute,
        columns,
        defaultPerPage = 10,
        editingId,
        enableTrashBox = true,

        formRef,
    } = props

    const [selectedKeys, setSelectedKeys] = useState<Set<string>>(new Set());

    const [loadingState, setLoadingState] = useState<LoadingState>("idle");
    const [showTrashBox, setShowTrashBox] = useState(false);

    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(defaultPerPage);

    const [filtering, setFiltering] = useState<any>({id: {$btw: "10,18"}});
    const [sorting, setSorting] = useState<string>();


    const query = new URLSearchParams()
    query.set('page', String(page))
    query.set('limit', String(perPage))
    query.set('trash', String(showTrashBox))
    if (sorting) query.set('sortBy', sorting)
    if(filtering) {
        const ff = convertFilterToQueryString(filtering)
        // query.set('filter.gg', "")
    }


    const {
        data,
        error,
        isLoading,
        isValidating,
        mutate
    } = useSWR<PaginationResponse<T>>(`/${apiRoute}?${query.toString()}`)

    const items = (data?.data || [])
    const currentPage = data?.meta?.currentPage || 0
    const totalPages = data?.meta?.totalPages || 0
    const sortBy = data?.meta?.sortBy || []

    useEffect(() => {
        if (isLoading) setLoadingState("loading")
        else if (isValidating) setLoadingState("loading")
        else setLoadingState("idle")
    }, [isLoading, isValidating])


    const refresh = async () => {
        await mutate()
    }

    useImperativeHandle(ref, () => ({
        refresh: () => {
            refresh()
        }
    }));

    let sortDescriptor: SortDescriptor | undefined = undefined
    if (sortBy?.[0]) {
        const [columnKey, direction] = sortBy[0]
        sortDescriptor = {
            column: columnKey as Key,
            direction: direction === "DESC" ? "descending" : "ascending"
        }
    }
    return (
        <Card>
            <CardHeader className="p-0 overflow-hidden">
                <TopContent
                    mutate={mutate}
                    error={error}
                    enableTrashBox={enableTrashBox}
                    showTrashBox={showTrashBox}
                    setShowTrashBox={setShowTrashBox}
                />
            </CardHeader>
            <CardBody className="content-start overflow-hidden">
                <Table
                    aria-label="table of items"

                    sortDescriptor={sortDescriptor}
                    onSortChange={({column, direction}: SortDescriptor) => {
                        setSorting(`${column}:${(direction === "descending" ? "DESC" : "ASC")}`)
                    }}

                    disabledKeys={["filtering"]}
                    selectionMode="multiple"
                    selectedKeys={selectedKeys}
                    onSelectionChange={(keys) => setSelectedKeys(keys as Set<string>)}

                    color="primary"

                    isHeaderSticky
                    removeWrapper
                    className="overflow-auto"
                    classNames={{
                        thead: "[&>tr]:first:shadow-none",
                        td: "group-data-[isdeleted]:bg-red-100 group-data-[isediting]:bg-green-100",
                    }}
                >
                    <TableHeader columns={columns}>
                        {(column) => (
                            <TableColumn
                                key={column.key}
                                align={column.align}
                                hideHeader={column.hideHeader}
                                allowsSorting={column.allowsSorting}
                                isRowHeader={column.isRowHeader}
                                textValue={column.textValue}
                                width={column.width}
                                style={{minWidth: column.minWidth, maxWidth: column.maxWidth}}
                            >
                                {column.title}
                            </TableColumn>
                        )}
                    </TableHeader>
                    <TableBody<T>
                        items={[{filterRow: true},...items] as T[]}
                        loadingContent={<LoadingContent/>}
                        emptyContent={<EmptyContent/>}
                        loadingState={loadingState}
                    >
                        {(item) => {
                            const filterRow = getKeyValue(item, "filterRow")
                            if(filterRow) {
                                return (
                                    <TableRow
                                        key="filtering"
                                    >
                                        {(columnKey) => {
                                            return (
                                                <TableCell>
                                                    <Input
                                                        size="sm"
                                                        color="primary"
                                                        variant="bordered"
                                                    />
                                                </TableCell>
                                            )
                                        }}
                                    </TableRow>
                                )
                            }
                            const id = getKeyValue(item, "id")
                            const isDeleted = !!getKeyValue(item, "deletedAt")
                            const isEditing = (editingId === String(id))
                            return (
                                <TableRow
                                    key={id}
                                    data-isdeleted={isDeleted || undefined}
                                    data-isediting={isEditing || undefined}
                                >
                                    {(columnKey) => {
                                        const toolsCell = columns?.find(({key}) => (key === columnKey))?.toolsCell
                                        const render = columns?.find(({key}) => (key === columnKey))?.render
                                        const value = getKeyValue(item, columnKey)
                                        return (
                                            <TableCell>
                                                {
                                                    (toolsCell !== undefined)
                                                        ?
                                                        <ToolsCell<T>
                                                            id={id}
                                                            item={item}
                                                            options={toolsCell}
                                                            apiRoute={apiRoute}
                                                            refresh={refresh}
                                                            enableTrashBox={enableTrashBox}
                                                            formRef={formRef}
                                                        />
                                                        :
                                                        render ? render(value, item, id) : value
                                                }
                                            </TableCell>
                                        )
                                    }}
                                </TableRow>
                            )
                        }}
                    </TableBody>
                </Table>
            </CardBody>
            <CardFooter>
                <BottomContent
                    pages={totalPages}
                    page={currentPage}
                    setPage={setPage}
                />
            </CardFooter>
        </Card>
    );
})
TableList.displayName = "TableList"


/*
============================================================================================================= ToolsCell
*/


type ToolsCellPropsType<T> = {
    id: string | number;
    item: T;
    apiRoute: string;
    options: ToolsCellType<T>;
    refresh: () => void;

    enableTrashBox: boolean;
    formRef?: React.MutableRefObject<FormHandlerRefType | undefined>;
}

const ToolsCell = <T, >(props: ToolsCellPropsType<T>) => {
    const {id, item, options, formRef, apiRoute, refresh, enableTrashBox} = props

    const adminContext = useContext(AdminContext)
    const deleteModal = useDisclosure({defaultOpen: false});

    const [isDefaultLoading, setDefaultLoading] = useState(false)

    const axios = axiosCoreWithAuth()
    const defaultHandler = async () => {
        if (isDefault) return
        setDefaultLoading(true)
        await axios.patch(`${apiRoute}/${id}/default`)
        setDefaultLoading(false)
        refresh()
    }

    const isDefault = getKeyValue(item, "isDefault")
    const isDeleted = getKeyValue(item, "deletedAt")

    if (isDeleted) {
        return (
            <div className="flex flex-row gap-1 justify-center items-center">
                <Tooltip
                    color="foreground"
                    placement="bottom"
                    showArrow
                    content="برگرداندن به لیست"
                    className="select-none"
                    radius="sm"
                >
                    <Button
                        isIconOnly
                        variant="light"
                        color="warning"
                        radius="full"
                        onPress={deleteModal.onOpen}
                    >
                        <RecyclingOutlined/>
                    </Button>
                </Tooltip>
                <Tooltip
                    color="foreground"
                    placement="bottom"
                    showArrow
                    content="حذف همیشگی"
                    className="select-none"
                    radius="sm"
                >
                    <Button
                        isIconOnly
                        variant="light"
                        color="danger"
                        radius="full"
                        onPress={deleteModal.onOpen}
                    >
                        <DeleteForeverOutlined/>
                    </Button>
                </Tooltip>
                <DeleteModal
                    id={id}
                    state={deleteModal}
                    apiRoute={apiRoute}
                    refresh={refresh}
                    enableTrashBox={enableTrashBox}
                />
            </div>
        )
    }


    return (
        <div className="flex flex-row gap-1 justify-center items-center">
            {!!options?.chooseDefault && (
                <>
                    <Tooltip
                        color={isDefault ? "primary" : "foreground"}
                        placement="bottom"
                        showArrow
                        content={isDefault ? "پیش فرض می باشد!" : "پیش فرض شود؟"}
                        className="select-none"
                        radius="sm"
                    >
                        <Button
                            isIconOnly
                            variant="light"
                            color="primary"
                            radius="full"
                            isLoading={isDefaultLoading}
                            onPress={defaultHandler}
                        >
                            {isDefault ? <StarOutlined/> : <StarBorderOutlined/>}
                        </Button>
                    </Tooltip>
                </>
            )}
            {!!options?.editable && (
                <>
                    <Tooltip
                        color="foreground"
                        placement="bottom"
                        showArrow
                        content="ویرایش"
                        className="select-none"
                        radius="sm"
                    >
                        <Button
                            isIconOnly
                            variant="light"
                            color="success"
                            radius="full"
                            onPress={() => {
                                adminContext.editItem(id)
                                formRef?.current?.focus()
                            }}
                        >
                            <DriveFileRenameOutlineOutlined/>
                        </Button>
                    </Tooltip>
                </>
            )}
            {!isDefault && !!options?.removable && (
                <>
                    <Tooltip
                        color="foreground"
                        placement="bottom"
                        showArrow
                        content="حذف"
                        className="select-none"
                        radius="sm"
                    >
                        <Button
                            isIconOnly
                            variant="light"
                            color="danger"
                            radius="full"
                            onPress={deleteModal.onOpen}
                        >
                            <DeleteOutlined/>
                        </Button>
                    </Tooltip>
                    <DeleteModal
                        id={id}
                        state={deleteModal}
                        apiRoute={apiRoute}
                        refresh={refresh}
                        enableTrashBox={enableTrashBox}
                    />
                </>
            )}
            {options?.extra ? options?.extra(null, item, id) : null}
        </div>
    )
}


/*
============================================================================================================= DeleteModal
*/


type DeleteModalPropsType = {
    id: string | number;
    state: UseDisclosureReturn;
    apiRoute: string;
    refresh: () => void;

    enableTrashBox: boolean;
}


const DeleteModal = <T, >(props: DeleteModalPropsType) => {

    const {id, state, apiRoute, refresh, enableTrashBox} = props

    const [item, setItem] = useState<T | null>(null)
    const [isLoading, setLoading] = useState<boolean>(false)

    const title = getKeyValue(item, "title") || null
    const isDeleted = !!getKeyValue(item, "deletedAt")

    const axios = axiosCoreWithAuth()
    const getItem = async () => {
        setLoading(true)
        const d: T = await axios.get(`${apiRoute}/${id}`)
        setItem(d)
        setLoading(false)
    }

    useEffect(() => {
        if (state.isOpen) getItem()
    }, [state.isOpen]);

    const onCancel = () => {
        if (isLoading) return
        state.onClose()
    }

    const onSubmit = async ({permanent = false, restore = false}: { permanent?: boolean, restore?: boolean }) => {
        if (isLoading) return
        setLoading(true)


        if (enableTrashBox) await axios.delete(`${apiRoute}/${id}?permanent=${permanent}&restore=${restore}`)
        else await axios.delete(`${apiRoute}/${id}`)

        setLoading(false)
        refresh()
        state.onClose()
    }


    return (
        <Modal
            //
            backdrop="blur"
            isOpen={state.isOpen}
            onClose={onCancel}
            placement="bottom-center"
            isDismissable
        >
            <ModalContent>
                {!isLoading && (
                    <ModalHeader>
                        {(isDeleted || !enableTrashBox) ? "حذف همیشگی" : "حذف"}
                    </ModalHeader>
                )}
                <ModalBody className="relative">
                    {isLoading && (
                        <div className="h-24 w-full flex justify-center items-center">
                            <Spinner/>
                        </div>
                    )}
                    {!isLoading && (
                        <div className="w-full">
                            {isDeleted
                                ?
                                <>
                                    <p>
                                        با کلیک بر روی
                                        <span className="text-green-600">&nbsp;برگرداندن&nbsp;</span>
                                        <b>&nbsp;{title}&nbsp;</b>
                                        به باکس اصلی برگشته و در صورت کلیک روی
                                        <span className="text-red-600">&nbsp;حذف همیشگی&nbsp;</span>
                                        برای همیشه حذف خواهد شد.
                                    </p>
                                </>
                                :
                                enableTrashBox
                                    ?
                                    <>
                                        <p>
                                            در صورت ادامه
                                            &nbsp;<b>{title}</b>&nbsp;
                                            حذف شده و به زباله دان می رود.
                                        </p>
                                    </>
                                    :
                                    <>
                                        <p>
                                            در صورت ادامه
                                            &nbsp;<b>{title}</b>&nbsp;
                                            برای همیشه حذف شده و غیرقابل برگشت نخواهد بود.
                                        </p>
                                    </>
                            }
                        </div>
                    )}
                </ModalBody>
                <ModalFooter>
                    <Button
                        variant="flat"
                        color="default"
                        isDisabled={isLoading}
                        onPress={onCancel}
                    >
                        انصراف
                    </Button>
                    <Button
                        variant="shadow"
                        color="danger"
                        className="text-white"
                        isDisabled={isLoading}
                        onPress={() => onSubmit({permanent: isDeleted})}
                    >
                        {(isDeleted || !enableTrashBox) ? "حذف همیشگی" : "حذف"}
                    </Button>
                    {isDeleted && (
                        <Button
                            variant="shadow"
                            color="success"
                            className="text-white"
                            isDisabled={isLoading}
                            onPress={() => onSubmit({restore: true})}
                        >
                            برگرداندن
                        </Button>
                    )}
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}


/*
============================================================================================================= TopContent
*/


type TopContentPropsType = {
    mutate: KeyedMutator<any>;
    error: any;
    showTrashBox: boolean;
    setShowTrashBox: (i: (b: boolean) => boolean) => void;

    enableTrashBox: boolean;
}
const TopContent = (props: TopContentPropsType) => {

    const {mutate, error, enableTrashBox, showTrashBox, setShowTrashBox} = props

    return (
        <div className="w-full flex flex-col p-3 pb-0">
            <div
                className="w-full flex flex-row justify-between items-center gap-2 overflow-y-hidden pb-3 empty:hidden">
                {!!error && (
                    <div className="text-danger font-light text-sm flex gap-1 empty:hidden">
                        <b>خطا در دریافت: </b>
                        <span>{error?.message}</span>
                    </div>
                )}
            </div>
            <div className="w-full flex flex-row justify-between items-center gap-2 overflow-y-hidden pb-3">
                <div className="flex flex-row justify-center items-center gap-2">
                    <Dropdown
                        backdrop="blur"
                    >
                        <DropdownTrigger>
                            <Button
                                variant="flat"
                                color="secondary"
                                radius="full"
                                startContent={<ViewColumnRounded/>}
                            >
                                نمایش ستون ها
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu
                            aria-label="Multiple selection example"
                            variant="flat"
                            closeOnSelect={false}
                            disallowEmptySelection
                            selectionMode="multiple"
                            selectedKeys={new Set(["id", "title", "content"])}
                            // onSelectionChange={setSelectedKeys}
                        >
                            <DropdownItem key="id">شناسه</DropdownItem>
                            <DropdownItem key="title">عنوان</DropdownItem>
                            <DropdownItem key="content">محتوا</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    {/*<Dropdown*/}
                    {/*    backdrop="blur"*/}
                    {/*>*/}
                    {/*    <DropdownTrigger>*/}
                    {/*        <Button*/}
                    {/*            variant="flat"*/}
                    {/*            color="default"*/}
                    {/*            radius="full"*/}
                    {/*            endContent={<ArrowDropDown/>}*/}
                    {/*        >*/}
                    {/*            انتخاب شده ها*/}
                    {/*        </Button>*/}
                    {/*    </DropdownTrigger>*/}
                    {/*    <DropdownMenu color="primary">*/}
                    {/*        <DropdownItem key="delete">حذف انتخاب شده ها</DropdownItem>*/}
                    {/*    </DropdownMenu>*/}
                    {/*</Dropdown>*/}
                </div>
                <div className="flex flex-row justify-center items-center gap-2">
                    <Button
                        variant="flat"
                        color="success"
                        radius="full"
                        onPress={mutate}
                        startContent={<RefreshOutlined/>}
                    >
                        بروزرسانی
                    </Button>
                    {enableTrashBox &&
                        <Button
                            variant={showTrashBox ? "solid" : "flat"}
                            color="primary"
                            radius="full"
                            onPress={() => setShowTrashBox((b) => (!b))}
                            startContent={showTrashBox ? <ListOutlined/> : <DeleteSweepOutlined/>}
                        >
                            {showTrashBox ? "باکس اصلی" : "زباله دان"}
                        </Button>
                    }
                </div>
            </div>
        </div>
    )
}


/*
============================================================================================================= BottomContent
*/

type BottomContentPropsType = {
    page: number;
    setPage: (i: number) => void;
    pages: number;
}

const BottomContent = (props: BottomContentPropsType) => {
    const {page, setPage, pages} = props


    if (pages <= 0) return null
    return (
        <div className="flex w-full justify-center">
            <Pagination
                isCompact
                showControls
                showShadow
                color="primary"
                page={page}
                total={pages}
                onChange={setPage}
                classNames={{wrapper: "rtl:flex-row-reverse"}}
            />
        </div>
    )

}


/*
============================================================================================================= LoadingContent
*/


const LoadingContent = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-3">
            <Spinner/>
        </div>
    )
}


/*
============================================================================================================= EmptyContent
*/

const EmptyContent = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-3">
            <svg
                width="60"
                height="60"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M20.3116 12.6473L20.8293 10.7154C21.4335 8.46034 21.7356 7.3328 21.5081 6.35703C21.3285 5.58657 20.9244 4.88668 20.347 4.34587C19.6157 3.66095 18.4881 3.35883 16.2331 2.75458C13.978 2.15033 12.8504 1.84821 11.8747 2.07573C11.1042 2.25537 10.4043 2.65945 9.86351 3.23687C9.27709 3.86298 8.97128 4.77957 8.51621 6.44561C8.43979 6.7254 8.35915 7.02633 8.27227 7.35057L8.27222 7.35077L7.75458 9.28263C7.15033 11.5377 6.84821 12.6652 7.07573 13.641C7.25537 14.4115 7.65945 15.1114 8.23687 15.6522C8.96815 16.3371 10.0957 16.6392 12.3508 17.2435L12.3508 17.2435C14.3834 17.7881 15.4999 18.0873 16.415 17.9744C16.5152 17.9621 16.6129 17.9448 16.7092 17.9223C17.4796 17.7427 18.1795 17.3386 18.7203 16.7612C19.4052 16.0299 19.7074 14.9024 20.3116 12.6473Z"
                />
                <path
                    opacity="0.5"
                    d="M16.4149 17.9745C16.2064 18.6128 15.8398 19.1903 15.347 19.6519C14.6157 20.3368 13.4881 20.6389 11.2331 21.2432C8.97798 21.8474 7.85044 22.1496 6.87466 21.922C6.10421 21.7424 5.40432 21.3383 4.86351 20.7609C4.17859 20.0296 3.87647 18.9021 3.27222 16.647L2.75458 14.7152C2.15033 12.4601 1.84821 11.3325 2.07573 10.3568C2.25537 9.5863 2.65945 8.88641 3.23687 8.3456C3.96815 7.66068 5.09569 7.35856 7.35077 6.75431C7.7774 6.64 8.16369 6.53649 8.51621 6.44534C8.51618 6.44545 8.51624 6.44524 8.51621 6.44534C8.43979 6.72513 8.3591 7.02657 8.27222 7.35081L7.75458 9.28266C7.15033 11.5377 6.84821 12.6653 7.07573 13.6411C7.25537 14.4115 7.65945 15.1114 8.23687 15.6522C8.96815 16.3371 10.0957 16.6393 12.3508 17.2435C14.3833 17.7881 15.4999 18.0873 16.4149 17.9745Z"
                />
            </svg>

            <span>
                  موردی یافت نشد :(
            </span>
        </div>
    )
}
