import {Account} from "@/interfaces/Account.interface";
import {AddressCountry} from "@/interfaces/AddressCountry.interface";
import {AddressProvince} from "@/interfaces/AddressProvince.interface";
import {AddressCity} from "@/interfaces/AddressCity.interface";
import {FileStorage} from "@/interfaces/FileStorage.interface";
import {Product} from "@/interfaces/Product.interface";

export interface Story {
    id?: number;

    title: string;
    description: string | null;

    file: FileStorage | null;
    thumbnail: FileStorage | null;

    product: Product | null;

    expiredAt?: Date;

    createdBy?: Account;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date | null;
}
