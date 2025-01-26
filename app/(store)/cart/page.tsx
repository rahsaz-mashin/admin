"use client"


import React, {useContext} from "react";
import {CartTabs} from "@/stories/RahsazStore/Cart/Tabs";
import {CartSidebar} from "@/stories/RahsazStore/Cart/Sidebar";
import {CartSubmitBox} from "@/stories/RahsazStore/Cart/SubmitBox";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {axiosCoreWithAuth} from "@/lib/axios";
import {z} from "zod";
import {Cart} from "@/interfaces/Cart.interface";
import {Loading} from "@/stories/RahsazAdmin/Loading";


type T = Cart


export default function Page() {

    const schema = z.object({
        jj: z.string()
    })

    const initialData: () => Promise<T> = async () => {
        const p = await axios.get(`/store/cart`) as T
        return {
            ...p,
            products: p.products || [],
            nextList: p.nextList || [],
        }
    }


    const axios = axiosCoreWithAuth()
    const onSubmit = async (data: T) => {
        // await axios.patch(`/admin/wallet/transaction/${id}/${mode}`, data)
    }


    const {
        handleSubmit,
        control,
        reset,
        formState,
        watch,
        setValue,
        setFocus,
    } = useForm<T>({
        resolver: zodResolver(schema),
        defaultValues: initialData,
    });


    {/* <form onSubmit={handleSubmit(onSubmit)}> */}
    {/*</form>*/}
    return (
        <main className="grid grid-cols-6 gap-0 h-full">
            <section className="col-span-full lg:col-span-4 relative">
                <div className="flex flex-col relative">
                    <CartTabs
                        control={control}
                        setValue={setValue}
                        watch={watch}
                    />
                </div>
            </section>
            <section className="col-span-full lg:col-span-2 relative">
                <CartSidebar
                    control={control}
                    setValue={setValue}
                    watch={watch}
                />
            </section>
            <div
                className="sticky bottom-0 bg-white z-10 col-span-full shadow-[0px_-4px_24px_0px_#00000030] lg:shadow-none lg:col-start-5 lg:col-span-2"
            >
                <CartSubmitBox
                    control={control}
                    setValue={setValue}
                    watch={watch}
                />
                <div className="pb-24 md:pb-0"/>
            </div>
            <Loading isLoading={formState.isLoading}/>
        </main>
    );
}
