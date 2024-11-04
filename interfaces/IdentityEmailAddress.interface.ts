import {Identity} from "@/interfaces/Identity.interface";
import {Account} from "@/interfaces/Account.interface";
import {IdentityEmailAddressType} from "@/interfaces/IdentityEmailAddressType.interface";

export interface IdentityEmailAddress {
    id?: number;
    value: string;
    description: string | null;
    identity?: Identity;
    isDefault: boolean;
    type: IdentityEmailAddressType | null;

    createdBy?: Account;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date | null;
}
