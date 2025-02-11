import {Icon} from "@/interfaces/Icon.interface";
import {AddressCity} from "@/interfaces/AddressCity.interface";
import {AddressCountry} from "@/interfaces/AddressCountry.interface";

export interface AddressProvince {
    id?: number;

    country?: AddressCountry;

    title: string;
    icon?: Icon | null;

    cities?: AddressCity[];
}
