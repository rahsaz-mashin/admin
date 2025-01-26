"use client"

import React, {useEffect, useState} from "react";
import {Card, CardHeader, CardBody} from "@nextui-org/card";
import {
    Button,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    ScrollShadow,
    Spinner,
    useDisclosure
} from "@nextui-org/react";
import clsx from "clsx";
import {CartAddAddressModal} from "@/stories/RahsazStore/Cart/AddressBox/AddAddress";
import {PaginationResponse} from "@/types/PaginationResponse";
import {axiosCoreWithAuth} from "@/lib/axios";
import {AddressCity} from "@/interfaces/AddressCity.interface";
import {AddressProvince} from "@/interfaces/AddressProvince.interface";
import {AddressCountry} from "@/interfaces/AddressCountry.interface";
import {IdentityAddressType} from "@/interfaces/IdentityAddressType.interface";
import {IdentityAddress} from "@/interfaces/IdentityAddess.interface";
import {OutlinedMapIcon} from "@/stories/Icons";
import {BoldDuotoneEarthIcon, BoldDuotoneMapIcon, BoldDuotoneStreetMapIcon} from "@/stories/RahsazAdmin/Icons";
import {DeleteRounded, EditRounded, MoreVert} from "@mui/icons-material";
import useSWR from "swr";
import {Control, useController, UseFormSetValue, UseFormWatch} from "react-hook-form";
import {Cart} from "@/interfaces/Cart.interface";


export type CartAddressBoxProps = {
    control: Control<Cart>;
    setValue: UseFormSetValue<Cart>;
    watch: UseFormWatch<Cart>;
}


export const CartAddressBox = (props: CartAddressBoxProps) => {

    const {
        control,
        setValue,
        watch,
    } = props


    const {
        field,
        fieldState,
        formState,
    } = useController({
        name: "address",
        control,
    })


    const [editingId, setEditingId] = useState<number>()


    const {
        data,
        error,
        isLoading,
        isValidating,
        mutate,
    } = useSWR<PaginationResponse<IdentityAddress>>(`/store/identity/address`)


    const {
        isOpen: isOpenAddAddressModal,
        onOpen: onOpenAddAddressModal,
        onOpenChange: onOpenChangeAddAddressModal,
    } = useDisclosure();


    const editHandler = async (id: number) => {
        setEditingId(id)
        onOpenAddAddressModal()
    }

    const axios = axiosCoreWithAuth()
    const deleteHandler = async (id: number) => {
        await axios.delete(`store/identity/address/${id}`)
        mutate()
    }

    const acceptAddress = watch("deliveryMethodInfo")?.acceptAddress !== false

    useEffect(() => {
        if (!acceptAddress) field.onChange(null)
    }, [acceptAddress]);



    useEffect(() => {
        setAddress(watch("address"))
    }, [watch("address")]);

    const setAddress = async (id: number | null) => {
        await axios.patch(`/store/cart/address`, {address: id})
    }

    console.log([isLoading, formState.isValidating, formState.isLoading, formState.isSubmitting])


    return (
        <div id="address" className="flex-shrink-0 p-4">
            <Card
                shadow="none"
                radius="none"
            >
                <CardHeader
                    className="text-white bg-primary py-2 w-fit font-light text-base rounded-tr-2xl relative after:absolute after:bg-primary after:-end-12 after:h-full after:w-12 after:rounded-tl-[10rem]"
                >
                    آدرس تحویل
                </CardHeader>
                <CardBody
                    className="relative border min-h-20 border-primary rounded-2xl rounded-tr-none gap-2 text-start">
                    <div
                        data-loading={isLoading || formState.isValidating || formState.isLoading || formState.isSubmitting}
                        className="absolute rounded-3xl z-10 p-3 top-0 left-0 w-full h-full bg-white/20 backdrop-blur-sm justify-center items-center hidden data-[loading=true]:flex"
                    >
                        <Spinner/>
                    </div>
                    {acceptAddress
                        ?

                        (
                            <>
                                <span className="text-gray-500 text-sm font-light">
                                    آدرس تحویل خود را وارد یا انتخاب کنید!
                                </span>
                                <ul className="flex flex-wrap flex-col gap-3">
                                    <CartAddAddressBox
                                        openAddAddress={onOpenAddAddressModal}
                                    />
                                    {isOpenAddAddressModal && (
                                        <CartAddAddressModal
                                            addressId={editingId}
                                            isOpen={isOpenAddAddressModal}
                                            onOpenChange={onOpenChangeAddAddressModal}
                                            update={mutate}
                                        />
                                    )}
                                    <ScrollShadow className="max-h-96 flex flex-col gap-3" hideScrollBar>
                                        {(data?.data || []).map(({id, ...v}) => {
                                            return (
                                                <CartAddressItem
                                                    key={id}
                                                    {...v}
                                                    editHandler={() => editHandler(id)}
                                                    deleteHandler={() => deleteHandler(id)}
                                                    isSelected={id === field.value}
                                                    handleSwitch={() => field.onChange(id)}
                                                />
                                            )
                                        })}
                                    </ScrollShadow>
                                </ul>
                            </>
                        )
                        :
                        (
                            <>
                                <span className="text-gray-500 text-sm font-light">
                                    کالا را درب انبار به آدرس زیر تحویل بگیرید:
                                </span>
                                <div
                                    className="flex flex-wrap flex-col gap-3 p-3 rounded-xl bg-primary/20 border border-primary">
                                    مشهد، امام رضا، امام رضا 68، فارابی جنوبی، بین فارابی 13 و فارابی 15
                                </div>
                            </>
                        )

                    }
                </CardBody>
            </Card>
        </div>
    );
};


