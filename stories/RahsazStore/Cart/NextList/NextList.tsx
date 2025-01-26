import React from "react";
import {Card, CardHeader, CardBody} from "@nextui-org/card";
import {Button, Divider, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger} from "@nextui-org/react";
import {ArrowBackRounded, DeleteRounded, MoreVert} from "@mui/icons-material";
import {CartNextProduct} from "@/interfaces/Cart.interface";
import {CartProductItem} from "@/stories/RahsazStore/Cart/Product";
import {Product} from "@/interfaces/Product.interface";
import {toast} from "@/lib/toast";
import {axiosCoreWithAuth} from "@/lib/axios";


export type CartNextListProps = {
    list: CartNextProduct[];
}


export const CartNextList = (props: CartNextListProps) => {

    const {
        list,
    } = props


    const axios = axiosCoreWithAuth()

    const onRemove = async () => {
        try {
            await axios.delete(`/store/cart/product/remove`)
        } catch (e) {
            toast.error("برای حذف کالاها از لیست خرید بعدی، خطایی رخ داد")
        }
    }

    const onMoveToCart = async() => {
        try {
            await axios.patch(`/store/cart/product/moveToCart`)
        } catch (e) {
            toast.error("برای انتقال کالاها از لیست خرید بعدی، خطایی رخ داد")
        }
    }


    return (
        <>
            <div className="text-sm text-gray-500 px-2 w-full">
                <span className="text-justify w-full block">این لیست صرفا جهت خرید بعدی شماست و تضمینی جهت موجود بودن کالا در انبار، وجود ندارد.</span>
            </div>
            <Card>
                <CardHeader className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                        <h6 className="">لیست خرید بعدی شما</h6>
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
                                onPress={onMoveToCart}
                            >
                                انتقال همه به سبد خرید
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
                                    isNextList
                                    id={product.id}
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

