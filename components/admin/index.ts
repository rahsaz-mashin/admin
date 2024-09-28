import {addressCountryContext} from "@/components/admin/addressCountry";
import {addressProvinceContext} from "@/components/admin/addressProvince";
import {addressCityContext} from "@/components/admin/addressCity";
import {iconContext} from "@/components/admin/icon";
import {branchContext} from "@/components/admin/branch";
import {addProductContext} from "@/components/admin/addProduct";
import {storageSystemsContext} from "@/components/admin/storageSystems";
import {productCategoryContext} from "@/components/admin/productCategory";
import {productMachineModelContext} from "@/components/admin/productMachineModel";
import {productManufactureContext} from "@/components/admin/productManufacture";
import {productMachineBrandContext} from "@/components/admin/productMachineBrand";

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
            category: {
                machine_brand: productMachineBrandContext,
                machine_model: productMachineModelContext,
                subjective: productCategoryContext,
                manufacture: productManufactureContext,
            },
            product: {
                add: addProductContext,
            },
        },
    },
}