export type CartAddressItemProps = {
    title: string | null;

    country: AddressCountry;
    province: AddressProvince;
    city: AddressCity;

    type: IdentityAddressType | null;

    address: string | null;
    zipCode: string | null;
    postBox: string | null;
    location: string | null;
    description: string | null;

    isSelected: boolean;
    handleSwitch: () => void

    editHandler: () => void;
    deleteHandler: () => void;
}


export const CartAddressItem = (props: CartAddressItemProps) => {
    const {
        title, description, type,
        country, province, city,
        address, zipCode, postBox, location,
        editHandler, deleteHandler,
        handleSwitch,
        isSelected,
    } = props


    return (
        <Card
            shadow="sm"
            isHoverable
            isPressable
            onPress={() => handleSwitch()}
            className={clsx("flex flex-shrink-0 transition-all flex-col justify-start items-start p-4 group/item gap-1 text-sm bg-white hover:bg-primary/20 transition rounded-xl cursor-pointer text-gray-500 text-center", isSelected ? "bg-primary/20 isSelected" : "")}
            classNames={{header: "p-0", body: "p-0", footer: "p-0"}}
        >
            <CardHeader>
                <div className="flex justify-between w-full">
                    <div
                        className="font-bold transition group-[.isSelected]/item:text-primary group-hover/item:text-primary flex items-center gap-1"
                    >
                        {title}
                        <div className="font-light flex gap-1 items-center">
                        <span
                            className="w-5 h-5"
                            dangerouslySetInnerHTML={{__html: type?.icon?.content || "◄"}}
                        />
                            <b>{type?.title || "-"}</b>
                        </div>
                    </div>
                    {!isSelected && (
                        <Dropdown backdrop="blur">
                            <DropdownTrigger>
                                <Button
                                    as="div"
                                    size="sm"
                                    variant="light"
                                    radius="full"
                                    color="primary"
                                    isIconOnly
                                    className="text-gray-500"
                                >
                                    <MoreVert/>
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu aria-label="address-menu">
                                <DropdownItem
                                    key="edit"
                                    color="secondary"
                                    startContent={<EditRounded/>}
                                    onPress={editHandler}
                                >
                                    ویرایش آدرس
                                </DropdownItem>
                                <DropdownItem
                                    key="remove"
                                    color="danger"
                                    startContent={<DeleteRounded/>}
                                    onPress={deleteHandler}
                                >
                                    حذف آدرس
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    )}
                </div>
            </CardHeader>
            <CardBody>
                {isSelected && (
                    <div className="font-light flex gap-1 items-center text-start">
                        <span
                            className="w-5 h-5"
                            dangerouslySetInnerHTML={country?.icon?.content ? {__html: country.icon.content} : undefined}
                        >
                            {country?.icon?.content ? undefined : <BoldDuotoneEarthIcon/>}
                        </span>
                        <b>{country?.title || "-"}</b>
                    </div>
                )}
                {isSelected && (
                    <div className="font-light flex gap-1 items-center text-start">
                        <span
                            className="w-5 h-5"
                            dangerouslySetInnerHTML={province?.icon?.content ? {__html: province.icon.content} : undefined}
                        >
                            {province?.icon?.content ? undefined : <BoldDuotoneMapIcon/>}
                        </span>
                        <b>{province?.title || "-"}</b>
                    </div>
                )}
                <div className="font-light flex gap-1 items-center text-start">
                    <span
                        className="w-5 h-5"
                        dangerouslySetInnerHTML={city?.icon?.content ? {__html: city.icon.content} : undefined}
                    >
                        {city?.icon?.content ? undefined : <BoldDuotoneStreetMapIcon/>}
                    </span>
                    <b>{city?.title || "-"}</b>
                </div>
                <div className="font-light flex gap-1 items-center text-start">
                    <span
                        className="w-5 h-5"
                    >
                        <OutlinedMapIcon/>
                    </span>
                    <span>{address || "-"}</span>
                </div>
                {isSelected && (
                    <div className="grid grid-cols-2 items-center w-full">
                        <div className="flex gap-1 items-center text-start">
                            <b>کد پستی:</b>
                            <span className="font-light">{zipCode || "-"}</span>
                        </div>
                        <div className="flex gap-1 items-center text-start">
                            <b>صندوق پستی:</b>
                            <span className="font-light">{postBox || "-"}</span>
                        </div>
                    </div>
                )}
                <div className="flex gap-1 items-center">
                    <b>تحویل گیرنده:</b>
                    <span className="font-light">
                        -
                    </span>
                </div>
            </CardBody>
        </Card>
    )
}


