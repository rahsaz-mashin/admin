import {Icon} from "@/interfaces/Icon.interface";
import {Account} from "@/interfaces/Account.interface";

export interface Currency {
    id?: number;

    title: string;
    iso: string;
    icon?: Icon | null;
    isDefault: boolean;

    createdBy?: Account;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date | null;
}
