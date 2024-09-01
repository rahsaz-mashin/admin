import {Identity} from "@/interfaces/Identity.interface";
import {AccountAvatar} from "@/interfaces/AccountAvatar.interface";
import {AccountPhoneNumber} from "@/interfaces/AccountPhoneNumber.interface";
import {AccountEmailAddress} from "@/interfaces/AccountEmailAddress.interface";
import {AccountPermissionGroup} from "@/interfaces/AccountPermissionGroup.interface";

export interface Account {
    id: number;
    isActive: boolean;

    identity: Identity | null;

    email: AccountEmailAddress | null;
    phone: AccountPhoneNumber | null;
    avatar: AccountAvatar | null;

    permissions: AccountPermissionGroup[];

    token: string;
    secret: string;

    isRestricted: boolean;
    restrictedAt: Date | null;
    restrictedBy: Account | null;
    restrictionExpireAt: Date | null;
    restrictionText: string | null;

    createdBy: Account | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
}
