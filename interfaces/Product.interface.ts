import {Account} from "@/interfaces/Account.interface";
import {ProductCategory} from "@/interfaces/ProductCategory.interface";
import {ProductMachineModel} from "@/interfaces/ProductMachineModel.interface";
import {ProductFeaturesCategory} from "@/interfaces/ProductFeaturesCategory.interface";
import {ProductFeatures} from "@/interfaces/ProductFeatures.interface";
import {PriceList} from "@/interfaces/PriceList.interface";
import {Warehouse} from "@/interfaces/Warehouse.interface";
import {FileStorage} from "@/interfaces/FileStorage.interface";
import {Currency} from "@/interfaces/Currency.interface";


export interface Product {
    id?: number;
    title: string;
    slug: string;
    names: string[];
    tags: string[];

    categories: ProductCategory[];
    machinery: ProductMachineModel[];

    intro: string | null;

    features?: {
        category: ProductFeaturesCategory | number | null;
        value: ProductFeatures | number | null;
    }[],

    technical?: {
        title: string;
        value: string;
    }[];

    price?: {
        priceList: PriceList | number | null;
        amount: number;
        info?: {
            primaryCurrency: Currency,
            secondaryCurrency: Currency,
            finalPrice: number,
            finalPriceWithVat: number
        };
    }[],


    isActiveInventoryManagement?: boolean;
    minimumInventoryWarn?: number;

    inventory: {
        warehouse?: Warehouse | number | null;
        inventory?: number;
    }[];

    pictures: FileStorage[];
    thumbnail: FileStorage | null;

    createdBy?: Account;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date | null;
}
