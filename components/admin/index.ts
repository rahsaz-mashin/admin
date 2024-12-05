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
import {identityCategoryContext} from "@/components/admin/identityCategory";
import {identityGradeContext} from "@/components/admin/identityGrade";
import {identityPhoneTypeContext} from "@/components/admin/identityPhoneNumberType";
import {identityEmailTypeContext} from "@/components/admin/identityEmailAddressType";
import {identityAddressTypeContext} from "@/components/admin/identityAddressType";
import {introductionMethodContext} from "@/components/admin/introductionMethod";
import {identityDocumentContext} from "@/components/admin/identityDocument";
import {addIdentityContext} from "@/components/admin/addIdentity";
import {identityListContext} from "@/components/admin/identityList";
import {addCartContext} from "@/components/admin/addCart";
import {addOrderContext} from "@/components/admin/addOrder";
import {deliveryMethodContext} from "@/components/admin/orderDeliveryMethod";
import {priceListAssignContext} from "@/components/admin/priceListAssign";

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
        fileManagement: {
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
        identity: {
            identity: {
                add: addIdentityContext,
                edit: addIdentityContext,
                list: identityListContext,
            },
            category: {
                category: identityCategoryContext,
                grade: identityGradeContext,
            },
            document: {
                document: identityDocumentContext,
            },
            others: {
                phone_type: identityPhoneTypeContext,
                email_type: identityEmailTypeContext,
                address_type: identityAddressTypeContext,
                introduction_method: introductionMethodContext,
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
                price_list_assign: priceListAssignContext,
            },
            settings: {
                product: productSettingsContext,
            }
        },
        cart: {
            cart: {
                add: addCartContext,
                edit: addCartContext,
                list: productListContext,
            },
        },
        orders: {
            order: {
                add: addOrderContext,
                edit: addOrderContext,
                list: productListContext,
            },
            items: {
                deliveryMethod: deliveryMethodContext,
            },
        },
    },
}