import {Account} from "@/interfaces/Account.interface";
import {Icon} from "@/interfaces/Icon.interface";
import {AccountPermissionGroup} from "@/interfaces/AccountPermissionGroup.interface";
import {AccountPermissionCategory} from "@/interfaces/AccountPermissionCategory.interface";


export interface AccountPermission {
    id?: number;
    title: string;
    description?: string | null;
    icon?: Icon | null;
    category?: AccountPermissionCategory | number;
    groups?: AccountPermissionGroup[];
}
