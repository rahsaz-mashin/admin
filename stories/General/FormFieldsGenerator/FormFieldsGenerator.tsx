"use client"

import {MinorInput} from "@/stories/General/MinorInput";
import {MinorSelect} from "@/stories/General/MinorSelect";
import {MinorSwitch} from "@/stories/General/MinorSwitch";
import {MinorRadioBox} from "@/stories/General/MinorRadioBox";
import {MinorCheckBox} from "@/stories/General/MinorCheckBox";
import {MinorChooseLocation} from "@/stories/General/MinorChooseLocation";
import {DynamicSelectType} from "@/stories/General/MinorSelect/MinorSelect";
import {Control, useController, useFieldArray, UseFormSetValue, UseFormWatch} from "react-hook-form";
import React, {ReactNode, useEffect} from "react";
import {MinorIconLibrary} from "@/stories/General/MinorIconLibrary";
import {MinorUploader} from "@/stories/General/MinorUploader";
import {Accept} from "react-dropzone";
import {MinorTag} from "@/stories/General/MinorTag";
import {MinorEditor} from "@/stories/General/MinorEditor/MinorEditor";
import {TimeValue} from "@react-types/datepicker";
import {Button, DateValue} from "@nextui-org/react";
import {DeleteOutline} from "@mui/icons-material";
import {DeepKeys} from "@/lib/DeepKeys";


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

                            {...field}
                        />
                    )
                    break
                case "custom":
                    Field = (
                        <div key={field.name} className={field.className}>
                            {field.children}
                        </div>
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


    label?: string;
    isDisabled?: boolean;
    isReadOnly?: boolean;
    description?: ReactNode;
    errorMessage?: ReactNode;
    className?: string;
    itemClassName?: string;

    fields: (index: number) => FormFieldType<T>[];
}


const FieldArray = <T, >(props: FieldArrayPropsType<T>) => {

    const {
        name,
        control,
        fields,

        label,
        isDisabled,
        isReadOnly,
        description,
        errorMessage,
        className = "",
        itemClassName = ""

    } = props


    const {
        fields: _fields,
        append,
        remove,
    } = useFieldArray({
        control,
        name,
    });

    const {
        field,
        fieldState,
        formState,
    } = useController({name, control})


    const hasHelper = !!description || fieldState.invalid
    return (
        <div
            className={"group relative flex flex-col gap-2 " + className}
            data-has-helper={hasHelper}
            data-invalid={fieldState.invalid || undefined}
        >
            {label && (<label className="block text-black font-medium ps-2 z-10 subpixel-antialiased pointer-events-none cursor-pointer will-change-auto origin-top-left rtl:origin-top-right max-w-full text-ellipsis overflow-hidden">{label}</label>)}
            {_fields.map((field, index) => (
                <div
                    key={`${name}.${index}`}
                    className="flex flex-col xl:flex-row col-span-full h-full overflow-hidden cursor-pointer items-stretch bg-gray-50 group-data-[invalid]:bg-danger-100 hover:bg-gray-300 min-h-32 transition rounded-2xl"
                >
                    <div className={"grid grid-cols-2 gap-3 flex-1 p-3 items-center justify-center " + itemClassName}>
                        <FormFieldsGenerator
                            control={control}
                            fields={fields(index).map((v) => ({...v, name: `${name}.${index}.${v.name}` as DeepKeys<T>}))}
                        />
                    </div>
                    <div
                        className="bg-black/20 flex justify-between items-center flex-row gap-2 p-2 xl:flex-col"
                    >
                        <div
                            className="bg-primary font-bold text-white min-w-8 min-h-8 flex items-center justify-center rounded-full"
                        >
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
            <div className="hidden group-data-[has-helper=true]:flex p-1 relative flex-col gap-1.5">
                {(!!description && !(!!errorMessage || fieldState.error?.message || fieldState.error?.root?.message)) && (
                    <div className="text-tiny text-foreground-400">
                        {description}
                    </div>
                )}
                {(!!errorMessage || fieldState.error?.message || fieldState.error?.root?.message) && (
                    <div className="text-tiny text-danger">
                        {errorMessage || fieldState.error?.message || fieldState.error?.root?.message}
                    </div>
                )}
            </div>
            <Button
                onPress={() => append({})}
                color="primary"
                variant="solid"
                className="col-span-full flex-shrink-0"
                isDisabled={isDisabled || isReadOnly || formState.isValidating || formState.isLoading || formState.isSubmitting}
            >
                افزودن
            </Button>
        </div>
    )
}


type FormGroupProps = {
    children?: ReactNode;
    name: string;
    dependency?: (value: any, name: string) => void;
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
        if (dependency && field.value !== undefined && formState.defaultValues?.[field.name] !== field.value) {
            dependency(field.value, name)
        }
    }, [field.value]);

    return (
        <>
            {children}
        </>
    )
}


type FromFieldTypeCommon<T> = {
    name: DeepKeys<T>;
    label?: string;
    description?: ReactNode;
    isDisabled?: boolean;
    isReadOnly?: boolean;
    className?: string;
    dependency?: (value: any, name: string) => void;
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
    allowEmptyFormatting?: boolean;
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
    isAvatar?: boolean;
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
    fields: (index: number) => FormFieldType<T>[]
}

type FromFieldTypeCustom<T> = {
    type: "custom";
    children: ReactNode;
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
        FromFieldTypeArray<T> |
        FromFieldTypeCustom<T>
        )


// @ts-ignore
export type FormFieldFunc<T> = (watch: UseFormWatch<T>, setValue: UseFormSetValue<T>) => FormFieldType<T>[]


type FormFieldsGeneratorPropsType<T> = {
    fields?: FormFieldType<T>[];
    control: Control<any, any>;
}
export type FormFieldsGeneratorType = <T, >(props: FormFieldsGeneratorPropsType<T>) => JSX.Element | null


