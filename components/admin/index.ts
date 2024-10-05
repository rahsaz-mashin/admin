import {addressCountryContext} from "@/components/admin/addressCountry";
import {addressProvinceContext} from "@/components/admin/addressProvince";
import {addressCityContext} from "@/components/admin/addressCity";
import {iconContext} from "@/components/admin/icon";
import {branchContext} from "@/components/admin/branch";
import {addProductContext} from "@/components/admin/addProduct";
import {storageSystemsContext} from "@/components/admin/storageSystems";
import {productCategoryContext} from "@/components/admin/productCategory";
import {productMachineModelContext} from "@/components/admin/productMachineModel";
import {productMachineBrandContext} from "@/components/admin/productMachineBrand";
import {warehouseContext} from "@/components/admin/warehouse";
import {productFeaturesCategoryContext} from "@/components/admin/productFeaturesCategory";
import {productFeaturesContext} from "@/components/admin/productFeatures";
import {currencyContext} from "@/components/admin/currency";
import {priceListContext} from "@/components/admin/priceList";

export const adminContextConfig: any = {
    general: {
        items: {
            address: {
                countries: addressCountryContext,
                provinces: addressProvinceContext,
                cities: addressCityContext,
            },
            others: {
                icons: iconContext,
            },
        },
        file_management: {
            storage: {
                systems: storageSystemsContext,
            },
        },
    },
    store: {
        products: {
            branch: {
                list: branchContext,
            },
            warehouse: {
                list: warehouseContext,
            },
            category: {
                machine_brand: productMachineBrandContext,
                machine_model: productMachineModelContext,
                subjective: productCategoryContext,
            },
            features: {
                category: productFeaturesCategoryContext,
                list: productFeaturesContext,
            },
            product: {
                add: addProductContext,
            },
            price: {
                currency: currencyContext,
                price_list: priceListContext,
            }
        },
    },
}