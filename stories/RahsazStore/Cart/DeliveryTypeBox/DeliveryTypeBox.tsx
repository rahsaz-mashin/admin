"use client"

import React, {useEffect, useState} from "react";
import {Card, CardHeader, CardBody} from "@nextui-org/card";
import clsx from "clsx";
import {axiosCoreWithAuth} from "@/lib/axios";
import {PaginationResponse} from "@/types/PaginationResponse";
import {OrderDeliveryMethod} from "@/interfaces/OrderDeliveryMethod.interface";
import {Spinner} from "@nextui-org/react";
import {Control, useController, UseFormSetValue, UseFormWatch} from "react-hook-form";
import {Cart} from "@/interfaces/Cart.interface";
import {AssignType} from "@/types/AssignType";


export type CartDeliveryTypeBoxProps = {
    control: Control<Cart>;
    setValue: UseFormSetValue<Cart>;
    watch: UseFormWatch<Cart>;
}


export const CartDeliveryTypeBox = (props: CartDeliveryTypeBoxProps) => {

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
        name: "deliveryMethod",
        control,
    })


    const [isLoading, setLoading] = useState<boolean>(true)
    const [list, setList] = useState<PaginationResponse<OrderDeliveryMethod>>({data: []})
    const axios = axiosCoreWithAuth()
    const getList = async () => {
        setLoading(true)
        const _data: PaginationResponse<OrderDeliveryMethod> = await axios.get(`/store/order/deliveryMethod/list`)
        setList(_data)
        setLoading(false)
    }
    useEffect(() => {
        getList()
    }, []);


    const getDetail = async (id: AssignType<OrderDeliveryMethod> | null) => {
        if (!id) return
        setLoading(true)
        const _data: OrderDeliveryMethod = await axios.get(`/store/order/deliveryMethod/detail/${id}`)
        setValue("deliveryMethodInfo", _data)
        setLoading(false)
    }

    useEffect(() => {
        setDeliveryMethod(watch("deliveryMethod"))
    }, [watch("deliveryMethod")]);

    const setDeliveryMethod = async (id: AssignType<OrderDeliveryMethod> | null) => {
        setLoading(true)
        await axios.patch(`/store/cart/deliveryMethod`, {deliveryMethod: id})
        await getDetail(id)
        setLoading(false)
    }

    console.log([isLoading, formState.isValidating, formState.isLoading, formState.isSubmitting])

    return (
        <div id="delivery" className="flex-shrink-0 p-4">
            <Card
                shadow="none"
                radius="none"
            >
                <CardHeader
                    className="text-white bg-primary py-2 w-fit font-light text-base rounded-tr-2xl relative after:absolute after:bg-primary after:-end-12 after:h-full after:w-12 after:rounded-tl-[10rem]"
                >
                    روش دریافت
                </CardHeader>
                <CardBody
                    className="relative border min-h-20 border-primary rounded-2xl rounded-tr-none gap-2 text-start">
                    <div
                        data-loading={isLoading || formState.isValidating || formState.isLoading || formState.isSubmitting}
                        className="absolute rounded-3xl z-10 p-3 top-0 left-0 w-full h-full bg-white/20 backdrop-blur-sm justify-center items-center hidden data-[loading=true]:flex"
                    >
                        <Spinner/>
                    </div>
                    <span className="text-gray-500 text-sm font-light">
                        روش دریافت کالا را انتخاب کنید!
                    </span>
                    <ul className="flex flex-wrap gap-3">
                        {(list?.data || []).map(({id, title, icon, description, acceptAddress}) => {
                            return (
                                <CartDeliveryTypeItem
                                    key={id}
                                    title={title}
                                    icon={icon?.content}
                                    isSelected={id === field.value}
                                    handleSwitch={() => field.onChange(id)}
                                />
                            )
                        })}
                    </ul>
                    {watch("deliveryMethodInfo")?.description && (
                        <span className="font-light">
                            {watch("deliveryMethodInfo")?.description}
                        </span>
                    )}
                </CardBody>
            </Card>
        </div>
    );
};


export type CartDeliveryTypeItemProps = {
    title: string;
    icon: string;
    isSelected: boolean;
    handleSwitch: () => void
}


export const CartDeliveryTypeItem = (props: CartDeliveryTypeItemProps) => {
    const {title, icon, isSelected, handleSwitch} = props
    return (
        <Card
            // onClick={() => }
            shadow="sm"
            isHoverable
            isPressable
            onPress={() => handleSwitch()}
            className={clsx("flex flex-shrink-0 flex-col justify-center items-center group/item gap-3 text-sm bg-white hover:bg-primary/20 transition min-w-36 h-36 rounded-xl cursor-pointer text-gray-500 text-center", isSelected ? "bg-primary/20 isSelected" : "")}
        >
            <i dangerouslySetInnerHTML={{__html: icon || ""}} className="w-20 h-20"/>
            <span
                className="font-bold transition group-[.isSelected]/item:text-primary group-hover/item:text-primary"
            >
                {title}
            </span>
        </Card>
    )
}

