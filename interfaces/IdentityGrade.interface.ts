import {Icon} from "@/interfaces/Icon.interface";
import {Account} from "@/interfaces/Account.interface";

export interface IdentityGrade {
    id?: number;
    title: string;
    description?: string | null;
    icon?: Icon | null;
    isDefault: boolean;

    createdBy?: Account;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date | null;
}
