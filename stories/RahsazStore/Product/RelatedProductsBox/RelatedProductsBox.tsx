import React from "react";
import {Card, CardBody, CardHeader, CardFooter} from "@nextui-org/card";
import {CardPaymentIcon, FastDeliveryIcon, ReverseProductIcon, SupportIcon, WalletIcon} from "@/stories/Icons";
import {Button} from "@nextui-org/react";


export type ProductRelatedProductsBoxProps = {}


export const ProductRelatedProductsBox = (
    {}
        :
        ProductRelatedProductsBoxProps
) => {

    const items = [
        {
            title: "پرداخت امن",
            description: "با تمامی کارت های عضو شبکه شتاب",
            icon: CardPaymentIcon
        },
        {
            title: "کیف پول",
            description: "امکان پرداخت با چک، پایا، اقساط و ...",
            icon: WalletIcon
        },
        {
            title: "ارسال سریع",
            description: "ارسال کالا با روش های مختلف و در کمترین زمان ممکن",
            icon: FastDeliveryIcon
        },
        {
            title: "پشتیبانی",
            description: "7 روز هفته، 24 ساعت شبانه روز",
            icon: SupportIcon
        },
        {
            title: "بازگشت کالا",
            description: "ضمانت 7 روز بازگشت کالا در صورت مغایرت",
            icon: ReverseProductIcon
        },
    ]


    return (
        <Card shadow="none" className="bg-transparent">
            <CardHeader className="flex justify-between py-2">
                <h3 className="font-bold text-lg">کالاهای مشابه</h3>
            </CardHeader>
            <CardBody className="text-start py-3 flex-col">
                <div className="flex items-center gap-4 overflow-y-hidden px-0.5 hide-scrollbar">
                    {items.map((v, i) => {
                        return (
                            <div key={i} className="flex-shrink-0 relative flex items-center ps-5">
                                <div className="absolute h-10 w-10 text-primary -start-0 z-20">
                                    <v.icon/>
                                </div>
                                <Card shadow="none" className="bg-zinc-300">
                                    <CardHeader className="font-bold text-sm text-green-600 pb-1 ps-6">
                                        {v.title}
                                    </CardHeader>
                                    <CardBody className="font-light text-xs text-gray-600 pt-1 ps-6">
                                        {v.description}
                                    </CardBody>
                                </Card>
                            </div>
                        )
                    })}
                </div>
            </CardBody>
        </Card>
    );
};
