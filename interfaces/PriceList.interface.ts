import {Account} from "@/interfaces/Account.interface";
import {FileStorage} from "@/interfaces/FileStorage.interface";
import {Icon} from "@/interfaces/Icon.interface";
import {Currency} from "@/interfaces/Currency.interface";


export enum pricingPolicyEnum {
    none = 'none',
    constantPercent = 'constantPercent',
    constantNumber = 'constantNumber',
}


export interface PriceList {
    id?: number;

    title: string;
    description: string | null;
    icon?: Icon | null;

    pricingPolicy: pricingPolicyEnum;
    value: number;

    primaryCurrency?: Currency;
    secondaryCurrency?: Currency;

    ratio: number;

    isDefault: boolean;

    createdBy?: Account;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date | null;
}

