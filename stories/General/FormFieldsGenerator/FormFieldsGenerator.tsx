/* eslint-disable @typescript-eslint/no-explicit-any */


"use client"

import {MinorInput} from "@/stories/General/MinorInput";
import {MinorSelect} from "@/stories/General/MinorSelect";
import {MinorSwitch} from "@/stories/General/MinorSwitch";
import {MinorRadioBox} from "@/stories/General/MinorRadioBox";
import {MinorCheckBox} from "@/stories/General/MinorCheckBox";
import {MinorChooseLocation} from "@/stories/General/MinorChooseLocation";
import {DynamicSelectType} from "@/stories/General/MinorSelect/MinorSelect";
import {
    ArrayPath,
    Control,
    FieldValues,
    Path,
    useController,
    useFieldArray,
    UseFormSetValue,
    UseFormWatch
} from "react-hook-form";
import React, {JSX, ReactNode, useEffect} from "react";
import {MinorIconLibrary} from "@/stories/General/MinorIconLibrary";
import {MinorUploader} from "@/stories/General/MinorUploader";
import {Accept} from "react-dropzone";
import {MinorTag} from "@/stories/General/MinorTag";
import {MinorEditor} from "@/stories/General/MinorEditor/MinorEditor";
import {TimeValue} from "@react-types/datepicker";
import {Button, DateValue} from "@heroui/react";
import {DeleteOutline} from "@mui/icons-material";
import {CollectionChildren} from "@react-types/shared";


export const FormFieldsGenerator = <T extends FieldValues, >(props: FormFieldsGeneratorPropsType<T>) => {
    const {fields, control} = props

    if (!fields?.length) return (
        <div className="bg-danger-50 text-danger p-3 rounded-xl border border-danger">
            برای این فرم هیچ فیلدی تعریف نشده است
        </div>
    )


    return <>
        {fields.map((field) => {
            let Field: ReactNode
            if (field.isHidden) return null
            switch (field.type) {
                case "input":
                    Field = (
                        <MinorInput<T>
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
                            {field.children()}
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
                    withoutCheckDependency={field.withoutCheckDependency}
                    control={control}

                >
                    {Field}
                </FormGroup>
            )
        })}

    </>

}


type FieldArrayPropsType<T extends FieldValues> = {
    name: Path<T>;
    control: Control<T>;


    label?: string;
    isDisabled?: boolean;
    isReadOnly?: boolean;
    description?: ReactNode;
    errorMessage?: ReactNode;
    className?: string;
    itemClassName?: string;

    fields: (index: number) => FormFieldType<T>[];
}


const FieldArray = <T extends FieldValues, >(props: FieldArrayPropsType<T>) => {

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
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        name,
    });

    const {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
            {label && (
                <label
                    className="block text-black font-medium ps-2 z-10 subpixel-antialiased pointer-events-none cursor-pointer will-change-auto origin-top-left rtl:origin-top-right max-w-full text-ellipsis overflow-hidden"
                >
                    {label}
                </label>
            )}
            {_fields.map((field, index) => (
                <div
                    key={`${name}.${index}`}
                    className="flex flex-col xl:flex-row col-span-full h-full overflow-hidden cursor-pointer items-stretch bg-gray-50 group-data-[invalid]:bg-danger-100 hover:bg-gray-300 min-h-32 transition rounded-2xl"
                >
                    <div className={"grid grid-cols-2 gap-3 flex-1 p-3 items-center justify-center " + itemClassName}>
                        <FormFieldsGenerator
                            control={control}
                            fields={fields(index).map((v) => ({
                                ...v,
                                isDisabled: isDisabled,
                            }))}
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
                            isDisabled={isDisabled || isReadOnly || formState.isValidating || formState.isLoading || formState.isSubmitting}
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
                onPress={() => {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-expect-error
                    append({});
                }}
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


type FormGroupProps<T extends FieldValues> = {
    children?: ReactNode;
    name: Path<T>;
    dependency?: (value: any, name: string) => void;
    control: Control<T>;
    withoutCheckDependency?: boolean;
}

const FormGroup = <T extends FieldValues, >(props: FormGroupProps<T>) => {

    const {
        children,
        name,
        dependency,
        control,
        withoutCheckDependency,
    } = props

    const {
        field,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        fieldState,
        formState,
    } = useController({name, control})


    useEffect(() => {
        if (dependency && field.value !== undefined) {
            if (withoutCheckDependency) {
                dependency(field.value, name)
            } else if (formState.defaultValues?.[field.name] !== field.value) {
                dependency(field.value, name)
            }
        }
    }, [field.value]);

    return (
        <>
            {children}
        </>
    )
}


type FromFieldTypeCommon<T> = {
    name: Path<T>;
    label?: string;
    description?: ReactNode;
    isDisabled?: boolean;
    isReadOnly?: boolean;
    isHidden?: boolean;
    className?: string;
    dependency?: (value: any, name: string) => void;
    withoutCheckDependency?: boolean;
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
    allowEmptyFormatting?: boolean;
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

    itemBuilder?: CollectionChildren<any>;
    sectionBuilder?: CollectionChildren<any>;
    valueBuilder?: (items: any[]) => ReactNode;
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
    isAvatar?: boolean;
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

type FromFieldTypeArray<T> = {
    type: "array";
    fields: (index: number) => FormFieldType<T>[]
}

type FromFieldTypeCustom = {
    type: "custom";
    children: () => JSX.Element | null;
}

type FromFieldTypeOther = {
    type: "other";
}


export type FormFieldType<T> =
    FromFieldTypeCommon<T> &
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
        FromFieldTypeOther |
        FromFieldTypeArray<T> |
        FromFieldTypeCustom
        )


// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export type FormFieldFunc<T> = (watch: UseFormWatch<T>, setValue: UseFormSetValue<T>) => FormFieldType<T>[]


type FormFieldsGeneratorPropsType<T extends FieldValues> = {
    fields?: FormFieldType<T>[];
    control: Control<T>;
}
// export type FormFieldsGeneratorType = <T extends FieldValues, >(props: FormFieldsGeneratorPropsType<T>) => JSX.Element | null


