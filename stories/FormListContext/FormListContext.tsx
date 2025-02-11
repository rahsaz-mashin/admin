/* eslint-disable @typescript-eslint/no-explicit-any */


"use client"

import React, {useRef} from "react";
import {z, ZodType} from "zod";
import {FormHandler, FormHandlerRefType, FormRender, FormRenderFunc} from "@/stories/FormHandler";
import {ColumnType, TableList, TableListRefType} from "@/stories/TableList";
import {FormFieldFunc} from "@/stories/General/FormFieldsGenerator";


export function FormListContext<T>(props: FormListContextProps<T>) {
    const {
        mode,
        apiRoute,
        editingId,

    } = props

    const tableRef = useRef<TableListRefType>(null)
    const formRef = useRef<FormHandlerRefType>(null)


    if (mode === "list") {
        return (
            <div className="grid">
                {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                { /* @ts-expect-error */}
                <TableList<T>
                    ref={tableRef}

                    apiRoute={apiRoute}
                    editingId={editingId}
                    columns={props.tableColumns}
                    enableTrashBox={props.enableTrashBox}
                />
            </div>
        );
    } else if (mode === "form") {
        return (
            <div className="grid">
                {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                { /* @ts-expect-error */}
                <FormHandler<T>
                    ref={formRef}

                    apiRoute={apiRoute}
                    editingId={editingId}
                    title={props.formTitle}
                    schema={props.formSchema}
                    fields={props.formFields}
                    header={props.formHeader}
                    footer={props.formFooter}
                    initialValue={props.formInitialValue}
                    render={props.formRender}
                    upsert={props.formUpsert}
                    className={props.formClassName}
                    serializer={props.formSerializer}
                />
            </div>
        );
    }
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-start">
            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
            { /* @ts-expect-error */}
            <FormHandler<T>
                ref={formRef}

                apiRoute={apiRoute}
                editingId={editingId}
                title={props.formTitle}
                schema={props.formSchema}
                fields={props.formFields}
                header={props.formHeader}
                footer={props.formFooter}
                initialValue={props.formInitialValue}
                render={props.formRender}
                upsert={props.formUpsert}
                className={props.formClassName}
                serializer={props.formSerializer}

                tableRef={tableRef}
            />
            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
            { /* @ts-expect-error */}
            <TableList<T>
                ref={tableRef}

                apiRoute={apiRoute}
                editingId={editingId}
                columns={props.tableColumns}
                enableTrashBox={props.enableTrashBox}

                formRef={formRef}
            />
        </div>
    );
}


type FormListContextCommonProps = {
    apiRoute: string;
    editingId?: string | number | null;
}


type FormListContextListModePureProps<T> = {
    tableColumns: ColumnType<T>[];

    enableTrashBox?: boolean;
}

type FormListContextListModeProps<T> = { mode: "list" } & FormListContextListModePureProps<T>


type FormListContextFormModePureProps<T> = {
    formTitle?: string;
    formSchema?: ZodType<any, any, any>;
    formFields?: FormFieldFunc<T>;
    formInitialValue?: T;
    formUpsert?: boolean;
    formRender?: FormRender<T>[] | FormRenderFunc<T>;
    formClassName?: string;
    formSerializer?: (v: T) => T;
}

type FormListContextFormModeProps<T> = { mode: "form" } & FormListContextFormModePureProps<T>


type FormListContextBothModeProps<T> =
    { mode?: "both" }
    & FormListContextListModePureProps<T>
    & FormListContextFormModePureProps<T>


export type FormListContextProps<T> =
    FormListContextCommonProps &
    (
        FormListContextListModeProps<T>
        | FormListContextFormModeProps<T>
        | FormListContextBothModeProps<T>
        );



export type ContextObjectType<T> = FormListContextProps<T>

