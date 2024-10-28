import React, {ReactNode} from "react";
import {Input, Textarea} from "@nextui-org/input";
import {NumericFormat, PatternFormat} from "react-number-format";
import {Control, useController} from "react-hook-form";
import {DateInput, TimeInput} from "@nextui-org/date-input";
import {TimeValue} from "@react-types/datepicker";
import {Button, DatePicker, DateRangePicker, DateValue} from "@nextui-org/react";
import {I18nProvider} from "@react-aria/i18n";
import {EyeFilledIcon, EyeSlashFilledIcon} from "@nextui-org/shared-icons";


export type MinorInputProps = {
    name: string;
    control: Control<any, any>;

    label?: string;
    isLtr?: boolean;
    placeholder?: string;

    isDisabled?: boolean;
    isReadOnly?: boolean;

    type?: string;

    size?: "lg" | "md" | "sm";
    color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
    variant?: "flat" | "bordered" | "faded" | "underlined";
    labelPlacement?: "inside" | "outside" | "outside-left";
    radius?: "none" | "sm" | "md" | "lg" | "full";

    description?: ReactNode;
    errorMessage?: ReactNode;
    isInvalid?: boolean;

    isClearable?: boolean;
    isRequired?: boolean;

    isNumeric?: boolean;
    pattern?: string;
    allowNegative?: boolean;
    allowLeadingZeros?: boolean;
    allowEmptyFormatting?: boolean;
    decimalScale?: number;

    isMultiline?: boolean;
    rows?: number | [number, number];

    isTimeInput?: boolean;
    minValue?: number | TimeValue | DateValue;
    maxValue?: number | TimeValue | DateValue;
    hourCycle?: 12 | 24;
    granularity?: 'day' | 'hour' | 'minute' | 'second';
    placeholderValue?: TimeValue | DateValue;

    isDateInput?: boolean;

    withPicker?: boolean;
    visibleMonths?: number;
    showMonthAndYearPickers?: boolean;

    withRangePicker?: boolean;

    className?: string;
    classNames?: { [key: string]: string };

    isSecret?: boolean;

    startContent?: ReactNode;
    endContent?: ReactNode;
}


