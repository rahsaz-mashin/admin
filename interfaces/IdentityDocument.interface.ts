import {Icon} from "@/interfaces/Icon.interface";
import {Account} from "@/interfaces/Account.interface";

export interface IdentityDocument {
    id?: number;
    title: string;
    description?: string | null;

    withAttachment?: boolean;
    withTextarea?: boolean;
    acceptAttachment: { [key: string]: string[] } | null;

    createdBy?: Account;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date | null;
}
