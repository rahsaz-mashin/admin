import React, {ReactNode} from "react";
import {Control, useController} from "react-hook-form";
import {Switch} from "@nextui-org/switch";
import MapContainer from "../Map/Map";


export type MinorChooseLocationProps = {
    name: string;
    control: Control<any, any>;

    label?: string;

    isDisabled?: boolean;
    isReadOnly?: boolean;

    description?: ReactNode;
    errorMessage?: ReactNode;
    isInvalid?: boolean;

    className?: string;
}


export const MinorChooseLocation = (props: MinorChooseLocationProps) => {
    const {
        name,
        control,

        label,

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

    return (
        <div
            className={"relative group flex flex-col gap-2 justify-center " + className}
            data-has-helper={hasHelper}
        >
            {JSON.stringify(field.value)}
            <MapContainer
                position={field.value || {latitude: 36.2612469, longitude: 59.6004759}}
                zoom={15}
                onChange={field.onChange}
                findOnInit
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
