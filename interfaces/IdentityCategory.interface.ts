import {Icon} from "@/interfaces/Icon.interface";
import {Account} from "@/interfaces/Account.interface";

export interface IdentityCategory {
    id?: number;
    title: string;
    description?: string | null;
    icon?: Icon | null;
    parent: IdentityCategory | null;

    createdBy?: Account;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date | null;
}
