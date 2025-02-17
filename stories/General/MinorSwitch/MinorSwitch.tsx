import React, {ReactNode} from "react";
import {Control, FieldValues, Path, useController} from "react-hook-form";
import {Switch} from "@heroui/switch";


export type MinorSwitchProps<T extends FieldValues> = {
    name: Path<T> ;
    control: Control<T>;

    label?: string;

    isDisabled?: boolean;
    isReadOnly?: boolean;

    size?: "lg" | "md" | "sm";
    color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";

    description?: ReactNode;
    errorMessage?: ReactNode;
    isInvalid?: boolean;

    className?: string;
}


export const MinorSwitch = <T extends FieldValues,>(props: MinorSwitchProps<T>) => {
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

        className = "",
    } = props


    const {
        field,
        fieldState,
        formState,
    } = useController({name, control})


    const _props = {
        size: size || "md",
        color: color || "primary",

        isDisabled: isDisabled,
        isReadOnly: isReadOnly || formState.isValidating || formState.isLoading || formState.isSubmitting,

        isSelected: field.value,
        onChange: field.onChange,
        onBlur: field.onBlur,
        name: field.name,
    }


    const hasHelper = !!description || isInvalid || fieldState.invalid

    return (
        <div
            className={"relative group flex flex-col gap-2 justify-center " + className}
            data-has-helper={hasHelper}
        >
            <Switch
                {..._props}
                ref={field.ref}
            >
                {label}
            </Switch>
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
};
