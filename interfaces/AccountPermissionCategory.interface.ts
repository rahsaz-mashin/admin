import {Icon} from "@/interfaces/Icon.interface";


export interface AccountPermissionCategory {
    id?: number;
    title: string;
    description?: string | null;
    icon?: Icon | null;
}
