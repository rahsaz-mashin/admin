import React, {ReactNode, useEffect, useState} from "react";
import {Control, useController} from "react-hook-form";
import {Switch} from "@nextui-org/switch";
import {Radio, RadioGroup} from "@nextui-org/radio";
import {cn} from "@nextui-org/theme";
import {axiosCoreWithAuth} from "@/lib/axios";
import {Icon} from "@/interfaces/Icon.interface";
import {Spinner} from "@nextui-org/spinner";
import {Tooltip} from "@nextui-org/tooltip";
import {PaginationResponse, PaginationResponseMeta} from "@/types/PaginationResponse";
import useSWR from "swr";
import {RefreshOutlined} from "@mui/icons-material";
import {Button, Pagination} from "@nextui-org/react";


export type MinorIconLibraryProps = {
    name: string;
    control: Control<any, any>;

    label?: string;

    isDisabled?: boolean;
    isReadOnly?: boolean;
    isRequired?: boolean;

    size?: "lg" | "md" | "sm";
    color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";

    description?: ReactNode;
    errorMessage?: ReactNode;
    isInvalid?: boolean;

    className?: string;
}


export const MinorIconLibrary = (props: MinorIconLibraryProps) => {
    const {
        name,
        control,

        label,

        size,
        color,

        isDisabled,
        isReadOnly,

        description,
        errorMessage,
        isInvalid,

        isRequired,

        className = "",
    } = props


    const {
        field,
        fieldState,
        formState,
    } = useController({name, control})


    const [perPage, setPerPage] = useState(20)
    const [page, setPage] = useState(1)


    const query = new URLSearchParams()
    query.set('page', String(page))
    query.set('limit', String(perPage))


    const {
        data,
        error,
        isLoading,
        isValidating,
        mutate,
    } = useSWR<PaginationResponse<Icon>>(`icon/library?${query.toString()}`)


    const currentPage = data?.meta.currentPage || 0
    const totalPages = data?.meta.totalPages || 0


    const _props = {
        label: label,

        size: size || "md",
        color: color || "primary",

        isDisabled: isDisabled,
        isReadOnly: isReadOnly || formState.isValidating || formState.isLoading || formState.isSubmitting,

        description: description,
        isInvalid: isInvalid || fieldState.invalid,
        errorMessage: errorMessage || fieldState.error?.message || error,

        isRequired,

        value: (field.value === undefined || field.value === null) ? "none" : String(field.value),
        onChange: (e: any) => {
            field.onChange(e.target.value !== "none" ? e.target.value : undefined)
        },
        onBlur: field.onBlur,
        name: field.name,
    }


    return (
        <RadioGroup
            {..._props}
            label={(
                <div className="flex justify-between items-center gap-3 overflow-y-hidden w-full pb-2">
                    <div className="flex justify-center items-center gap-2">
                        <h1>{props.label}</h1>
                        {!!data?.meta.totalItems && (<span>({data.meta.totalItems})</span>)}
                    </div>
                    {!isLoading && (
                        <div className="flex justify-center items-center gap-2">
                            <Pagination
                                dir="ltr"
                                isCompact
                                showControls
                                showShadow={false}
                                siblings={1}
                                radius="full"
                                size="sm"
                                color="primary"
                                page={currentPage}
                                total={totalPages}
                                onChange={setPage}
                                hidden={totalPages < 2}
                                classNames={{ item: "[&:not([data-active=true])]:hidden"}}
                            />
                            <Button
                                isIconOnly
                                variant="flat"
                                color="success"
                                radius="full"
                                size="sm"
                                onPress={() => mutate()}
                            >
                                <RefreshOutlined/>
                            </Button>
                        </div>
                    )}
                </div>
            )}
            orientation="horizontal"
            className={"bg-default-100 w-full rounded-xl p-3 " + className}
        >
            {isLoading && (
                <Loading/>
            )}
            {!isLoading && (
                <RadioIcon
                    title="بدون آیکون"
                    value="none"
                    icon={"×"}
                />
            )}
            {!isLoading && data?.data.map(({id, title, content}) => (
                    <RadioIcon
                        key={id}
                        title={title}
                        value={String(id!)}
                        icon={content}
                    />
                )
            )}
        </RadioGroup>
    )
};

const Loading = () => {
    return (
        <div className="w-full flex flex-col gap-2 justify-center items-center text-default-400">
            <Spinner/>
        </div>
    );
};

const RadioIcon = (props: { title: string; value: string; icon: string }) => {
    const {title, value, icon} = props;

    return (
        <Tooltip
            color="foreground"
            placement="bottom"
            showArrow
            content={title}
            className="select-none"
            radius="sm"
        >
            <Radio
                value={value}
                classNames={{
                    base: cn(
                        "inline-flex m-0 transition bg-content1 hover:bg-primary-50 items-center justify-between",
                        "flex-row-reverse cursor-pointer rounded-lg gap-4 p-4 border-2 border-transparent",
                        "data-[selected=true]:border-primary data-[selected=true]:bg-primary-50"
                    ),
                    wrapper: "hidden",
                    labelWrapper: "!m-0",
                }}
            >
            <span
                className="text-gray-700 w-6 h-6 flex justify-center items-center"
                dangerouslySetInnerHTML={{__html: icon}}
            />
            </Radio>
        </Tooltip>
    );
};