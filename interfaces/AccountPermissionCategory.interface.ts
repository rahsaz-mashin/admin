import {Account} from "@/interfaces/Account.interface";
import {Icon} from "@/interfaces/Icon.interface";
import {AccountPermission} from "@/interfaces/AccountPermission.interface";


export interface AccountPermissionCategory {
    id: number;

    key: string;
    title: string;

    description: string | null;

    icon: Icon | null;

    permissions: AccountPermission[];

    createdBy: Account;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
}
