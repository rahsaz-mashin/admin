"use client"

import {MinorInput} from "@/stories/General/MinorInput";
import {MinorSelect} from "@/stories/General/MinorSelect";
import {MinorSwitch} from "@/stories/General/MinorSwitch";
import {MinorRadioBox} from "@/stories/General/MinorRadioBox";
import {MinorCheckBox} from "@/stories/General/MinorCheckBox";
import {MinorChooseLocation} from "@/stories/General/MinorChooseLocation";
import {DynamicSelectType} from "@/stories/General/MinorSelect/MinorSelect";
import {Control, FieldValues, useController, UseFormSetValue, UseFormWatch} from "react-hook-form";
import React, {ReactNode, useEffect, useState} from "react";
import {MinorIconLibrary} from "@/stories/General/MinorIconLibrary";
import {MinorUploader} from "@/stories/General/MinorUploader";
import {Accept} from "react-dropzone";
import {MinorTag} from "@/stories/General/MinorTag";
import {MinorEditor} from "@/stories/General/MinorEditor/MinorEditor";
import {TimeValue} from "@react-types/datepicker";
import {DateValue} from "@nextui-org/react";


export const FormFieldsGenerator: FormFieldsGeneratorType = (props) => {
    const {fields, control} = props

    if (!fields?.length) return (
        <div className="bg-danger-50 text-danger p-3 rounded-xl border border-danger">
            برای این فرم هیچ فیلدی تعریف نشده است
        </div>
    )


    return <>
        {fields.map((field) => {
            let Field: ReactNode = undefined
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


type FromFieldTypeCommon = {
    name: string;
    label?: string;
    description?: ReactNode;
    isDisabled?: boolean;
    isReadOnly?: boolean;
    className?: string;
    dependency?: () => void;
}


type FromFieldTypeInput = {
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

type FromFieldTypeSelect = {
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

type FromFieldTypeRadioBox = {
    type: "radioBox";
    isRequired?: boolean;

    items?: { key: string; label: any; }[];

    orientation?: "vertical" | "horizontal";
}

type FromFieldTypeCheckBox = {
    type: "checkBox";
    isRequired?: boolean;

    items?: { key: string; label: any; }[];

    orientation?: "vertical" | "horizontal";

    mode?: "group" | "single";
}

type FromFieldTypeSwitch = {
    type: "switch";
}

type FromFieldTypeLocation = {
    type: "location";
}

type FromFieldTypeIconLibrary = {
    type: "iconLibrary";
    isRequired?: boolean;
}

type FromFieldTypeUploader = {
    type: "uploader";
    accept?: Accept;
    isMultiple?: boolean;
    minSize?: number;
    maxSize?: number;
    maxFiles?: number;
    withPreview?: boolean;
}


type FromFieldTypeTag = {
    type: "tag";

    isRequired?: boolean;
    placeholder?: string;

    rows?: number | [number, number];
    isLtr?: boolean;
}

type FromFieldTypeEditor = {
    type: "editor";


}

type FromFieldTypeOther = {
    type: "other";
}


export type FormFieldType =
    FromFieldTypeCommon &
    (
        FromFieldTypeInput |
        FromFieldTypeSelect |
        FromFieldTypeRadioBox |
        FromFieldTypeCheckBox |
        FromFieldTypeSwitch |
        FromFieldTypeLocation |
        FromFieldTypeIconLibrary |
        FromFieldTypeUploader |
        FromFieldTypeTag |
        FromFieldTypeEditor |
        FromFieldTypeOther
        )


// @ts-ignore
export type FormFieldFunc<T> = (watch: UseFormWatch<T>, setValue: UseFormSetValue<T>) => FormFieldType[]


type FormFieldsGeneratorPropsType = {
    fields?: FormFieldType[];
    control: Control<any, any>;
}
export type FormFieldsGeneratorType = (props: FormFieldsGeneratorPropsType) => JSX.Element | null


