import {AddressCountry} from "@/interfaces/AddressCountry.interface";
import {AddressProvince} from "@/interfaces/AddressProvince.interface";
import {AddressCity} from "@/interfaces/AddressCity.interface";

export type NeshanAddress = {
    address: string,
    countryId: AddressCountry,
    provinceId: AddressProvince,
    cityId: AddressCity,
}