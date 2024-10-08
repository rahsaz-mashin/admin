"use client"

import {MinorInput} from "@/stories/General/MinorInput";
import {MinorSelect} from "@/stories/General/MinorSelect";
import {MinorSwitch} from "@/stories/General/MinorSwitch";
import {MinorRadioBox} from "@/stories/General/MinorRadioBox";
import {MinorCheckBox} from "@/stories/General/MinorCheckBox";
import {MinorChooseLocation} from "@/stories/General/MinorChooseLocation";
import {DynamicSelectType} from "@/stories/General/MinorSelect/MinorSelect";
import {Control, FieldValues, useController, useFieldArray, UseFormSetValue, UseFormWatch} from "react-hook-form";
import React, {ReactNode, useEffect, useState} from "react";
import {MinorIconLibrary} from "@/stories/General/MinorIconLibrary";
import {MinorUploader} from "@/stories/General/MinorUploader";
import {Accept} from "react-dropzone";
import {MinorTag} from "@/stories/General/MinorTag";
import {MinorEditor} from "@/stories/General/MinorEditor/MinorEditor";
import {TimeValue} from "@react-types/datepicker";
import {Button, DateValue} from "@nextui-org/react";
import {Chip} from "@nextui-org/chip";
import {DeleteIcon} from "@storybook/icons";
import {DeleteOutline} from "@mui/icons-material";


export const FormFieldsGenerator: FormFieldsGeneratorType = (props) => {
    const {fields, control} = props

    if (!fields?.length) return (
        <div className="bg-danger-50 text-danger p-3 rounded-xl border border-danger">
            برای این فرم هیچ فیلدی تعریف نشده است
        </div>
    )


    return <>
        {fields.map((field) => {
            let Field: ReactNode
            switch (field.type) {
                case "input":
                    Field = (
                        <MinorInput
                            key={field.name}
                            control={control}

                            {...field}
                        />
                    )
                    break
                case "select":
                    Field = (
                        <MinorSelect
                            key={field.name}
                            control={control}

                            {...field}
                        />
                    )
                    break
                case "switch":
                    Field = (
                        <MinorSwitch
                            key={field.name}
                            control={control}

                            {...field}
                        />
                    )
                    break
                case "radioBox":
                    Field = (
                        <MinorRadioBox
                            key={field.name}
                            control={control}

                            {...field}
                        />
                    )
                    break
                case "checkBox":
                    Field = (
                        <MinorCheckBox
                            key={field.name}
                            control={control}

                            {...field}
                        />
                    )
                    break
                case "location":
                    Field = (
                        <MinorChooseLocation
                            key={field.name}
                            control={control}

                            {...field}
                        />
                    )
                    break
                case "iconLibrary":
                    Field = (
                        <MinorIconLibrary
                            key={field.name}
                            control={control}

                            {...field}
                        />
                    )
                    break
                case "uploader":
                    Field = (
                        <MinorUploader
                            key={field.name}
                            control={control}

                            {...field}
                        />
                    )
                    break
                case "tag":
                    Field = (
                        <MinorTag
                            key={field.name}
                            control={control}

                            {...field}
                        />
                    )
                    break
                case "editor":
                    Field = (
                        <MinorEditor
                            key={field.name}
                            control={control}

                            {...field}
                        />
                    )
                    break
                case "array":
                    Field = (
                        <FieldArray
                            key={field.name}
                            control={control}
                            name={field.name}
                            fields={field.fields}
                        />
                    )
                    break
                default:
                    Field = (
                        <div key={field.name} className="bg-danger-50 text-danger p-3 rounded-xl border border-danger">
                            {field.type} :
                            این نوع فیلد تعریف نشده است
                        </div>
                    )
                    break
            }
            return (
                <FormGroup
                    key={field.name}
                    name={field.name}
                    dependency={field.dependency}
                    control={control}
                >
                    {Field}
                </FormGroup>
            )
        })}

    </>

}






type FieldArrayPropsType<T> = {
    name: string;
    control: Control<any, any>;
    fields: FormFieldType<T>[];
}


const FieldArray = <T,>(props: FieldArrayPropsType<T>) => {

    const {
        name,
        control,
        fields,
    } = props


    const {
        fields: _fields,
        append,
        remove,

    } = useFieldArray({
        control,
        name,
    });


    return (
        <>
            {_fields.map((field, index) => (
                <div className="flex flex-col xl:flex-row col-span-full h-full overflow-hidden cursor-pointer items-stretch bg-gray-50 hover:bg-gray-300 min-h-32 transition rounded-2xl">
                    <div className="grid grid-cols-2 gap-3 flex-1 p-3 items-center justify-center">
                        <FormFieldsGenerator
                            control={control}
                            fields={fields.map((v) => ({...v, name: `${name}.${index}.${v.name}`}))}
                        />
                    </div>
                    <div className="bg-black/20 h-full flex justify-between items-center flex-row gap-2 p-2 xl:flex-col">
                        <div className="bg-primary font-bold text-white min-w-8 min-h-8 flex items-center justify-center rounded-full">
                            {index + 1}
                        </div>
                        <Button
                            onPress={() => remove(index)}
                            size="sm"
                            variant="solid"
                            color="danger"
                            radius="full"
                            isIconOnly
                        >
                            <DeleteOutline/>
                        </Button>
                    </div>
                </div>
            ))}
            <Button
                onPress={() => append({ name: "" })}
                color="primary"
                variant="solid"
                className="col-span-full"
            >
                افزودن
            </Button>
        </>
    )
}



