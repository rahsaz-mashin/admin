import {Account} from "@/interfaces/Account.interface";

export interface AccountEmailAddress {
    id?: number;

    value: string;
    account?: Account;

    isRestricted?: boolean;
    restrictedAt?: Date | null;
    restrictedBy?: Account | null;
    restrictionExpireAt?: Date | null;
    restrictionText?: string | null;

    isConfirmed?: boolean;
    confirmedAt?: Date | null;
    confirmedBy?: Account | null;

    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date | null;
}
