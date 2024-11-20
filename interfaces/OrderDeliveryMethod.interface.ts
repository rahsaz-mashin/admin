import {Icon} from "@/interfaces/Icon.interface";
import {Account} from "@/interfaces/Account.interface";
import {AssignType} from "@/types/AssignType";


export enum deliveryCostMethodsEnum {
    free = 'free',
    onDelivery = 'onDelivery',
    fixedCost = 'fixedCost',
}


export interface OrderDeliveryMethod {
    readonly id?: number;

    title: string;
    description?: string | null;
    isDefault?: boolean;
    icon?: Icon | null;
    acceptAddress: boolean;
    costMethod: deliveryCostMethodsEnum;
    cost: number;
    isActive: boolean;

    readonly createdBy?: AssignType<Account>;
    readonly createdAt?: Date;
    readonly updatedAt?: Date;
    readonly deletedAt?: Date | null;
}
