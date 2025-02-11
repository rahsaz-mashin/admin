import {Icon} from "@/interfaces/Icon.interface";
import {Account} from "@/interfaces/Account.interface";
import {ProductMachineBrand} from "@/interfaces/ProductMachineBrand.interface";


export interface ProductMachineModel {
    id?: number;
    title: string;
    slug: string;
    description?: string | null;
    tags: string[];
    icon?: Icon | null;
    brand: ProductMachineBrand | null;

    createdBy?: Account;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date | null;
}
