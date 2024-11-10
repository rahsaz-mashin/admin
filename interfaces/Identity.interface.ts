import {Account} from "@/interfaces/Account.interface";
import {IdentityPhoneNumber} from "@/interfaces/IdentityPhoneNumber.interface";
import {IdentityEmailAddress} from "@/interfaces/IdentityEmailAddress.interface";
import {IdentityAddress} from "@/interfaces/IdentityAddess.interface";
import {IdentityCategory} from "@/interfaces/IdentityCategory.interface";
import {IdentityGrade} from "@/interfaces/IdentityGrade.interface";
import {IntroductionMethod} from "@/interfaces/IntroductionMethod.interface";
import {IdentityDocumentData} from "@/interfaces/IdentityDocumentData.interface";


export enum gendersEnum {
    unspecific = 'unspecific',
    male = 'male',
    female = 'female',
    others = 'others',
}

export enum identityTypesEnum {
    real = "real",
    legal = "legal",
}


export interface Identity {
    id?: number;

    isVerified: boolean;

    account?: Account | null;

    phones: IdentityPhoneNumber[];
    emails: IdentityEmailAddress[];
    addresses: IdentityAddress[];

    categories: IdentityCategory[];
    grade: IdentityGrade | null;

    identityType?: identityTypesEnum;

    introductionMethod: IntroductionMethod | null;

    color: string | null;


    // identityDocuments: IdentityDocumentData[];

    description: string | null;


    // ===============================================================================> real identity name
    firstName?: string | null;
    lastName?: string | null;
    birthday?: Date | null;
    gender?: gendersEnum | null;


    // ===============================================================================> legal identity name
    legalName?: string | null;
    tradeMark?: string | null;
    registrationNumber?: string | null;

    // ===============================================================================> common
    nationalCode?: string | null;
    website?: string | null;
    economicCode?: string | null;




    // // personnel
    // @OneToMany(() => IdentityCompaniesPersonnel, (doc) => doc.company, { nullable: true })
    // personnel: IdentityCompaniesPersonnel[] | null;
    //
    // // personnel
    // @OneToMany(() => IdentityCompaniesPersonnel, (doc) => doc.company, { nullable: true })
    // companies: IdentityCompaniesPersonnel[] | null;




    createdBy?: Account;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date | null;
}