type FormGroupProps = {
    children?: ReactNode;
    name: string;
    dependency?: () => void;
    control: Control<any, any>;
}

const FormGroup = (props: FormGroupProps) => {

    const {
        children,
        name,
        dependency,
        control,
    } = props

    const {
        field,
        fieldState,
        formState,
    } = useController({name, control})

    // const { fields, append, remove } = useFieldArray({
    //     control,
    //     name: name
    // });


    useEffect(() => {
        if (dependency && field.value && formState.defaultValues?.[field.name] !== field.value) {
            dependency()
        }
    }, [field.value]);

    return (
        <>
            {children}
        </>
    )
}


type FromFieldTypeCommon<T> = {
    name: string;
    label?: string;
    description?: ReactNode;
    isDisabled?: boolean;
    isReadOnly?: boolean;
    className?: string;
    dependency?: () => void;
}


type FromFieldTypeInput<T> = {
    type: "input";
    isRequired?: boolean;
    isSecret?: boolean;
    placeholder?: string;

    isNumeric?: boolean;
    pattern?: string;
    allowNegative?: boolean;
    decimalScale?: number;
    allowLeadingZeros?: boolean;
    minValue?: number | TimeValue | DateValue;
    maxValue?: number | TimeValue | DateValue;

    isMultiline?: boolean;
    rows?: number | [number, number];
    isLtr?: boolean;

    startContent?: ReactNode;
    endContent?: ReactNode;
}

type FromFieldTypeSelect<T> = {
    type: "select";
    isRequired?: boolean;
    placeholder?: string;

    isMultiline?: boolean;
    isMultiple?: boolean;

    items?: { key: string; label: any; }[] | object;

    dynamic?: DynamicSelectType;
    withSection?: boolean;
    isSearchable?: boolean;
}

type FromFieldTypeRadioBox<T> = {
    type: "radioBox";
    isRequired?: boolean;

    items?: { key: string; label: any; }[];

    orientation?: "vertical" | "horizontal";
}

type FromFieldTypeCheckBox<T> = {
    type: "checkBox";
    isRequired?: boolean;

    items?: { key: string; label: any; }[];

    orientation?: "vertical" | "horizontal";

    mode?: "group" | "single";
}

type FromFieldTypeSwitch<T> = {
    type: "switch";
}

type FromFieldTypeLocation<T> = {
    type: "location";
}

type FromFieldTypeIconLibrary<T> = {
    type: "iconLibrary";
    isRequired?: boolean;
}

type FromFieldTypeUploader<T> = {
    type: "uploader";
    accept?: Accept;
    isMultiple?: boolean;
    minSize?: number;
    maxSize?: number;
    maxFiles?: number;
    withPreview?: boolean;
}


type FromFieldTypeTag<T> = {
    type: "tag";

    isRequired?: boolean;
    placeholder?: string;

    rows?: number | [number, number];
    isLtr?: boolean;
}

type FromFieldTypeEditor<T> = {
    type: "editor";
}

type FromFieldTypeArray<T> = {
    type: "array";

    fields: FormFieldType<T>[]
}

type FromFieldTypeOther<T> = {
    type: "other";
}


export type FormFieldType<T> =
    FromFieldTypeCommon<T> &
    (
        FromFieldTypeInput<T> |
        FromFieldTypeSelect<T> |
        FromFieldTypeRadioBox<T> |
        FromFieldTypeCheckBox<T> |
        FromFieldTypeSwitch<T> |
        FromFieldTypeLocation<T> |
        FromFieldTypeIconLibrary<T> |
        FromFieldTypeUploader<T> |
        FromFieldTypeTag<T> |
        FromFieldTypeEditor<T> |
        FromFieldTypeOther<T> |
        FromFieldTypeArray<T>
        )


// @ts-ignore
export type FormFieldFunc<T> = (watch: UseFormWatch<T>, setValue: UseFormSetValue<T>) => FormFieldType<T>[]


type FormFieldsGeneratorPropsType<T> = {
    fields?: FormFieldType<T>[];
    control: Control<any, any>;
}
export type FormFieldsGeneratorType = <T,>(props: FormFieldsGeneratorPropsType<T>) => JSX.Element | null


