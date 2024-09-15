import {Icon} from "@/interfaces/Icon.interface";
import {AddressProvince} from "@/interfaces/AddressProvince.interface";

export interface AddressCountry {
    id?: number;

    key: string;
    title: string;
    icon?: Icon | null;

    provinces?: AddressProvince[];
}
