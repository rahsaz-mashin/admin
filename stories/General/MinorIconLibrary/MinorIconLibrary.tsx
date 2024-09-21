import React, {ReactNode, useEffect, useState} from "react";
import {Control, useController} from "react-hook-form";
import {Switch} from "@nextui-org/switch";
import {Radio, RadioGroup} from "@nextui-org/radio";
import {cn} from "@nextui-org/theme";
import {axiosCoreWithAuth} from "@/lib/axios";
import {Icon} from "@/interfaces/Icon.interface";
import {Spinner} from "@nextui-org/spinner";
import {Tooltip} from "@nextui-org/tooltip";


export type MinorIconLibraryProps = {
    name: string;
    control: Control<any, any>;

    label?: string;

    isDisabled?: boolean;
    isReadOnly?: boolean;
    isRequired?: boolean;

    size?: "lg" | "md" | "sm";
    color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";

    description?: ReactNode;
    errorMessage?: ReactNode;
    isInvalid?: boolean;

    className?: string;
}


export const MinorIconLibrary = (props: MinorIconLibraryProps) => {
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

        className = "",
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

        value: (field.value === undefined || field.value === null) ? "none" : String(field.value),
        onChange: (e: any) => {
            field.onChange(e.target.value !== "none" ? e.target.value : undefined)
        },
        onBlur: field.onBlur,
        name: field.name,
    }

    const axios = axiosCoreWithAuth()
    const [isLoading, setLoading] = useState(true)
    const [items, setItems] = useState<Icon[]>([])

    const getList = async () => {
        const data: any = await axios.get("icon/library")
        setItems(data[0])
        setLoading(false)
    }
    useEffect(() => {
        getList()
    }, [])


    return (
        <RadioGroup
            {..._props}
            orientation="horizontal"
            className={"bg-default-100 w-full rounded-xl p-3 " + className}
        >
            {isLoading && (
                <Loading/>
            )}
            {!isLoading && (
                <RadioIcon
                    title="بدون آیکون"
                    value="none"
                    icon={"×"}
                />
            )}
            {!isLoading && items.map(({id, title, content}) => (
                    <RadioIcon
                        key={id}
                        title={title}
                        value={String(id!)}
                        icon={content}
                    />
                )
            )}
        </RadioGroup>
    )
};

const Loading = () => {
    return (
        <div className="w-full flex flex-col gap-2 justify-center items-center text-default-400">
            <Spinner/>
        </div>
    );
};

const RadioIcon = (props: { title: string; value: string; icon: string }) => {
    const {title, value, icon} = props;

    return (
        <Tooltip
            color="foreground"
            placement="bottom"
            showArrow
            content={title}
            className="select-none"
            radius="sm"
        >
            <Radio
                value={value}
                classNames={{
                    base: cn(
                        "inline-flex m-0 transition bg-content1 hover:bg-primary-50 items-center justify-between",
                        "flex-row-reverse cursor-pointer rounded-lg gap-4 p-4 border-2 border-transparent",
                        "data-[selected=true]:border-primary data-[selected=true]:bg-primary-50"
                    ),
                    wrapper: "hidden",
                    labelWrapper: "!m-0",
                }}
            >
            <span
                className="text-gray-700 w-6 h-6 flex justify-center items-center"
                dangerouslySetInnerHTML={{__html: icon}}
            />
            </Radio>
        </Tooltip>
    );
};