import React, {useContext} from "react";
import {Card, CardBody, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger} from "@nextui-org/react";
import {MyCartIcon} from "@/stories/Icons";
import Link from "next/link";
import {Session} from "next-auth";
import {CartContext} from "@/context/cart.context";
import {usePathname} from "next/navigation";


export type MyCartButtonProps = {
    session: Session | null;
}


export const MyCartButton = (props: MyCartButtonProps) => {

    const {
        session,
    } = props

    const cartContext = useContext(CartContext)

    const pathname = usePathname()

    return (
        <>
            <div
                className={
                    [
                        "relative h-20 min-w-20 items-center justify-center hidden lg:flex transition-width duration-500 group",
                        "after:absolute after:h-0 data-[active=true]:after:h-[30px] after:bottom-[-16px] after:end-[-30px] after:w-[30px] after:bg-store-header-end",
                        "before:absolute before:h-0 data-[active=true]:before:h-[30px] before:bottom-[-16px] before:start-[-30px] before:w-[30px] before:bg-store-header-start",
                    ].join(" ")
                }
                data-active={pathname === "/cart"}
            >
                <div className="bg-white w-full h-0 group-data-[active=true]:h-[30px] absolute bottom-[-16px]"/>
                <Card
                    shadow="none"
                    className="w-full h-full hover:text-primary group-data-[active=true]:rounded-b-none"
                    radius="lg"
                    as={Link}
                    href="/cart"
                >
                    <CardBody
                        className="flex flex-row gap-4 px-4 items-center justify-center overflow-y-hidden">
                        <MyCartIcon size={36}/>
                        <div className="xl:flex flex-col items-start hidden">
                            {(cartContext.products.length === 0) && (
                                <span className="font-bold text-sm flex items-center text-black gap-1">
                                    خالی است!
                                </span>
                            )}
                            {(cartContext.products.length > 0) && (
                                <span className="font-bold flex items-center text-black gap-1">
                                    0
                                    {" "}
                                    <div className="text-primary text-xs">تومانءء</div>
                                </span>
                            )}
                            <h4 className="text-gray-500 text-xs">سبد خرید من</h4>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </>
    );
};
