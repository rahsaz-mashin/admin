import {Identity} from "@/interfaces/Identity.interface";
import {Account} from "@/interfaces/Account.interface";
import {AddressCountry} from "@/interfaces/AddressCountry.interface";
import {AddressProvince} from "@/interfaces/AddressProvince.interface";
import {AddressCity} from "@/interfaces/AddressCity.interface";
import {IdentityAddressType} from "@/interfaces/IdentityAddressType.interface";

export interface IdentityAddress {
    id?: number;

    title: string | null;

    country: AddressCountry | null;
    province: AddressProvince | null;
    city: AddressCity | null;

    address: string | null;
    zipCode: string | null;
    postBox: string | null;
    location: string | null;
    description: string | null;

    identity?: Identity;
    isDefault: boolean;
    type: IdentityAddressType | null;

    createdBy?: Account;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date | null;
}
