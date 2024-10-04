import {Icon} from "@/interfaces/Icon.interface";
import {Account} from "@/interfaces/Account.interface";
import {ProductFeaturesCategory} from "@/interfaces/ProductFeaturesCategory.interface";

export interface ProductFeatures {
    id?: number;
    title: string;
    slug: string;
    description?: string | null;
    tags: string[];
    icon?: Icon | null;
    category: ProductFeaturesCategory | null;

    createdBy?: Account;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date | null;
}
