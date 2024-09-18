import React, {ReactNode} from "react";
import {Control, useController} from "react-hook-form";
import {Checkbox, CheckboxGroup} from "@nextui-org/checkbox";


export type MinorCheckBoxProps = {
    name: string;
    control: Control<any, any>;

    label?: string;

    isDisabled?: boolean;
    isReadOnly?: boolean;

    size?: "lg" | "md" | "sm";
    color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
    radius?: "none" | "sm" | "md" | "lg" | "full";


    description?: ReactNode;
    errorMessage?: ReactNode;
    isInvalid?: boolean;

    mode?: "group" | "single";

    isRequired?: boolean;
    orientation?: "vertical" | "horizontal";

    items?: { key: string; label: any }[];

    className?: string;
}


export const MinorCheckBox = (props: MinorCheckBoxProps) => {
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

        mode = "single",

        isRequired,

        orientation = "vertical",

        items,
        className = "",
    } = props


    const {
        field,
        fieldState,
        formState,
    } = useController({name, control})


    const _props = {
        // label: label,

        size: size || "md",
        color: color || "primary",

        isDisabled: isDisabled,
        isReadOnly: isReadOnly || formState.isValidating || formState.isLoading || formState.isSubmitting,

        // description: description,
        isInvalid: isInvalid || fieldState.invalid,
        // errorMessage: errorMessage || fieldState.error?.message,

        value: field.value,
        onChange: field.onChange,
        onBlur: field.onBlur,
        name: field.name,
    }


    if(mode === "single") {
        const hasHelper = !!description || isInvalid || fieldState.invalid
        return (
            <div
                className={"relative group flex flex-col gap-2 justify-center " + className}
                data-has-helper={hasHelper}
            >
                <Checkbox
                    {..._props}
                    ref={field.ref}
                >
                    {label}
                </Checkbox>
                <div className="hidden group-data-[has-helper=true]:flex p-1 relative flex-col gap-1.5">
                    {!!description && (
                        <div className="text-tiny text-foreground-400">
                            {description}
                        </div>
                    )}
                    {!!errorMessage || fieldState.error?.message && (
                        <div className="text-tiny text-danger">
                            {errorMessage || fieldState.error?.message}
                        </div>
                    )}
                </div>
            </div>
        )
    }


    return (
        <CheckboxGroup
            {..._props}
            className={className}
            label={label}
            description={description}
            errorMessage={errorMessage || fieldState.error?.message}
            isRequired={isRequired}
            orientation={orientation}
        >
            {items?.map((v: any) => (<Checkbox key={v.key} value={v.key}>{v.label}</Checkbox>))}
        </CheckboxGroup>
    )


};
