import {Account} from "@/interfaces/Account.interface";
import {ProductCategory} from "@/interfaces/ProductCategory.interface";
import {ProductMachineModel} from "@/interfaces/ProductMachineModel.interface";





export interface Product {
    id?: number;
    title: string;
    slug: string;
    names: string[];
    tags: string[];

    categories: ProductCategory[];
    machinery: ProductMachineModel[];


    createdBy?: Account;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date | null;
}
