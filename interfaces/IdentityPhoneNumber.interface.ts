import {Identity} from "@/interfaces/Identity.interface";
import {IdentityPhoneNumberType} from "@/interfaces/IdentityPhoneNumberType.interface";
import {Account} from "@/interfaces/Account.interface";

export interface IdentityPhoneNumber {
    id?: number;
    value: string;
    internal: string | null;
    description: string | null;
    identity?: Identity;
    isDefault: boolean;
    type: IdentityPhoneNumberType | null;

    createdBy?: Account;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date | null;
}