export const MinorInput = (props: MinorInputProps) => {
    const {
        name,
        control,

        label,
        isLtr,
        placeholder,

        isDisabled,
        isReadOnly,

        type,
        size,
        color,
        variant,
        labelPlacement,
        radius,

        description,
        errorMessage,
        isInvalid,

        isClearable,
        isRequired,


        isNumeric,
        pattern,
        allowNegative,
        decimalScale,
        allowLeadingZeros,
        allowEmptyFormatting,

        isMultiline,
        rows,

        isTimeInput,
        minValue,
        maxValue,
        hourCycle,
        granularity,
        placeholderValue,

        isDateInput,

        withPicker,
        visibleMonths,
        showMonthAndYearPickers,


        withRangePicker,

        className = "",
        classNames,

        isSecret,

        startContent,
        endContent,

    } = props


    const {
        field,
        fieldState,
        formState,
    } = useController({name, control})


    const [isVisible, setIsVisible] = React.useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);

    const _props = {
        label: label,
        dir: isLtr ? "ltr" : "rtl",
        placeholder: placeholder,
        type: isSecret ? isVisible ? "text" : "password" : type,

        fullWidth: true,
        size: size || "md",

        color: color || "default",
        variant: variant || "flat",
        labelPlacement: labelPlacement || "inside",
        radius: radius || "md",

        isDisabled: isDisabled,
        isReadOnly: isReadOnly || formState.isValidating || formState.isLoading || formState.isSubmitting,

        isClearable: isClearable,
        isRequired: isRequired,

        description: description,

        startContent: !!startContent && (
            <div className="h-full flex justify-center items-end text-small pe-2 font-bold text-primary select-none">
                {startContent}
            </div>
        ),
        endContent: !!endContent && (
            <div className="h-full flex justify-center items-end text-small ps-2 font-bold text-primary select-none">
                {endContent}
            </div>
        ),

        isInvalid: isInvalid || fieldState.invalid,
        errorMessage: errorMessage || fieldState.error?.message,

        value: field.value,
        onChange: field.onChange,
        onBlur: field.onBlur,
        name: field.name,
    }


    if (isTimeInput) {
        return (
            <TimeInput
                {..._props}

                dir="ltr"
                className={className}
                classNames={{innerWrapper: "ltr"}}

                hideTimeZone
                minValue={minValue as TimeValue}
                maxValue={maxValue as TimeValue}
                hourCycle={hourCycle}
                granularity={granularity as "hour" | "minute" | "second"}
                placeholderValue={placeholderValue as TimeValue}
            />
        )
    }
    if (isDateInput) {
        if (withPicker) {
            return (
                <I18nProvider locale="fa-IR-persian">
                    <DatePicker
                        {..._props}

                        className={className}
                        // dir="ltr"
                        // classNames={{innerWrapper: "ltr"}}

                        hideTimeZone
                        minValue={minValue as DateValue}
                        maxValue={maxValue as DateValue}
                        hourCycle={hourCycle}
                        granularity={granularity}
                        placeholderValue={placeholderValue as DateValue}
                        visibleMonths={visibleMonths}
                        showMonthAndYearPickers={showMonthAndYearPickers}
                    />
                </I18nProvider>
            )
        }
        if (withRangePicker) {
            return (
                <DateRangePicker
                    {..._props}

                    // dir="ltr"
                    // classNames={{innerWrapper: "ltr"}}

                    hideTimeZone
                    minValue={minValue as DateValue}
                    maxValue={maxValue as DateValue}
                    hourCycle={hourCycle}
                    granularity={granularity}
                    placeholderValue={placeholderValue as DateValue}
                    visibleMonths={visibleMonths}
                    showMonthAndYearPickers={showMonthAndYearPickers}
                />
            )
        }
        return (
            <DateInput
                {..._props}

                className={className}
                // dir="ltr"
                // classNames={{innerWrapper: "ltr"}}

                hideTimeZone
                minValue={minValue as DateValue}
                maxValue={maxValue as DateValue}
                hourCycle={hourCycle}
                granularity={granularity}
                placeholderValue={placeholderValue as DateValue}
            />
        )
    }

    if (isMultiline) {
        return (
            <Textarea
                {..._props}

                ref={field.ref}
                minRows={!!rows ? typeof rows === "number" ? rows : rows[0] : undefined}
                maxRows={!!rows ? typeof rows === "number" ? rows : rows[1] : undefined}

                className={className}
                classNames={classNames}
            />
        )
    }


    if (isNumeric && !!pattern) {
        return (
            // @ts-ignore
            <PatternFormat
                {..._props}

                dir="ltr"
                format={pattern}
                mask=" "
                allowEmptyFormatting={allowEmptyFormatting || false}

                customInput={Input}
                getInputRef={field.ref}

                className={className}
                classNames={classNames}
            />
        )
    }

    if (isNumeric ) {
        return (
            // @ts-ignore
            <NumericFormat
                {..._props}

                dir="ltr"
                thousandSeparator=","
                decimalSeparator="."
                allowNegative={allowNegative}
                decimalScale={decimalScale}
                allowLeadingZeros={allowLeadingZeros}
                min={minValue as number}
                max={maxValue as number}

                customInput={Input}
                getInputRef={field.ref}

                className={className}
                classNames={classNames}
            />
        )
    }

    return (
        <Input
            {..._props}
            ref={field.ref}
            className={className}
            classNames={classNames}
            startContent={isSecret && (
                <div className="h-full flex justify-center items-end">
                    <Button
                        className="focus:outline-none h-5 w-5 min-w-5"
                        variant="light"
                        radius="full"
                        size="sm"
                        isIconOnly
                        onPress={toggleVisibility}
                        aria-label="toggle secret visibility"
                    >
                        {isVisible
                            ?
                            (<EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none"/>)
                            :
                            (<EyeFilledIcon className="text-2xl text-default-400 pointer-events-none"/>)
                        }
                    </Button>
                </div>
            )}
        />
    )
};
