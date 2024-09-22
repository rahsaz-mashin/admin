import {Account} from "@/interfaces/Account.interface";
import {AddressCountry} from "@/interfaces/AddressCountry.interface";
import {AddressProvince} from "@/interfaces/AddressProvince.interface";
import {AddressCity} from "@/interfaces/AddressCity.interface";

export interface Branch {
    id?: number;

    title: string;
    phone: string;
    description: string;

    // logo?: string;

    country?: AddressCountry | null;
    province?: AddressProvince | null;
    city?: AddressCity | null;
    address?: string | null;
    zipCode?: string | null;
    postBox?: string | null;
    location?: string | null;


    createdBy?: Account;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date | null;
}
