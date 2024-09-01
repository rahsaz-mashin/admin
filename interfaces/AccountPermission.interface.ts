import {Account} from "@/interfaces/Account.interface";
import {Icon} from "@/interfaces/Icon.interface";
import {AccountPermissionGroup} from "@/interfaces/AccountPermissionGroup.interface";
import {AccountPermissionCategory} from "@/interfaces/AccountPermissionCategory.interface";


export interface AccountPermission {
    id: number;

    key: string;
    title: string;

    description: string | null;

    icon: Icon | null;

    category: AccountPermissionCategory;

    groups: AccountPermissionGroup[];

    createdBy: Account;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
}
