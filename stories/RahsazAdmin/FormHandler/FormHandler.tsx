"use client"

import React, {
    forwardRef, Key,
    MutableRefObject,
    ReactNode,
    useContext,
    useEffect,
    useImperativeHandle,
    useState
} from "react";
import {Card, CardBody, CardFooter, CardHeader} from "@nextui-org/card";
import {axiosCoreWithAuth} from "@/lib/axios";
import {Control, FieldValues, FormState, Path, SubmitHandler, useForm, UseFormWatch} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {ZodType} from "zod";
import {Button} from "@nextui-org/react";
import {
    FormFieldFunc,
    FormFieldsGenerator,
    FormFieldType
} from "@/stories/General/FormFieldsGenerator/FormFieldsGenerator";
import {AdminContext} from "@/context/admin.context";
import {TableListRefType} from "@/stories/RahsazAdmin/TableList";
import {Spinner} from "@nextui-org/spinner";
import {Tab, Tabs} from "@nextui-org/tabs";


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

    } = props

    const isEditing = editingId !== undefined && editingId !== null

    const adminContext = useContext(AdminContext)


    const axios = axiosCoreWithAuth()

    const initialData: () => Promise<T> = async () => {
        if (upsert) {
            const d: T = await axios.get(`${apiRoute}`)
            return !!d ? d : initialValue as T
        }
        if (!isEditing) return initialValue as T
        return await axios.get(`${apiRoute}/${editingId}`)
    }

    const {
        handleSubmit,
        control,
        reset,
        formState,
        watch,
        setValue,
        setFocus,
    } = useForm<T>({
        resolver: zodResolver(schema),
        defaultValues: initialData,
    });

    const onSubmit: SubmitHandler<T> = async (data) => {
        try {
            if (upsert) {
                const d = await axios.patch(`${apiRoute}`, data)
                reset(d)
            } else if (isEditing) await axios.patch(`${apiRoute}/${editingId}`, data)
            else await axios.post(`${apiRoute}`, data)
            resetToDefault()
            tableRef?.current?.refresh()
            adminContext.backToList()
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
        cancel: adminContext.backToList,
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

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-12 gap-5">
            {render
                ?
                render.map((r, idx) => {
                    return (
                        <r.render key={idx} {...contentProps}>
                            {r?.sections && (
                                <SectionForm<T>
                                    sections={r.sections}
                                    control={control}
                                    fields={f}
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


const SectionForm = <T, >(props: SectionFormPropsType<T>) => {

    const {
        sections,
        control,
        fields,
    } = props

    const [selectedTab, setSelectedTab] = useState<Key>(sections[0].key)

    const currentSection = sections.find((v) => (v.key === selectedTab))

    return (
        <>
            <Tabs
                color="primary"
                variant="bordered"
                size="lg"
                classNames={{base: "justify-center w-full", panel: "w-full"}}
                selectedKey={selectedTab}
                onSelectionChange={setSelectedTab}
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
                <CardBody className="gap-3 grid grid-cols-2 content-start">
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
                        onPress={cancel}
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
    cancel?: () => void;
    reset?: () => void;
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
    fields: (keyof T)[];
}


export type FormRenderCommon<T> = {
    render: (props: FormContentPropsType<T> & { children: ReactNode }) => JSX.Element;
}

export type FormRenderWithSection<T> = {
    sections: FormRenderSection<T>[];
    fields?: undefined;
}

export type FormRenderSimple<T> = {
    fields: (keyof T)[];
    sections?: undefined;
}

export type FormRender<T> = FormRenderCommon<T> & (FormRenderSimple<T> | FormRenderWithSection<T>)


export type FormHandlerRefType = {
    reset: () => void;
    focus: () => void;
}


export type FormHandlerProps<T> = {
    title?: string;
    apiRoute: string;
    schema: ZodType<any, any, any>;
    fields?: FormFieldFunc<T>;
    editingId?: string | number | null;
    initialValue?: T;
    render?: FormRender<T>[];
    upsert?: boolean;

    tableRef?: React.MutableRefObject<TableListRefType | undefined>;
}


export type SectionFormPropsType<T> = {
    control: Control<any, any>;
    sections: FormRenderSection<T>[];
    fields: FormFieldType<T>[];
}