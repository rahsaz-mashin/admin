import {Account} from "@/interfaces/Account.interface";
import {ProductCategory} from "@/interfaces/ProductCategory.interface";
import {ProductMachineModel} from "@/interfaces/ProductMachineModel.interface";
import {ProductFeaturesCategory} from "@/interfaces/ProductFeaturesCategory.interface";
import {ProductFeatures} from "@/interfaces/ProductFeatures.interface";
import {PriceList} from "@/interfaces/PriceList.interface";
import {Warehouse} from "@/interfaces/Warehouse.interface";
import {FileStorage} from "@/interfaces/FileStorage.interface";


export interface Product {
    id?: number;
    title: string;
    slug: string;
    names: string[];
    tags: string[];

    categories: ProductCategory[];
    machinery: ProductMachineModel[];

    intro: string | null;

    featuresCategory: ProductFeaturesCategory | null;
    features: ProductFeatures | null;

    technical: { key: string; value: string }[];

    priceList: PriceList | null;
    price: number;

    isActiveInventoryManagement?: boolean;
    warehouse?: Warehouse | null;
    inventory?: number;
    minimumInventoryWarn?: number;

    pictures: FileStorage[]


    createdBy?: Account;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date | null;
}
