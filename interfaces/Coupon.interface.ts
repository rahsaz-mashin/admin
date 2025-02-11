import {AssignType} from "@/types/AssignType";
import {Account} from "@/interfaces/Account.interface";




export enum couponPolicyEnum {
    percent = 'percent',
    amount = 'amount',
}




export interface Coupon {
    readonly id?: number;

    title: string;
    description?: string | null;
    code: string;

    startAt: Date | null;
    stopAt: Date | null;
    maxUsage: number | null;
    minAmount: number | null;
    maxAmount: number | null;

    couponPolicy: couponPolicyEnum;

    value: number;
    maxDiscountAmount: number | null;
    isActive: boolean;


    readonly createdBy?: AssignType<Account>;
    readonly createdAt?: Date;
    readonly updatedAt?: Date;
    readonly deletedAt?: Date | null;
}
