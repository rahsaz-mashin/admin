import React, {ReactNode} from "react";
import {Control, useController} from "react-hook-form";
import {Select, SelectItem, SelectSection} from "@nextui-org/select";
import {useInfinityList} from "@/hooks/useInfinityList";
import {useInfiniteScroll} from "@nextui-org/use-infinite-scroll";
import {CollectionChildren} from "@react-types/shared";
import {Autocomplete, AutocompleteItem, AutocompleteSection, getKeyValue, MenuTriggerAction} from "@nextui-org/react";
import {useFilter} from "@react-aria/i18n";


export type DynamicSelectType = {
    route: string;
    headers?: { [key: string]: string };

    filter?: { [key: string]: any };
    searchKey?: string;
    disablePagination?: boolean;
    withSelected?: boolean;
    per?: number;
}


export type MinorSelectProps = {
    name: string;
    control: Control<any, any>;

    label?: string;
    placeholder?: string;

    isDisabled?: boolean;
    isReadOnly?: boolean;


    items?: Iterable<any> | object;
    isMultiple?: boolean;
    disabledKeys?: Iterable<React.Key>;

    itemBuilder?: CollectionChildren<any>;
    sectionBuilder?: CollectionChildren<any>;
    valueBuilder?: (items: any[]) => ReactNode;

    size?: "lg" | "md" | "sm";
    color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
    variant?: "flat" | "bordered" | "faded" | "underlined";
    labelPlacement?: "inside" | "outside" | "outside-left";
    radius?: "none" | "sm" | "md" | "lg" | "full";

    description?: ReactNode;
    errorMessage?: ReactNode;
    isInvalid?: boolean;

    isRequired?: boolean;

    isMultiline?: boolean;

    dynamic?: DynamicSelectType;
    withSection?: boolean;
    isSearchable?: boolean;

    className?: string;
}


