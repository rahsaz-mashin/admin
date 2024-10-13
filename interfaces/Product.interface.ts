import {Account} from "@/interfaces/Account.interface";
import {ProductCategory} from "@/interfaces/ProductCategory.interface";
import {ProductMachineModel} from "@/interfaces/ProductMachineModel.interface";
import {ProductFeaturesCategory} from "@/interfaces/ProductFeaturesCategory.interface";
import {ProductFeatures} from "@/interfaces/ProductFeatures.interface";
import {PriceList} from "@/interfaces/PriceList.interface";
import {Warehouse} from "@/interfaces/Warehouse.interface";
import {FileStorage} from "@/interfaces/FileStorage.interface";
import {Currency} from "@/interfaces/Currency.interface";


export interface ProductFeaturesList {
    id?: number | null;
    category: ProductFeaturesCategory | number | null;
    value: ProductFeatures | number | null;
}

export interface ProductTechnical {
    title: string;
    value: string;
}

export interface ProductPrice {
    priceList: PriceList | number | null;
    amount: number;
    info?: {
        primaryCurrency: Currency,
        secondaryCurrency: Currency,
        finalPrice: number,
        finalPriceWithVat: number
    };
}

export interface ProductInventory {
    warehouse?: Warehouse | number | null;
    inventory?: number;
}


export interface Product {
    id?: number;
    title: string;
    slug: string;
    names: string[];
    tags: string[];

    categories: ProductCategory[];
    machinery: ProductMachineModel[];

    intro: string | null;

    features?: ProductFeaturesList[],
    technical?: ProductTechnical[];
    price?: ProductPrice[],


    isActiveInventoryManagement?: boolean;
    minimumInventoryWarn?: number;

    inventory?: ProductInventory[];

    pictures: FileStorage[];
    thumbnail?: FileStorage | null;

    createdBy?: Account;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date | null;
}
