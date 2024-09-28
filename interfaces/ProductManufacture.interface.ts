import {Icon} from "@/interfaces/Icon.interface";
import {AddressProvince} from "@/interfaces/AddressProvince.interface";
import {AddressCountry} from "@/interfaces/AddressCountry.interface";

export interface ProductManufacture {
    id?: number;


    title: string;
    icon?: Icon | null;
}
