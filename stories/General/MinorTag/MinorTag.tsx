import React, {ReactNode, useRef, useState} from "react";
import {Textarea, Button, Chip} from "@heroui/react";
import {Control, FieldValues, Path, useController} from "react-hook-form";
import {Clear} from "@mui/icons-material";


export type MinorTagProps<T extends FieldValues> = {
    name: Path<T> ;
    control: Control<T>;

    label?: string;
    placeholder?: string;

    isDisabled?: boolean;
    isReadOnly?: boolean;

    size?: "lg" | "md" | "sm";
    color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
    variant?: "flat" | "bordered" | "faded" | "underlined";
    labelPlacement?: "inside" | "outside" | "outside-left";
    radius?: "none" | "sm" | "md" | "lg" | "full";

    description?: ReactNode;
    errorMessage?: ReactNode;
    isInvalid?: boolean;


    isRequired?: boolean;


    rows?: number | [number, number];

    className?: string;
    classNames?: { [key: string]: string };
}


export const MinorTag = <T extends FieldValues,>(props: MinorTagProps<T>) => {
    const {
        name,
        control,

        label,
        placeholder,

        isDisabled,
        isReadOnly,

        size,
        color,
        variant,
        labelPlacement,
        radius,

        description,
        errorMessage,
        isInvalid,

        isRequired,

        rows,

        className = "",
        classNames,


    } = props


    const {
        field,
        fieldState,
        formState,
    } = useController({name, control})


    const _props = {
        label: label,

        size: size || "md",

        color: color || "default",
        variant: variant || "flat",
        labelPlacement: labelPlacement || "inside",
        radius: radius || "md",


        isRequired: isRequired,

        description: description,

        isInvalid: isInvalid || fieldState.invalid,
        errorMessage: errorMessage || fieldState.error?.message,
    }


    let tags: string[] = []
    if (!!field.value) {
        if (Array.isArray(field.value)) {
            tags = field.value
        } else {
            tags = [field.value]
        }
    }

    const inputRef = useRef<HTMLInputElement | null>(null);
    const [inputValue, setInputValue] = useState<string>('');


    const inputOnChange = (e: any) => {
        if (isDisabled || isReadOnly || formState.isValidating || formState.isLoading || formState.isSubmitting) return
        if (!!e.target.value && !e.target.value.match(/^[a-zA-Z0-9\u0600-\u06FF\u0660-\u0669\s\-:]+$/)) return
        setInputValue(e.target.value)
    }

    const handleAdd = (e: any) => {
        if (isDisabled || isReadOnly || formState.isValidating || formState.isLoading || formState.isSubmitting) return
        const val = inputValue.trim()
        if (e.key === 'Enter' && !!val) {
            e.preventDefault();
            if (!tags.includes(val)) {
                field.onChange([...tags, val]);
            }
            setInputValue('');
        }
        if ((e.key === "Backspace" || e.key === "Delete") && !val) {
            handleRemove(tags.length - 1)
            setInputValue('');
        }
    };

    const handleRemove = (indexToRemove: number) => {
        if (isDisabled || isReadOnly || formState.isValidating || formState.isLoading || formState.isSubmitting) return
        field.onChange(tags.filter((_, index) => index !== indexToRemove));
    };


    const startContent = (
        <div className="flex gap-1 items-center justify-start w-full flex-wrap shrink-0">
            {tags?.map((v, idx) => {
                return (
                    <Chip
                        key={idx}
                        size="sm"
                        color="primary"
                        variant="shadow"
                        className="select-none cursor-pointer"
                        endContent={(
                            <Button
                                isIconOnly
                                color="default"
                                size="sm"
                                radius="full"
                                variant="light"
                                onPress={() => handleRemove(idx)}
                                className="min-w-4 w-4 h-4 text-white"
                            >
                                <Clear style={{fontSize: "1em"}}/>
                            </Button>
                        )}
                    >
                        {v}
                    </Chip>
                )
            })}
            <input
                className="min-w-6 flex-1 bg-transparent outline-none border-none"
                value={inputValue}
                onChange={inputOnChange}
                onKeyDown={handleAdd}
                ref={(e) => {
                    field.ref(e)
                    inputRef.current = e
                }}
                onBlur={field.onBlur}
                name={field.name}
                placeholder={placeholder}
                disabled={isDisabled}
                readOnly={isReadOnly || formState.isValidating || formState.isLoading || formState.isSubmitting}
            />
        </div>
    )


    return (
        <Textarea
            {..._props}

            minRows={!!rows ? typeof rows === "number" ? rows : rows[0] : undefined}
            maxRows={!!rows ? typeof rows === "number" ? rows : rows[1] : undefined}

            className={className}
            classNames={classNames}

            startContent={startContent}

            isReadOnly
            onFocusChange={(isFocused) => {
                if (isFocused && inputRef.current) {
                    inputRef.current.focus();
                }
            }}
        />
    )

};
