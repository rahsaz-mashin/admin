import {Account} from "@/interfaces/Account.interface";
import {Icon} from "@/interfaces/Icon.interface";
import {AccountPermission} from "@/interfaces/AccountPermission.interface";


export interface AccountPermissionGroup {
    id?: number;
    title: string;
    description?: string | null;
    icon?: Icon | null;

    permissions: AccountPermission[];

    accounts?: Account[];

    isDefault?: boolean;
    isActive?: boolean;
}
