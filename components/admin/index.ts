import {addressCountryContext} from "@/components/admin/addressCountry";
import {addressProvinceContext} from "@/components/admin/addressProvince";
import {addressCityContext} from "@/components/admin/addressCity";
import {iconContext} from "@/components/admin/icon";
import {branchContext} from "@/components/admin/branch";
import {addProductContext} from "@/components/admin/addProduct";
import {storageSystemsContext} from "@/components/admin/storageSystems";

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
            product: {
                add: addProductContext,
            },
        },
    },
}