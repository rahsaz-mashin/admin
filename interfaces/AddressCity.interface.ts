import {Icon} from "@/interfaces/Icon.interface";
import {AddressProvince} from "@/interfaces/AddressProvince.interface";
import {AddressCountry} from "@/interfaces/AddressCountry.interface";

export interface AddressCity {
    id?: number;

    country?: AddressCountry; // just for form
    province?: AddressProvince;

    title: string;
    icon?: Icon | null;
}