export type CartAddAddressBoxProps = {
    openAddAddress: () => void
}

export const CartAddAddressBox = (props: CartAddAddressBoxProps) => {

    const {openAddAddress} = props

    return (
        <Card
            shadow="none"
            isHoverable
            isPressable
            onPress={() => openAddAddress()}
            className={clsx("flex flex-row flex-shrink-0 justify-start items-center text-primary font-bold border-2 border-primary border-dashed p-4 group gap-4 text-sm bg-white hover:bg-primary/20 transition rounded-xl cursor-pointer text-center", /*isSelected ? "bg-primary/20 isSelected" : ""*/)}
        >
            <AddAddressIcon/>
            <span>افزودن آدرس جدید</span>
        </Card>
    )
}

function AddAddressIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            fill="none"
            viewBox="0 0 80 80"
        >
            <g clipPath="url(#clip0_1369_69394)">
                <path
                    fill="#F4F7FA"
                    d="M70.416 68.921c-2.073 2.137-3.928 3.394-5.349 4.342-13.853 9.25-29.69 6.584-34.585 5.673-7.9-1.47-14.568-2.507-20.297-7.683C-2.833 59.492-2.2 34.956 7.748 19.758c1.18-1.802 11.111-16.525 26.982-18.6.388-.05.677-.08.931-.107C38.116.791 53.33-.58 65.736 9.813a37.015 37.015 0 017.283 8.264c9.69 14.965 9.72 38.142-2.603 50.844z"
                />
                <path
                    fill="url(#paint0_linear_1369_69394)"
                    d="M46.375 60.99c-15.632 2.684-20.439.603-21.858-1.895-.825-1.452-.91-3.758-3.265-6.669-1.983-2.453-3.125-2.302-3.975-4.183-1.474-3.263 1.338-5.098.192-8.258-1.255-3.46-5.201-2.85-6.912-6.983-.936-2.26.162-2.642-.67-4.894-1.699-4.592-6.701-4.193-8.363-8.334-.968-2.411-.47-5.53 1.122-7.368 3.193-3.684 10.838-2.271 15.162 1.146.557.44 4.75 3.85 5.155 8.898.245 3.046-1.067 4.466.014 6.321 1.526 2.616 4.98 1.235 6.497 3.56 2.055 3.149-2.82 7.931-.471 11.476.91 1.372 1.87 1.003 2.78 2.579 1.494 2.59-.248 5.074.096 7.23.37 2.316 3.286 5.144 14.496 7.373z"
                />
                <path
                    fill="#fff"
                    d="M17.46 20.75c2.028 4.68-1.278 7.639 1.097 11.33 1.929 2.999 4.97 2.386 5.802 5.178.797 2.675-1.78 3.967-1.075 7.023.581 2.52 2.537 2.532 4.49 5.79 1.967 3.279 1.172 5.245 2.182 7.248 1.084 2.15 4.16 4.167 12.44 4.285 1.242-.168 2.565-.371 3.979-.614-11.21-2.229-14.127-5.057-14.496-7.373-.344-2.157 1.398-4.64-.097-7.23-.909-1.576-1.87-1.208-2.78-2.58-2.349-3.544 2.527-8.327.472-11.476-1.517-2.325-4.971-.943-6.497-3.56-1.081-1.854.231-3.274-.014-6.32-.406-5.05-4.598-8.459-5.155-8.899-4.324-3.417-11.97-4.83-15.162-1.145l-.045.054c2.135.076 4.753.511 7.463 1.804 2.105 1.003 5.778 2.755 7.395 6.485h.001z"
                    opacity="0.28"
                />
                <path
                    fill="url(#paint1_linear_1369_69394)"
                    d="M41.347 62.604c-5.287-1.345-6.788-2.975-7.02-4.343-.38-2.24 2.666-3.62 2.259-6.172-.47-2.94-4.904-3.55-4.768-5.482.148-2.09 5.368-1.94 6.445-4.947.977-2.726-2.788-4.313-2.76-8.273.035-4.728 5.427-5.838 6.375-11.22.647-3.675-1.226-6.8-2.696-9.251C35.875 7.4 29.08 2.036 21.392 2.58c-1.05.074-7.17.507-8.686 4.096-1.537 3.638 2.132 9.399 5.885 12.452 2.72 2.212 5 2.608 5.12 4.35.163 2.349-3.872 3.208-4.255 6.63-.202 1.81.726 3.355 1.638 4.876 2.07 3.447 4.087 3.318 4.383 5.228.406 2.613-3.244 3.68-4.055 7.59-.577 2.786.66 5.214 1.358 6.582 2.718 5.332 10.038 8.386 18.566 8.22h.001z"
                />
                <mask
                    id="mask0_1369_69394"
                    style={{maskType: "luminance"}}
                    width="31"
                    height="61"
                    x="12"
                    y="2"
                    maskUnits="userSpaceOnUse"
                >
                    <path
                        fill="#fff"
                        d="M41.347 62.604c-5.287-1.345-6.788-2.975-7.02-4.343-.38-2.24 2.666-3.62 2.259-6.172-.47-2.94-4.904-3.55-4.768-5.482.148-2.09 5.368-1.94 6.445-4.947.977-2.726-2.788-4.313-2.76-8.273.035-4.728 5.427-5.838 6.375-11.22.647-3.675-1.226-6.8-2.696-9.251C35.875 7.4 29.08 2.036 21.392 2.58c-1.05.074-7.17.507-8.686 4.096-1.537 3.638 2.132 9.399 5.885 12.452 2.72 2.212 5 2.608 5.12 4.35.163 2.349-3.872 3.208-4.255 6.63-.202 1.81.726 3.355 1.638 4.876 2.07 3.447 4.087 3.318 4.383 5.228.406 2.613-3.244 3.68-4.055 7.59-.577 2.786.66 5.214 1.358 6.582 2.718 5.332 10.038 8.386 18.566 8.22h.001z"
                    />
                </mask>
                <g mask="url(#mask0_1369_69394)">
                    <path
                        fill="#fff"
                        d="M10.76 4.852c3.327 1.526 6.648 3.067 9.963 4.619 1.66.77 3.314 1.555 4.954 2.369.82.406 1.639.817 2.451 1.24.813.425 1.62.86 2.407 1.34.392.24.78.49 1.151.77.187.137.366.287.541.442.172.159.338.327.49.51a3.009 3.009 0 01.62 1.283c.095.468.108.953.02 1.421a4.53 4.53 0 01-.484 1.326 8.347 8.347 0 01-.778 1.158c-.571.73-1.208 1.39-1.817 2.07-.61.677-1.202 1.37-1.69 2.13-.24.382-.458.776-.63 1.19-.169.415-.301.844-.377 1.285-.14.88-.087 1.798.187 2.647.138.425.335.828.568 1.212.234.383.508.744.79 1.102.282.358.575.712.844 1.09.137.187.262.383.383.583.115.203.228.408.318.625.189.43.311.89.366 1.356.056.466.05.936-.004 1.4a5.446 5.446 0 01-.342 1.358c-.175.434-.4.846-.659 1.231-.51.775-1.145 1.446-1.588 2.226a3.739 3.739 0 00-.456 1.243c-.068.436-.057.887.03 1.325.085.436.244.858.464 1.247.223.388.496.748.799 1.084.601.678 1.303 1.279 1.872 2.015.284.366.528.772.693 1.211.162.44.243.91.243 1.377a3.85 3.85 0 01-.252 1.375c-.17.438-.422.833-.67 1.215-.244.382-.488.77-.556 1.206-.082.434.02.885.222 1.278.21.393.504.741.836 1.047.332.306.697.579 1.076.829.764.495 1.578.912 2.412 1.285.833.374 1.685.707 2.545 1.015.86.308 1.73.594 2.605.86 1.75.533 3.52 1 5.297 1.434l-.003.013a97.633 97.633 0 01-5.312-1.39 54.98 54.98 0 01-2.616-.837 35.626 35.626 0 01-2.561-.995 17.724 17.724 0 01-2.44-1.273 8.477 8.477 0 01-1.102-.834 4.056 4.056 0 01-.875-1.083c-.217-.415-.331-.903-.245-1.376.033-.237.123-.46.224-.671.102-.212.228-.406.35-.6.247-.385.488-.769.648-1.187.16-.418.233-.864.233-1.311a3.809 3.809 0 00-.237-1.311 4.498 4.498 0 00-.671-1.158c-.555-.712-1.256-1.307-1.873-1.995a6.634 6.634 0 01-.832-1.117 4.415 4.415 0 01-.495-1.312 4.05 4.05 0 01-.038-1.405c.075-.467.247-.916.477-1.322.227-.41.506-.782.782-1.147.278-.365.556-.725.806-1.1.25-.376.466-.771.632-1.186.165-.416.271-.853.324-1.296.103-.888.018-1.807-.347-2.622-.35-.825-.945-1.521-1.514-2.238-.285-.36-.566-.73-.81-1.127a6.052 6.052 0 01-.596-1.267 6.011 6.011 0 01-.201-2.776c.079-.463.217-.912.391-1.345.18-.431.406-.84.652-1.233.5-.783 1.1-1.488 1.713-2.17.611-.683 1.244-1.343 1.8-2.057a8.05 8.05 0 00.75-1.119c.212-.392.375-.809.453-1.241a3.425 3.425 0 00-.02-1.305 2.733 2.733 0 00-.559-1.166 4.81 4.81 0 00-.457-.482 7.619 7.619 0 00-.52-.427c-.359-.272-.739-.521-1.125-.76a41.576 41.576 0 00-2.385-1.339c-.808-.425-1.624-.838-2.442-1.247l-2.459-1.218c-.818-.409-1.646-.798-2.47-1.197-3.298-1.584-6.592-3.179-9.88-4.79l.006-.01z"
                        opacity="0.7"
                    />
                </g>
                <path
                    fill="url(#paint2_linear_1369_69394)"
                    d="M38.323 61.186a32.356 32.356 0 01-6.05 2.411c-5.543 1.584-15.078 2.687-18.355-1.596-.402-.527-1.467-1.918-1.326-3.637.147-1.787 1.466-2.338 1.27-3.455-.269-1.528-2.896-1.412-5.508-3.165-2.218-1.489-4.887-4.636-4.63-8.338.283-4.06 3.917-6.367 4.312-6.61 2.686-1.647 6.824-2.243 9.412-.162 2.29 1.841 2.504 5.085 2.645 7.227.32 4.845-1.706 7.024-.247 8.72 1.33 1.545 3.584.406 5.2 2.467.69.88.494 1.362 1.573 3.086.817 1.304 1.698 2.257 2.061 2.595 2.807 2.615 9.086.639 9.643.458z"
                />
                <mask
                    id="mask1_1369_69394"
                    style={{maskType: "luminance"}}
                    width="36"
                    height="31"
                    x="3"
                    y="35"
                    maskUnits="userSpaceOnUse"
                >
                    <path
                        fill="#fff"
                        d="M38.323 61.186a32.356 32.356 0 01-6.05 2.411c-5.543 1.584-15.078 2.687-18.355-1.596-.402-.527-1.467-1.918-1.326-3.637.147-1.787 1.466-2.338 1.27-3.455-.269-1.528-2.896-1.412-5.508-3.165-2.218-1.489-4.887-4.636-4.63-8.338.283-4.06 3.917-6.367 4.312-6.61 2.686-1.647 6.824-2.243 9.412-.162 2.29 1.841 2.504 5.085 2.645 7.227.32 4.845-1.706 7.024-.247 8.72 1.33 1.545 3.584.406 5.2 2.467.69.88.494 1.362 1.573 3.086.817 1.304 1.698 2.257 2.061 2.595 2.807 2.615 9.086.639 9.643.458z"
                    />
                </mask>
                <g mask="url(#mask1_1369_69394)">
                    <path
                        fill="#fff"
                        d="M34.848 62.795c-2.637 0-5.256-.172-7.824-.516-7.765-1.039-8.643-2.778-8.931-3.35-.448-.888-.367-1.635-.28-2.426.096-.889.196-1.807-.387-3.084-.531-1.163-1.224-1.703-1.894-2.226-.654-.51-1.33-1.037-1.826-2.134-.641-1.414-.447-2.561-.241-3.776.112-.666.229-1.355.216-2.126-.048-3.048-2.15-6.168-6.247-9.275l.059-.078c4.122 3.126 6.237 6.273 6.286 9.351.012.78-.105 1.474-.218 2.144-.203 1.2-.395 2.333.233 3.72.487 1.075 1.124 1.571 1.798 2.097.679.53 1.382 1.078 1.923 2.263.594 1.3.488 2.275.394 3.135-.085.776-.165 1.509.27 2.371.284.56 1.144 2.265 8.858 3.297 3.817.51 7.746.643 11.679.392l.006.097a60.94 60.94 0 01-3.874.124z"
                        opacity="0.5"
                    />
                </g>
                <path
                    fill="url(#paint3_linear_1369_69394)"
                    d="M37.924 73.097l-19.732-1.5V16.071l19.732-1.461v58.486z"
                />
                <path
                    fill="#fff"
                    d="M19.718 69.17V18.502l18.206-1.223v53.15l-18.206-1.26z"
                />
                <mask
                    id="mask2_1369_69394"
                    style={{maskType: "luminance"}}
                    width="19"
                    height="54"
                    x="19"
                    y="17"
                    maskUnits="userSpaceOnUse"
                >
                    <path
                        fill="#fff"
                        d="M19.718 69.17V18.502l18.206-1.223v53.15l-18.206-1.26z"
                    />
                </mask>
                <g mask="url(#mask2_1369_69394)">
                    <path
                        fill="#D8DEE8"
                        d="M91.942 30.437l-19.58.575c-.065-10.75-.118-26.111-.012-27.537a2.934 2.934 0 01-.23.89l-2.594-2.244c-.278.647-.287 1.187-.31 2.631-.012.82-.021 1.996-.026 3.497-.008 2.511-.005 5.977.01 10.302.023 7.357.072 14.757.072 14.831l.015 2.236 6.717-.125v16.105l-12.668-.241-7.568-15.145-10.396.185 13.963-25.273-2.209-2.699-15.35 28.036-6.605.118c.01-2.543.024-7.063.033-11.564.008-3.976.01-7.16.005-9.461-.009-4.59-.026-4.643-.12-4.934l-1.233 1.089a1.39 1.39 0 01-.062-.309c.065.956.036 14.896-.003 25.203l-6.897.123c-1.253-7.41-4.182-24.725-4.28-25.203l-2.298 1.457-.005-.028c.125.67 2.714 16.065 4.443 26.366l.248 1.483 14.454-.102-8.98 16.4-17.622-.629v3.91l18.786.873 11.37-20.58 11.319-.08 5.296 10.694-13.993-.266v30.376l1.466.14V53.324l13.704.34 13.821 27.903 2.544-2.531-12.632-25.28 13.168.325V35.463l14.239-.266v-4.76z"
                    />
                </g>
                <path
                    fill="url(#paint4_linear_1369_69394)"
                    d="M51.382 69.907h23.012V17.879H51.382v52.028z"
                />
                <path fill="#fff" d="M72.528 67.53V20.219H51.382v47.31h21.146z"/>
                <mask
                    id="mask3_1369_69394"
                    style={{maskType: "luminance"}}
                    width="22"
                    height="48"
                    x="51"
                    y="20"
                    maskUnits="userSpaceOnUse"
                >
                    <path
                        fill="#fff"
                        d="M72.528 67.53V20.219H51.382v47.31h21.146z"
                    />
                </mask>
                <g mask="url(#mask3_1369_69394)">
                    <path
                        fill="#D8DEE8"
                        d="M80.895 33.344H63.404c-.062-8.795-.112-21.363-.013-22.521-.005.059-.039.37-.215.71l-2.442-2.044c-.264.51-.271.954-.293 2.143-.012.674-.02 1.643-.025 2.879-.008 2.068-.005 4.924.008 8.489.023 6.063.069 12.161.07 12.222l.013 1.842h6.27v13.059H54.783l-7.522-12.768h-10.8l14.38-21.115-2.209-2.436-16.039 23.551H25.3c.01-2.28.028-6.33.038-10.365.01-3.564.011-6.417.006-8.48-.01-4.116-.03-4.164-.135-4.432l-1.39.885a1.065 1.065 0 01-.07-.282c.073.864.04 13.402-.004 22.674H15.8c-1.474-6.831-4.958-22.972-5.076-23.423L7.95 15.108l-.006-.027c.152.634 3.272 15.074 5.332 24.626l.295 1.368H30.06L19.963 55.9h-21.26v3.72h22.595l12.63-18.545H45.8l5.33 9.047H36.74v26.514h1.554V52.101h14.003l13.209 22.422 2.339-2.232-11.895-20.19h12.383V37.064h12.563v-3.72z"
                    />
                </g>
                <path
                    fill="url(#paint5_linear_1369_69394)"
                    d="M51.382 69.907l-13.458 3.19V14.611l13.458 3.267v52.029z"
                />
                <path
                    fill="#D8DEE8"
                    d="M37.924 70.43V17.279l13.458 2.973v47.282L37.924 70.43z"
                />
                <mask
                    id="mask4_1369_69394"
                    style={{maskType: "luminance"}}
                    width="15"
                    height="54"
                    x="37"
                    y="17"
                    maskUnits="userSpaceOnUse"
                >
                    <path
                        fill="#fff"
                        d="M37.924 70.43V17.279l13.458 2.973v47.282L37.924 70.43z"
                    />
                </mask>
                <g mask="url(#mask4_1369_69394)">
                    <path
                        fill="#A2A7AE"
                        d="M64.831 34.712l-7.536-.753c-.029-8.315-.052-20.201-.006-21.282a3.127 3.127 0 01-.1.641l-1.15-2.302c-.126.448-.13.873-.14 2.008-.006.644-.01 1.57-.012 2.754-.004 1.98-.002 4.717.004 8.133.01 5.809.032 11.651.033 11.71l.006 1.764 2.91.19V49.73l-5.717.313-3.928-12.803-6.174-.389 8.08-20.648-1.169-2.768L40.64 36.7l-4.767-.3c.007-2.603.019-7.23.026-11.837.006-4.069.007-7.327.003-9.684-.007-4.702-.02-4.76-.091-5.087l-.954.755a2.187 2.187 0 01-.048-.338c.05 1.009.028 15.446-.002 26.124l-5.746-.362c-1.124-8.374-3.862-28.745-3.957-29.33l-2.264.853-.006-.036c.126.833 2.664 19.377 4.29 31.268l.229 1.68 11.673.334-6.89 17.25-17.43 1.881v4.976L33.09 62.23l8.381-21.42 6.926.198 2.853 9.135-8.063.441v28.5l.929-.278V52.644l7.739-.564 6.407 20.518 1.056-2.362-5.612-18.292 5.83-.425V37.62l5.295.347v-3.256z"
                    />
                </g>
                <path
                    fill="url(#paint6_linear_1369_69394)"
                    d="M79.311 17.007c0 7.267-10.18 20.528-14.788 26.157a2.867 2.867 0 01-4.437 0c-4.607-5.629-14.788-18.89-14.788-26.157C45.298 7.614 52.912 0 62.305 0 71.697 0 79.31 7.614 79.31 17.007z"
                />
                <path
                    fill="#fff"
                    d="M62.304 26.492a9.485 9.485 0 100-18.97 9.485 9.485 0 000 18.97z"
                />
                <path
                    fill="url(#paint7_linear_1369_69394)"
                    d="M62.23 36.182c1.079-7.106 5.77-9.38 4.965-16.09-.928-7.737-7.78-9.798-7.945-16.685a10.93 10.93 0 01.409-3.202c-8.136 1.271-14.361 8.31-14.361 16.802 0 7.267 10.18 20.528 14.788 26.157a2.859 2.859 0 002.654 1.017c-.824-3.112-.85-5.77-.51-8z"
                    opacity="0.3"
                />
                <path
                    fill="url(#paint8_linear_1369_69394)"
                    d="M62.304 54.914a3.476 3.476 0 100-6.952 3.476 3.476 0 000 6.952z"
                />
            </g>
            <defs>
                <linearGradient
                    id="paint0_linear_1369_69394"
                    x1="29.235"
                    x2="13.666"
                    y1="29.41"
                    y2="53.266"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#E38DDD"></stop>
                    <stop offset="1" stopColor="#9571F6"></stop>
                </linearGradient>
                <linearGradient
                    id="paint1_linear_1369_69394"
                    x1="25.757"
                    x2="30.222"
                    y1="2.737"
                    y2="39.809"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#AA80F9"></stop>
                    <stop offset="1" stopColor="#6165D7"></stop>
                </linearGradient>
                <linearGradient
                    id="paint2_linear_1369_69394"
                    x1="21.616"
                    x2="18.306"
                    y1="46.839"
                    y2="77.159"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#E38DDD"></stop>
                    <stop offset="1" stopColor="#9571F6"></stop>
                </linearGradient>
                <linearGradient
                    id="paint3_linear_1369_69394"
                    x1="18.192"
                    x2="37.924"
                    y1="43.854"
                    y2="43.854"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FF9085"></stop>
                    <stop offset="1" stopColor="#FB6FBB"></stop>
                </linearGradient>
                <linearGradient
                    id="paint4_linear_1369_69394"
                    x1="57.659"
                    x2="80.523"
                    y1="30.423"
                    y2="89.314"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FF9085"></stop>
                    <stop offset="1" stopColor="#FB6FBB"></stop>
                </linearGradient>
                <linearGradient
                    id="paint5_linear_1369_69394"
                    x1="32.409"
                    x2="57.393"
                    y1="43.821"
                    y2="43.972"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FF9085"></stop>
                    <stop offset="1" stopColor="#FB6FBB"></stop>
                </linearGradient>
                <linearGradient
                    id="paint6_linear_1369_69394"
                    x1="60.111"
                    x2="77.238"
                    y1="10.832"
                    y2="54.948"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FCB148"></stop>
                    <stop offset="0.05" stopColor="#FDB946"></stop>
                    <stop offset="0.14" stopColor="#FEC144"></stop>
                    <stop offset="0.32" stopColor="#FFC444"></stop>
                    <stop offset="0.48" stopColor="#FDB946"></stop>
                    <stop offset="0.78" stopColor="#F99C4C"></stop>
                    <stop offset="0.87" stopColor="#F8924F"></stop>
                    <stop offset="1" stopColor="#F8924F"></stop>
                </linearGradient>
                <linearGradient
                    id="paint7_linear_1369_69394"
                    x1="53.978"
                    x2="71.105"
                    y1="13.213"
                    y2="57.328"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FCB148"></stop>
                    <stop offset="0.05" stopColor="#FDB946"></stop>
                    <stop offset="0.14" stopColor="#FEC144"></stop>
                    <stop offset="0.32" stopColor="#FFC444"></stop>
                    <stop offset="0.48" stopColor="#FDB946"></stop>
                    <stop offset="0.78" stopColor="#F99C4C"></stop>
                    <stop offset="0.87" stopColor="#F8924F"></stop>
                    <stop offset="1" stopColor="#F8924F"></stop>
                </linearGradient>
                <linearGradient
                    id="paint8_linear_1369_69394"
                    x1="66.762"
                    x2="55.638"
                    y1="44.672"
                    y2="61.556"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FCB148"></stop>
                    <stop offset="0.05" stopColor="#FDB946"></stop>
                    <stop offset="0.14" stopColor="#FEC144"></stop>
                    <stop offset="0.32" stopColor="#FFC444"></stop>
                    <stop offset="0.48" stopColor="#FDB946"></stop>
                    <stop offset="0.78" stopColor="#F99C4C"></stop>
                    <stop offset="0.87" stopColor="#F8924F"></stop>
                    <stop offset="1" stopColor="#F8924F"></stop>
                </linearGradient>
                <clipPath id="clip0_1369_69394">
                    <path
                        fill="#fff"
                        d="M0 0H79.66V80H0z"
                        transform="translate(.34)"
                    />
                </clipPath>
            </defs>
        </svg>
    );
}

