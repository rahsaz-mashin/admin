"use client"

import {MinorInput} from "@/stories/General/MinorInput";
import {MinorSelect} from "@/stories/General/MinorSelect";
import {MinorSwitch} from "@/stories/General/MinorSwitch";
import {MinorRadioBox} from "@/stories/General/MinorRadioBox";
import {MinorCheckBox} from "@/stories/General/MinorCheckBox";
import {MinorChooseLocation} from "@/stories/General/MinorChooseLocation";
import {DynamicSelectType} from "@/stories/General/MinorSelect/MinorSelect";
import {Control, FieldValues, UseFormWatch} from "react-hook-form";
import React, {useState} from "react";


export const FormFieldsGenerator: FormFieldsGeneratorType = (props) => {
    const {fields, control} = props

    if (!fields?.length) return (
        <div className="bg-danger-50 text-danger p-3 rounded-xl border border-danger">
            برای این فرم هیچ فیلدی تعریف نشده است
        </div>
    )


    return <>
        {fields.map((field) => {
            switch (field.type) {
                case "input":
                    return (
                        <MinorInput
                            key={field.name}
                            control={control}

                            className={field.className}
                            name={field.name}
                            label={field.label}
                            isRequired={field.isRequired}
                            isDisabled={field.isDisabled}
                            isReadOnly={field.isReadOnly}
                            placeholder={field.placeholder}
                            description={field.description}

                            isNumeric={field.isNumeric}
                            pattern={field.pattern}
                            allowNegative={field.allowNegative}
                            decimalScale={field.decimalScale}
                            isMultiline={field.isMultiline}

                            isLtr={field.isLtr}
                        />
                    )
                case "select":
                    return (
                        <MinorSelect
                            key={field.name}
                            control={control}
                            className={field.className}

                            name={field.name}
                            label={field.label}
                            isRequired={field.isRequired}
                            isDisabled={field.isDisabled}
                            isReadOnly={field.isReadOnly}
                            placeholder={field.placeholder}
                            description={field.description}

                            items={field.items}
                            isMultiple={field.isMultiple}
                            isMultiline={field.isMultiline}

                            dynamic={field.dynamic}
                            withSection={field.withSection}
                            isSearchable={field.isSearchable}
                        />
                    )
                case "switch":
                    return (
                        <MinorSwitch
                            key={field.name}
                            control={control}
                            className={field.className}

                            name={field.name}
                            label={field.label}
                            isDisabled={field.isDisabled}
                            isReadOnly={field.isReadOnly}
                            description={field.description}

                        />
                    )
                case "radioBox":
                    return (
                        <MinorRadioBox
                            key={field.name}
                            control={control}
                            className={field.className}

                            name={field.name}
                            label={field.label}
                            isRequired={field.isRequired}
                            isDisabled={field.isDisabled}
                            isReadOnly={field.isReadOnly}
                            description={field.description}

                            orientation={field.orientation}
                            items={field.items}

                        />
                    )
                case "checkBox":
                    return (
                        <MinorCheckBox
                            key={field.name}
                            control={control}
                            className={field.className}

                            name={field.name}
                            label={field.label}
                            isRequired={field.isRequired}
                            isDisabled={field.isDisabled}
                            isReadOnly={field.isReadOnly}
                            description={field.description}

                            orientation={field.orientation}
                            items={field.items}

                            mode={field.mode}

                        />
                    )
                case "location":
                    return (
                        <MinorChooseLocation
                            key={field.name}
                            control={control}
                            className={field.className}

                            name={field.name}
                            label={field.label}
                            isDisabled={field.isDisabled}
                            isReadOnly={field.isReadOnly}
                            description={field.description}
                        />
                    )
                default:
                    return (
                        <div key={field.name} className="bg-danger-50 text-danger p-3 rounded-xl border border-danger">
                            این نوع فیلد، تعریف نشده است
                        </div>
                    )
            }
        })}
    </>

}


type FromFieldTypeCommon = {
    name: string;
    label?: string;
    description?: string;
    isDisabled?: boolean;
    isReadOnly?: boolean;
    className?: string;
}


type FromFieldTypeInput = {
    type: "input";
    isRequired?: boolean;
    placeholder?: string;

    isNumeric?: boolean;
    pattern?: string;
    allowNegative?: boolean;
    decimalScale?: number;

    isMultiline?: boolean;
    isLtr?: boolean;
}

type FromFieldTypeSelect = {
    type: "select";
    isRequired?: boolean;
    placeholder?: string;

    isMultiline?: boolean;
    isMultiple?: boolean;

    items?: { key: string; label: any; }[];

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

type FromFieldTypeUploader = {
    type: "uploader";
}


export type FormFieldType =
    FromFieldTypeCommon &
    (FromFieldTypeInput | FromFieldTypeSelect | FromFieldTypeRadioBox | FromFieldTypeCheckBox | FromFieldTypeSwitch | FromFieldTypeLocation | FromFieldTypeUploader)


// @ts-ignore
export type FormFieldFunc<T> = (watch: UseFormWatch<T>) => FormFieldType[]


type FormFieldsGeneratorPropsType = {
    fields?: FormFieldType[];
    control: Control<any, any>;
}
export type FormFieldsGeneratorType = ({fields, control}: FormFieldsGeneratorPropsType) => JSX.Element | null


