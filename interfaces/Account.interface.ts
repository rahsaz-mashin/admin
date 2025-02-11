import {AccountPhoneNumber} from "@/interfaces/AccountPhoneNumber.interface";
import {AccountEmailAddress} from "@/interfaces/AccountEmailAddress.interface";
import {AccountPermissionGroup} from "@/interfaces/AccountPermissionGroup.interface";
import {FileStorage} from "@/interfaces/FileStorage.interface";
import {Identity} from "@/interfaces/Identity.interface";


export interface Account {
    id?: number;
    isActive: boolean;

    identity: Identity | null;

    email: AccountEmailAddress | null;
    phone: AccountPhoneNumber | null;
    avatar: FileStorage | null;

    permissions: AccountPermissionGroup[];

    token?: string;

    isRestricted?: boolean;
    restrictedAt?: Date | null;
    restrictedBy?: Account | null;
    restrictionExpireAt?: Date | null;
    restrictionText?: string | null;

    createdBy?: Account;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date | null;
}
