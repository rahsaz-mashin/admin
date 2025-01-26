"use client"

import React from "react";
import {Card, CardHeader, CardBody} from "@nextui-org/card";
import clsx from "clsx";
import {Alert, Button} from "@nextui-org/react";
import {Control, useController, useForm, UseFormSetValue, UseFormWatch} from "react-hook-form";
import {Cart} from "@/interfaces/Cart.interface";
import {z} from "zod";
import {axiosCoreWithAuth} from "@/lib/axios";
import {zodResolver} from "@hookform/resolvers/zod";
import {MinorInput} from "@/stories/General/MinorInput";
import {toast} from "@/lib/toast";
import {Coupon} from "@/interfaces/Coupon.interface";


export type CartCouponBoxProps = {
    control: Control<Cart>;
    setValue: UseFormSetValue<Cart>;
    watch: UseFormWatch<Cart>;
}


type T = {
    code: string;
}

export const CartCouponBox = (props: CartCouponBoxProps) => {


        const {
            control,
            setValue,
            watch,
        } = props

        const {
            field,
            // fieldState,
            // formState,
        } = useController({
            name: "coupon",
            control,
        })


        const cancel = () => {
            field.onChange(null)
            toast.success("کد تخفیف با موفقیت حذف شد!")
        }


        // ===========> coupon form

        const schema = z.object({
            code: z.string().min(1, "کد تخفیف نامعتبر است")
        })

        const initialData = async () => {
            return {
                code: ""
            }
        }


        const axios = axiosCoreWithAuth()
        const onSubmit = async (data: T) => {
            try {
                const t: Coupon = await axios.patch(`/store/cart/coupon`, data)
                field.onChange(t.id)
                toast.success("با موفقیت اعمال شد!")
            } catch (e) {
                toast.error("کد تخفیف معتبر نیست!")
            }
        }


        const {
            control: controlForm,
            handleSubmit,
            formState,
        } = useForm<T>({
            resolver: zodResolver(schema),
            defaultValues: initialData,
        });


        return (
            <div id="coupon" className="flex-shrink-0 p-4">
                <Card
                    shadow="none"
                    radius="none"
                >
                    <CardHeader
                        className="text-white bg-primary py-2 w-fit font-light text-base rounded-tr-2xl relative after:absolute after:bg-primary after:-end-12 after:h-full after:w-12 after:rounded-tl-[10rem]"
                    >
                        کد تخفیف
                    </CardHeader>
                    <CardBody className="relative border border-primary rounded-2xl rounded-tr-none gap-2 text-start">
                        {!!field.value && (
                            <Alert
                                color="success"
                                variant="solid"
                                classNames={{base: "text-start text-white"}}
                                title="کد تخفیف"
                                description="کد تخفیف اعمال شد"
                                endContent={
                                    <Button
                                        color="success"
                                        size="md"
                                        variant="flat"
                                        onPress={cancel}
                                    >
                                        لغو شود؟
                                    </Button>
                                }
                            />
                        )}
                        {!field.value && (
                            <>
                                <span className="text-gray-500 text-sm font-light">
                                    در صورتیکه کد تخفیف دارید می توانید آن را وارد کنید!
                                </span>
                                <div className="flex gap-2 items-center">
                                    <MinorInput
                                        name="code"
                                        control={controlForm}
                                        label="کد تخفیف"
                                        isDisabled={formState.isValidating || formState.isLoading || formState.isSubmitting}
                                        isLtr
                                        isRequired
                                    />
                                    <Button
                                        color="primary"
                                        variant="shadow"
                                        size="lg"
                                        isLoading={formState.isValidating || formState.isLoading || formState.isSubmitting}
                                        onPress={() => {
                                            handleSubmit(onSubmit)()
                                        }}
                                    >
                                        اعمال
                                    </Button>
                                </div>
                            </>
                        )}
                    </CardBody>
                </Card>
            </div>
        );
    }
;


export type CartPaymentWayItemProps = {
    title: string;
    description: string;
    icon: string;
    isSelected: boolean;
    handleSwitch: () => void
}


export const CartPaymentWayItem = (props: CartPaymentWayItemProps) => {
    const {title, description, icon, isSelected, handleSwitch} = props
    return (
        <Card
            shadow="sm"
            isHoverable
            isPressable
            onPress={() => handleSwitch()}
            className={clsx("flex flex-row flex-shrink-0 justify-start items-center p-4 group gap-4 text-sm bg-white hover:bg-primary/20 transition h-36 rounded-xl cursor-pointer text-gray-500 text-center", isSelected ? "bg-primary/20 isSelected" : "")}
        >
            <i dangerouslySetInnerHTML={{__html: icon}}/>
            <div className="flex flex-col gap-1 items-start">
                <span
                    className="font-bold transition group-[.isSelected]:text-primary group-hover:text-primary"
                >
                {title}
            </span>
                <span className="font-light">
                    {description}
                </span>
            </div>
        </Card>
    )
}
