import {Account} from "@/interfaces/Account.interface";
import {CalculatePrice, Product} from "@/interfaces/Product.interface";
import {AssignType} from "@/types/AssignType";
import {Currency} from "@/interfaces/Currency.interface";
import {PriceList} from "@/interfaces/PriceList.interface";


export enum cartTypesEnum {
    current = 'current',
    next = 'next',
}


export interface CartProduct {
    product: AssignType<Product>;
    count: number;
    amount: number;

    info?: CalculatePrice;
}


export interface Cart {
    readonly id?: number;

    priceList: AssignType<PriceList> | null;

    account: AssignType<Account> | null;
    type: cartTypesEnum;
    products: CartProduct[];

    readonly createdBy?: AssignType<Account>;
    readonly createdAt?: Date;
    readonly updatedAt?: Date;
    readonly deletedAt?: Date | null;
}
