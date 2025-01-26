import {Account} from "@/interfaces/Account.interface";
import {CalculatePrice, Product} from "@/interfaces/Product.interface";
import {AssignType} from "@/types/AssignType";
import {PriceList} from "@/interfaces/PriceList.interface";
import {OrderDeliveryMethod} from "@/interfaces/OrderDeliveryMethod.interface";
import {IdentityAddress} from "@/interfaces/IdentityAddess.interface";
import {Coupon} from "@/interfaces/Coupon.interface";


export enum cartTypesEnum {
    current = 'current',
    next = 'next',
}


export interface CartProduct {
    readonly id?: number;

    product: AssignType<Product>;
    count: number;
    amount: number;

    info?: CalculatePrice;
}


export interface CartNextProduct {
    readonly id?: number;
    product: AssignType<Product>;
}


export interface Cart {
    readonly id?: number;

    priceList: AssignType<PriceList> | null;

    account: AssignType<Account> | null;

    products: CartProduct[];

    nextList: CartNextProduct[];


    deliveryMethod: AssignType<OrderDeliveryMethod> | null;
    deliveryMethodInfo?: OrderDeliveryMethod;

    address: AssignType<IdentityAddress> | null;

    isSelfRecipient : boolean;
    recipientName: string | null;
    recipientPhone: string | null;

    coupon: AssignType<Coupon> | null;

}
