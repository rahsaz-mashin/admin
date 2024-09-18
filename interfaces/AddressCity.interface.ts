import {Icon} from "@/interfaces/Icon.interface";
import {AddressProvince} from "@/interfaces/AddressProvince.interface";

export interface AddressCity {
    id?: number;

    province?: AddressProvince;

    title: string;
    icon?: Icon | null;
}
