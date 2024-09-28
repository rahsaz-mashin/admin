import {Icon} from "@/interfaces/Icon.interface";
import {AddressProvince} from "@/interfaces/AddressProvince.interface";
import {AddressCountry} from "@/interfaces/AddressCountry.interface";
import {ProductMachineBrand} from "@/interfaces/ProductMachineBrand.interface";
import {Account} from "@/interfaces/Account.interface";

export interface ProductCategory {
    id?: number;
    title: string;
    slug: string;
    description?: string | null;
    tags: string[];
    icon?: Icon | null;
    parent: ProductCategory | null;

    createdBy?: Account;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date | null;
}
