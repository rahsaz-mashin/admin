/* eslint-disable @typescript-eslint/no-explicit-any */


"use client"

import React, {
    forwardRef,
    JSX,
    ReactNode,
    useContext, useEffect,
    useImperativeHandle,
    useState,
} from "react";
import {Card, CardBody, CardFooter, CardHeader, Button, Spinner, Tab, Tabs} from "@heroui/react";
import {axiosCoreWithAuth} from "@/lib/axios";
import {
    Control,
    FieldValues,
    FormState,
    Path,
    SubmitHandler,
    useForm,
    UseFormSetValue,
    UseFormWatch
} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {ZodType} from "zod";
import {
    FormFieldFunc,
    FormFieldsGenerator,
    FormFieldType
} from "@/stories/General/FormFieldsGenerator/FormFieldsGenerator";
import {AdminContext} from "@/context/admin.context";
import {TableListRefType} from "@/stories/TableList";
import {useRouter} from "next/navigation";
import {Key} from '@react-types/shared';


export const FormHandler = forwardRef(<T extends FieldValues, >(props: FormHandlerProps<T>, ref: any) => {

    const {
        title,
        apiRoute,
        schema,

        editingId,
        initialValue,

        render,
        fields,

        tableRef,

        upsert,
        className,

        serializer,
    } = props

    const isEditing = editingId !== undefined && editingId !== null

    const adminContext = useContext(AdminContext)


    const router = useRouter()
    const axios = axiosCoreWithAuth()

    const initialData: () => Promise<T> = async () => {
        if (upsert) {
            const d: T = await axios.get(`${apiRoute}`)
            const c = !!d ? d : initialValue as T
            return c
        }
        if (!isEditing) return initialValue as T
        const res: T = await axios.get(`${apiRoute}/${editingId}`)
        return serializer ? serializer(res) : res
    }

    const {
        handleSubmit,
        control,
        reset,
        formState,
        watch,
        setValue,
    } = useForm<T>({
        resolver: schema ? zodResolver(schema) : undefined,
        defaultValues: initialData,
    });

    const onSubmit: (stay?: boolean, listRoute?: string, editRoute?: string) => SubmitHandler<T> = (stay = false, listRoute?: string, editRoute?: string) => async (data) => {
        try {
            let dd: any = null
            if (upsert) {
                const d: T = await axios.patch(`${apiRoute}`, data)
                reset(d)
            } else if (isEditing) dd = await axios.patch(`${apiRoute}/${editingId}`, data)
            else dd = await axios.post(`${apiRoute}`, data)
            if (stay) {
                if (isEditing) router.refresh()
                else {
                    if (dd) {
                        if (editRoute) router.push(`${editRoute}/${dd.id}`)
                        else router.push(`${dd.id}`)
                    }
                }
            } else {
                resetToDefault()
                tableRef?.current?.refresh()
                adminContext.backToList(listRoute)
            }
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (e) {

        }
    }


    const resetToDefault = () => {
        reset(undefined, {keepDefaultValues: true})
    }

    const focusToForm = () => {
        // TODO::
        // setFocus(f?.[0].name as Path<T>, {shouldSelect: true})

    }

    useImperativeHandle(ref, () => ({
        reset: () => {
            resetToDefault()
        },
        focus: () => {
            focusToForm()
        }
    }));


    const contentProps: FormContentPropsType<T> = {
        title,
        isEditing,
        formState,
        watch,
        cancel: (listRoute?: string) => adminContext.backToList(listRoute),
        submit: (stay, listRoute, editRoute) => handleSubmit(onSubmit(stay, listRoute, editRoute))(),
        reset: resetToDefault,
        upsert,
    }


    if (!fields) return (
        <div className="bg-danger-50 text-danger p-3 rounded-xl border border-danger">
            برای این فرم هیچ فیلدی تعریف نشده است
        </div>
    )

    const f = fields(watch, setValue)

    console.log({formErrors: formState.errors})

    // const _render = Array.isArray(render) ? render : render(watch, setValue)


    const _render = typeof render === "function" ? render(watch, setValue) : render
    return (
        <form onSubmit={handleSubmit(onSubmit())} className={"grid gap-5" + (className ? ` ${className}` : "")}>
            {_render
                ?
                _render.map((r, idx) => {
                    return (
                        <r.render key={idx} {...contentProps}>
                            {r?.sections && (
                                <SectionForm<T>
                                    sections={r.sections}
                                    control={control}
                                    fields={f}
                                    selectedSection={r?.selectedSection}
                                    onSectionChange={r?.onSectionChange}
                                />
                            )}
                            {r?.fields && (
                                <FormFieldsGenerator
                                    control={control}
                                    fields={f?.filter(({name}) => (r.fields?.includes(name)))}
                                />
                            )}
                        </r.render>
                    )
                })
                :
                <BuiltInContent<T> {...contentProps}>
                    <FormFieldsGenerator
                        control={control}
                        fields={f}
                    />
                </BuiltInContent>
            }
        </form>
    )
})
FormHandler.displayName = "FormHandler"


const SectionForm = <T extends FieldValues, >(props: SectionFormPropsType<T>) => {

    const {
        sections,
        onSectionChange,
        selectedSection,
        control,
        fields,
    } = props

    const [selectedTab, setSelectedTab] = useState<Key>(sections[0].key)
    const currentSection = sections.find((v) => (v.key === selectedTab))

    useEffect(() => {
        if (!!selectedSection && selectedSection !== selectedTab) setSelectedTab(selectedSection)
    }, [selectedSection])


    useEffect(() => {
        if (!!onSectionChange && selectedSection !== selectedTab) onSectionChange(selectedTab.toString())
    }, [selectedTab])

    return (
        <>
            <Tabs
                color="primary"
                variant="bordered"
                size="lg"
                classNames={{base: "justify-center w-full", panel: "w-full"}}
                selectedKey={selectedTab}
                onSelectionChange={(v) => {
                    setSelectedTab(v)
                }}
                items={sections}
            >
                {(tab) => {
                    return (
                        <Tab
                            key={tab.key}
                            title={tab.title}
                        />
                    )
                }}
            </Tabs>
            <Card
                shadow="none"
                fullWidth
                classNames={{body: "items-start text-start"}}
            >
                <CardBody className="gap-3 grid grid-cols-2 content-start items-center">
                    <FormFieldsGenerator
                        control={control}
                        fields={fields?.filter(({name}: { name: any }) => (currentSection?.fields?.includes(name)))}
                    />
                </CardBody>
            </Card>
        </>
    )
}


const BuiltInContent: FormContentType = ({children, ...props}) => {
    const {
        title,
        isEditing,
        cancel,
        reset,
        submit,
        formState,
        upsert,
    } = props

    return (
        <Card
            className="col-span-full"
            classNames={{body: "items-start text-start"}}
            isDisabled={formState?.isLoading || formState?.isValidating || formState?.isSubmitting || formState?.disabled}
        >
            <CardHeader>
                <h3 className="font-bold">
                    {!upsert && (isEditing ? "ویرایش" : "ایجاد")} {title}
                </h3>
            </CardHeader>
            <CardBody className="gap-3 grid grid-cols-2 content-start">
                {children}
            </CardBody>
            <CardFooter className="gap-2 justify-end">
                <Button
                    aria-label="Reset Form"
                    type="button"
                    variant="flat"
                    color="default"
                    onPress={reset}
                    isDisabled={formState?.isLoading || formState?.isValidating || formState?.isSubmitting || formState?.disabled}
                >
                    ریست
                </Button>
                {!upsert && isEditing && (
                    <Button
                        aria-label="Cancel Form"
                        type="button"
                        variant="flat"
                        color="default"
                        onPress={() => cancel()}
                        isDisabled={formState?.isLoading || formState?.isValidating || formState?.isSubmitting || formState?.disabled}
                    >
                        انصراف
                    </Button>
                )}
                <Button
                    type="submit"
                    variant="shadow"
                    color="primary"
                    isLoading={formState?.isValidating || formState?.isSubmitting}
                    isDisabled={formState?.isLoading || formState?.isValidating || formState?.isSubmitting || formState?.disabled}
                    onPress={() => submit()}
                >
                    {upsert ? "بروزرسانی" : (isEditing ? "ویرایش" : "ایجاد")}
                </Button>
            </CardFooter>
            <div
                data-disabled={formState?.isLoading || formState?.isValidating || formState?.isSubmitting || formState?.disabled || undefined}
                className="absolute h-full w-full hidden data-[disabled]:flex justify-center items-center"
            >
                <Spinner/>
            </div>
        </Card>
    )

}


/*
*
*
*
*
*/


type FormContentPropsType<T> = {
    title?: string;
    isEditing?: boolean;
    cancel: (listRoute?: string) => void;
    submit: (stay?: boolean, listRoute?: string, editRoute?: string) => void;
    reset: () => void;
    watch: UseFormWatch<T & FieldValues>;
    formState: FormState<T & FieldValues>;
    upsert?: boolean;
}

export type FormContentType = <T>(props: FormContentPropsType<T> & {
    children: ReactNode
}) => JSX.Element | null


export type FormRenderSection<T> = {
    key: string;
    title: ReactNode;
    fields: Path<T>[];
}


export type FormRenderCommon<T> = {
    render: (props: FormContentPropsType<T> & { children: ReactNode }) => JSX.Element;
}

export type FormRenderWithSection<T> = {
    sections: FormRenderSection<T>[];
    selectedSection?: string;
    onSectionChange?: (section: string) => void;
    fields?: undefined;
}

export type FormRenderSimple<T> = {
    fields: Path<T>[];
    sections?: undefined;
}

export type FormRenderFunc<T> = (watch: UseFormWatch<T & FieldValues>, setValue: UseFormSetValue<T & FieldValues>) => FormRender<T>[]


export type FormRender<T> = FormRenderCommon<T> & (FormRenderSimple<T> | FormRenderWithSection<T>)


export type FormHandlerRefType = {
    reset: () => void;
    focus: () => void;
}


export type FormHandlerProps<T> = {
    title?: string;
    apiRoute: string;
    className?: string;
    schema?: ZodType<any, any, any>;
    fields?: FormFieldFunc<T>;
    editingId?: string | number | null;
    initialValue?: T;
    render?: FormRender<T>[] | FormRenderFunc<T>;
    upsert?: boolean;

    serializer?: (v: T) => T;


    tableRef?: React.MutableRefObject<TableListRefType | undefined>;
}


export type SectionFormPropsType<T extends FieldValues> = {
    control: Control<T>;
    sections: FormRenderSection<T>[];
    selectedSection?: string;
    onSectionChange?: (section: string) => void;
    fields: FormFieldType<T>[];
}