import {AssignType} from "@/types/AssignType";
import {Product} from "@/interfaces/Product.interface";
import {Account} from "@/interfaces/Account.interface";
import {PriceList} from "@/interfaces/PriceList.interface";
import {Currency} from "@/interfaces/Currency.interface";
import {OrderDeliveryMethod} from "@/interfaces/OrderDeliveryMethod.interface";
import {IdentityAddress} from "@/interfaces/IdentityAddess.interface";




export enum discountPolicyEnum {
    percent = 'percent',
    amount = 'amount',
}




export interface Discount {
    readonly id?: number;

    title: string;
    description?: string | null;
    code: string;

    startAt: Date | null;
    stopAt: Date | null;
    maxUsage: number | null;
    minAmount: number | null;
    maxAmount: number | null;

    discountPolicy: discountPolicyEnum;

    value: number;
    maxDiscountAmount: number | null;
    isActive: boolean;


    readonly createdBy?: AssignType<Account>;
    readonly createdAt?: Date;
    readonly updatedAt?: Date;
    readonly deletedAt?: Date | null;
}
