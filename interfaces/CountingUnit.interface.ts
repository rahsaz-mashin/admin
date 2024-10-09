import {Icon} from "@/interfaces/Icon.interface";
import {Account} from "@/interfaces/Account.interface";

export interface CountingUnit {
    id?: number;
    title: string;
    slug: string;
    description?: string | null;
    icon?: Icon | null;

    createdBy?: Account;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date | null;
}
