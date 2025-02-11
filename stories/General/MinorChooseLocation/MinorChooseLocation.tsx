import React, {ReactNode} from "react";
import {Control, FieldValues, Path, useController} from "react-hook-form";
import dynamic from "next/dynamic";
import {Spinner} from "@heroui/react";


export type MinorChooseLocationProps <T extends FieldValues> = {
    name: Path<T> ;
    control: Control<T>;

    label?: string;

    isDisabled?: boolean;
    isReadOnly?: boolean;

    description?: ReactNode;
    errorMessage?: ReactNode;
    isInvalid?: boolean;

    className?: string;
}


const Component = dynamic(
    () => import('@/stories/General/Map/Map'),
    {
        loading: () => (
            <div className="w-full flex justify-center items-center p-3">
                <Spinner/>
            </div>
        ),
        ssr: false
    }
);


export const MinorChooseLocation = <T extends FieldValues,>(props: MinorChooseLocationProps<T>) => {
    const {
        name,
        control,

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

    const hasHelper = !!description || isInvalid || fieldState.invalid

    const val = field.value ? field.value?.split(",") : null
    const value = val ? {latitude: +val[0], longitude: +val[1]} : undefined

    const onChange = (v: any) => {
        field.onChange(Object.values(v).join(","))
    }

    return (
        <div
            className={"relative group flex flex-col gap-2 justify-center " + className}
            data-has-helper={hasHelper}
        >
            <Component
                position={value}
                zoom={15}
                onChange={onChange}
                withSearchBox
                isDisabled={isDisabled}
                isReadOnly={isReadOnly || formState.isValidating || formState.isLoading || formState.isSubmitting}
            />
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