export const MinorSelect = (props: MinorSelectProps) => {
    const {
        name,
        control,

        label,
        placeholder,

        isDisabled,
        isReadOnly,

        items,
        isMultiple,
        disabledKeys,

        itemBuilder,
        sectionBuilder,
        valueBuilder,

        size,
        color,
        variant,
        labelPlacement,
        radius,

        description,
        errorMessage,
        isInvalid,

        isRequired,

        isMultiline,

        dynamic,

        withSection,
        isSearchable,

        className = "",
    } = props


    const {
        field,
        fieldState,
        formState,
    } = useController({name, control})

    const isDynamic = !!dynamic
    const [isOpen, setOpen] = React.useState(false);
    const [search, setSearch] = React.useState<string>();
    const [withFilter, setWithFilter] = React.useState<boolean>(false);

    const {
        list,
        hasMore,
        isLoading,
        onLoadMore,
        error: loaderError,
    } = useInfinityList({
        ...dynamic,
        filter: {search, ...dynamic?.filter},
        selected: !!field.value ? String(field.value).split(",") : [],
        isEnable: isDynamic
    });


    const _props = {
        label: label,
        placeholder: placeholder,

        fullWidth: true,
        size: size || "md",
        color: color || "default",
        variant: variant || "flat",
        labelPlacement: labelPlacement || "inside",
        radius: radius || "md",

        isDisabled: isDisabled,
        isReadOnly: isReadOnly || formState.isValidating || formState.isLoading || formState.isSubmitting,

        isRequired: isRequired,
        disabledKeys: disabledKeys,

        description: description,

        isInvalid: isInvalid || !!loaderError || fieldState.invalid,
        errorMessage: errorMessage || loaderError || fieldState.error?.message,

        name: field.name,
    }


    const [, scrollerRef] = useInfiniteScroll({
        hasMore,
        isEnabled: isOpen, // isOpen,
        shouldUseLoader: false,
        onLoadMore,
    });

    const enumToArray = (val: object) => {
        return Object.keys(val).map((id) => ({key: id, label: getKeyValue(val, id)}))
    }

    const itemList: any[] = Array.from(isDynamic ? list : (Array.isArray(items) ? items : enumToArray(items!)) || [])
        .map((v) => (!v.section ? {...v, section: "بدون دسته"} : {...v}))


    const renderItem = (item: any) => {
        // @ts-ignore
        if (!!itemBuilder) return itemBuilder({...item})
        if (isSearchable) {
            return (
                <AutocompleteItem key={item.key}>
                    {item.label}
                </AutocompleteItem>
            )
        }
        return (
            <SelectItem key={item.key}>
                {item.label}
            </SelectItem>
        )
    }
    const renderSection = (section: any) => {
        // @ts-ignore
        if (!!sectionBuilder) return sectionBuilder({...section, itemBuilder: renderItem})

        if (isSearchable) {
            return (
                <AutocompleteSection
                    key={section.title}
                    items={section.items}
                    showDivider={!section.isLast}
                    title={section.title}
                >
                    {renderItem}
                </AutocompleteSection>
            )
        }
        return (
            <SelectSection
                key={section.title}
                items={section.items}
                showDivider={!section.isLast}
                title={section.title}
            >
                {renderItem}
            </SelectSection>
        )
    }

    let $items: CollectionChildren<any>
    if (withSection) {
        const sections: string[] = itemList.map(({section}) => (section)).filter((v, i, self) => (self.indexOf(v) === i))
        $items = sections.map((section, idx) => {
            const isLast = idx === sections.length - 1
            const _items = itemList.filter((item) => (item.section === section))
            return renderSection({title: section, isLast, items: _items})
        })
    } else {
        $items = renderItem
    }


    // **************** AutoComplete search when it's not dynamic

    const {startsWith} = useFilter({sensitivity: "base"});


    const onSelectionChange = (key: any) => {
        if (!isSearchable) {
            field.onChange(Array.from(Array.from(key?.values()).filter((v) => (!!v))).join(","))
        } else {
            const selected = itemList.find((option) => option.key === key);
            field.onChange(key || null)
            setSearch(selected?.label || undefined)
        }
    }

    const onSearchChange = (value?: string) => {
        setSearch(value)
        if (!isDynamic) setWithFilter(true)
    }

    const onOpenChange = (isOpen: boolean, menuTrigger?: MenuTriggerAction) => {
        if ((menuTrigger === "manual" || menuTrigger === "focus") && isOpen) {
            setWithFilter(false)
        }
        setOpen(isOpen)
    }





    if (isSearchable) {
        return (
            <>
                {/*// @ts-ignore*/}
                <Autocomplete
                    {..._props}
                    ref={field.ref}
                    items={withFilter ? itemList.filter((item) => (startsWith(item.label, search || "") || item.key === field.value)) : itemList}
                    isLoading={isLoading}
                    scrollRef={scrollerRef}
                    onOpenChange={onOpenChange}
                    listboxProps={{
                        emptyContent: "موردی پیدا نشد"
                    }}
                    selectedKey={field.value}
                    onSelectionChange={onSelectionChange}
                    inputValue={search}
                    onInputChange={onSearchChange}
                    className={className}
                >
                    {$items}
                </Autocomplete>
            </>
        )
    }
    return (
        <>
            {/*// @ts-ignore*/}
            <Select
                {..._props}
                ref={field.ref}
                items={itemList}
                isLoading={isLoading}
                scrollRef={scrollerRef}
                renderValue={valueBuilder}
                onOpenChange={onOpenChange}
                listboxProps={{
                    emptyContent: "موردی پیدا نشد"
                }}
                isMultiline={isMultiline}
                selectionMode={isMultiple ? "multiple" : "single"}
                selectedKeys={new Set(String(field.value)?.split(","))}
                onSelectionChange={onSelectionChange}
                className={className}
            >
                {$items}
            </Select>
        </>
    )
};
