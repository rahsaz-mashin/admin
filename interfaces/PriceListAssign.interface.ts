import {PriceList} from "@/interfaces/PriceList.interface";
import {Account} from "@/interfaces/Account.interface";
import {Identity} from "@/interfaces/Identity.interface";
import {IdentityCategory} from "@/interfaces/IdentityCategory.interface";
import {IdentityGrade} from "@/interfaces/IdentityGrade.interface";


export enum assignTypeEnum {
    identity = 'identity',
    identityCategory = 'identityCategory',
    identityGrade = 'identityGrade',
}


export interface PriceListAssign {
    id?: number;

    assignType: assignTypeEnum;

    identity: Identity | null;
    identityCategory: IdentityCategory | null;
    identityGrade: IdentityGrade | null;

    priceList: { priceList: PriceList }[];

    priority: number;

    createdBy?: Account;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date | null;
}

