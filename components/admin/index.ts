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
import {productListContext} from "@/components/admin/productList";
import {countingUnitContext} from "@/components/admin/countingUnit";
import {productSettingsContext} from "@/components/admin/productSettings";
import {accountListContext} from "@/components/admin/accountList";
import {addAccountContext} from "@/components/admin/addAccount";
import {accountPermissionCategoryContext} from "@/components/admin/accountPermissionCategory";
import {accountPermissionContext} from "@/components/admin/accountPermission";
import {accountPermissionGroupContext} from "@/components/admin/accountPermissionGroup";

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
    gate: {
        account: {
            account: {
                add: addAccountContext,
                edit: addAccountContext,
                list: accountListContext,
            },
            permission: {
                category: accountPermissionCategoryContext,
                permission: accountPermissionContext,
                group: accountPermissionGroupContext,
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
                counting_unit: countingUnitContext
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
                edit: addProductContext,
                list: productListContext,
            },
            price: {
                currency: currencyContext,
                price_list: priceListContext,
            },
            settings: {
                product: productSettingsContext,
            }
        },
    },
}