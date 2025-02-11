import {Icon} from "@/interfaces/Icon.interface";


export interface IdentityEmailAddressType {
    id?: number;
    title: string;
    description?: string | null;
    icon?: Icon | null;
    isDefault: boolean;
}
