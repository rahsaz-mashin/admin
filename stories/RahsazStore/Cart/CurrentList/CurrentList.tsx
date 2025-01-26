import React from "react";
import {Card, CardHeader, CardBody} from "@nextui-org/card";
import {Button, Divider, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger} from "@nextui-org/react";
import {ArrowBackRounded, DeleteRounded, MoreVert} from "@mui/icons-material";
import {CartProduct} from "@/interfaces/Cart.interface";
import {CartProductItem} from "@/stories/RahsazStore/Cart/Product";
import {Product} from "@/interfaces/Product.interface";
import {toast} from "@/lib/toast";
import {axiosCoreWithAuth} from "@/lib/axios";


export type CartCurrentListProps = {
    list: CartProduct[];
}


export const CartCurrentList = (props: CartCurrentListProps) => {

    const {
        list,
    } = props


    const axios = axiosCoreWithAuth()

    const onRemove = async () => {
        try {
            await axios.delete(`/store/cart/product/remove`)
        } catch (e) {
            toast.error("برای حذف کالاها از سبد، خطایی رخ داد")
        }
    }

    const onMoveToNext = async() => {
        try {
            await axios.patch(`/store/cart/product/moveToNext`)
        } catch (e) {
            toast.error("برای انتقال کالاها از سبد، خطایی رخ داد")
        }
    }


    return (
        <>
            <div className="text-sm text-gray-500 px-2 w-full">
                <span className="text-justify w-full block">هزینه این سفارش هنوز پرداخت نشده‌ و در صورت اتمام موجودی، کالاها از سبد حذف می‌شوند.</span>
            </div>
            <Card>
                <CardHeader className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                        <h6 className="">سبد خرید شما</h6>
                        <span className="">({list.length})</span>
                    </div>
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
                                key="remove"
                                color="danger"
                                startContent={<DeleteRounded/>}
                                onPress={onRemove}
                            >
                                حذف همه
                            </DropdownItem>
                            <DropdownItem
                                key="moveToNext"
                                color="secondary"
                                startContent={<ArrowBackRounded/>}
                                onPress={onMoveToNext}
                            >
                                انتقال همه به خرید بعدی
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </CardHeader>
                <Divider/>
                <CardBody className="flex flex-col justify-stretch items-stretch text-center gap-3 min-h-60">
                    <ul className="flex flex-col">
                        {list.map((product, idx) => {
                            return (
                                <CartProductItem
                                    key={product.id}
                                    id={product.id}
                                    count={product.count}
                                    amount={product.amount}
                                    product={product.product as Product}
                                />
                            )
                        })}
                        {/*<Divider/>*/}
                    </ul>
                </CardBody>
            </Card>
        </>
    );
};

