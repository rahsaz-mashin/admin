import React, {ReactNode} from "react";
import {Control, FieldValues, Path, useController} from "react-hook-form";
import {Radio, RadioGroup} from "@heroui/react";


export type MinorRadioBoxProps<T extends FieldValues> = {
    name: Path<T> ;
    control: Control<T>;

    label?: string;

    isDisabled?: boolean;
    isReadOnly?: boolean;

    size?: "lg" | "md" | "sm";
    color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
    radius?: "none" | "sm" | "md" | "lg" | "full";


    description?: ReactNode;
    errorMessage?: ReactNode;
    isInvalid?: boolean;

    isRequired?: boolean;
    orientation?: "vertical" | "horizontal";

    items?: { key: string; label: any }[];

    className?: string;
    classNames?: { [key: string]: string };
    itemClassName?: string;
    itemClassNames?: { [key: string]: string };
}


export const MinorRadioBox = <T extends FieldValues,>(props: MinorRadioBoxProps<T>) => {
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

        orientation = "vertical",

        items,

        className,
        classNames,
        itemClassName,
        itemClassNames,
    } = props


    const {
        field,
        fieldState,
        formState,
    } = useController({name, control})


    const _props = {
        label: label,

        size: size || "md",
        color: color || "primary",

        isDisabled: isDisabled,
        isReadOnly: isReadOnly || formState.isValidating || formState.isLoading || formState.isSubmitting,

        description: description,
        isInvalid: isInvalid || fieldState.invalid,
        errorMessage: errorMessage || fieldState.error?.message,

        isRequired,
        orientation,

        value: field.value,
        onChange: field.onChange,
        onBlur: field.onBlur,
        name: field.name,
    }

    return (
        <RadioGroup
            {..._props}
            className={className}
            classNames={classNames}
        >
            {items?.map((v: any) => (
                <Radio
                    key={v.key}
                    value={v.key}
                    className={itemClassName}
                    classNames={itemClassNames}
                >
                    {v.label}
                </Radio>
            ))}
        </RadioGroup>
    )


};
