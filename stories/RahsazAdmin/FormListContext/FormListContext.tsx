"use client"

import React, {useRef} from "react";
import {ZodType} from "zod";
import {FormHandler, FormHandlerRefType, FormRender} from "@/stories/RahsazAdmin/FormHandler";
import {ColumnType, TableList, TableListRefType} from "@/stories/RahsazAdmin/TableList";
import {FormFieldFunc, FormFieldType} from "@/stories/General/FormFieldsGenerator";


export function FormListContext<T>(props: FormListContextProps<T>) {
    const {
        mode,
        apiRoute,
        editingId,

    } = props

    const tableRef = useRef<TableListRefType>()
    const formRef = useRef<FormHandlerRefType>()


    if (mode === "list") {
        return (
            <div className="grid">
                { /* @ts-ignore */}
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
                { /* @ts-ignore */}
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
                />
            </div>
        );
    }
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            { /* @ts-ignore */}
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

                tableRef={tableRef}
            />
            { /* @ts-ignore */}
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
    formSchema: ZodType<any, any, any>;
    formFields?: FormFieldFunc<T>;
    formInitialValue?: T;
    formRender?: FormRender<T>[];
}

type FormListContextFormModeProps<T> = { mode: "form" } & FormListContextFormModePureProps<T>


type FormListContextBothModeProps<T> =
    { mode?: "both" }
    & FormListContextListModePureProps<T>
    & FormListContextFormModePureProps<T>


export type FormListContextProps<T> =
    FormListContextCommonProps &
    (FormListContextListModeProps<T>
        | FormListContextFormModeProps<T>
        | FormListContextBothModeProps<T>);
