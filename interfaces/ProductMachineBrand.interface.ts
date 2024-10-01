import {Icon} from "@/interfaces/Icon.interface";
import {Account} from "@/interfaces/Account.interface";

export interface ProductMachineBrand {
    id?: number;

    title: string;
    slug: string;
    description?: string | null;
    tags: string[];
    icon?: Icon | null;

    createdBy?: Account;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date | null;
}
