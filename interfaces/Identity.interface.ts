import {Account} from "@/interfaces/Account.interface";


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
    id: number;

    isVerified: boolean;

    account: Account | null;




    // model: IdentityModel;
    //
    //
    // // phones
    // @OneToMany(() => IdentityPhoneNumber, (doc) => doc.identity)
    // phones: IdentityPhoneNumber[];
    //
    // // emails
    // @OneToMany(() => IdentityEmailAddress, (doc) => doc.identity)
    // emails: IdentityEmailAddress[];
    //
    // // addresses
    // @OneToMany(() => IdentityAddress, (doc) => doc.identity)
    // addresses: IdentityAddress[];
    //
    //
    // // categories
    // @ManyToMany(() => IdentityCategory, doc => doc.identities)
    // @JoinTable()
    // categories: IdentityCategory[];
    //
    // // grade
    // @ManyToOne(() => IdentityGrade, (doc) => doc.identities, { nullable: true })
    // @JoinColumn()
    // grade: IdentityGrade | null;

    identityType: identityTypesEnum;

    // // introductionMethod
    // @ManyToOne(() => IntroductionMethod, (doc) => doc.identities, { nullable: true })
    // @JoinColumn()
    // introductionMethod: IntroductionMethod | null;
    //
    // // color
    // @Column({ type: 'varchar', length: 64, nullable: true })
    // color: string | null;
    //
    // // identityDocuments
    // @OneToMany(() => IdentityDocumentData, doc => doc.identity)
    // identityDocuments: IdentityDocumentData[];
    //
    // @Column({ type: 'varchar', length: 512, nullable: true })
    // description: string | null;


    // ===============================================================================> real identity name
    namePrefix: string | null;
    firstName: string | null;
    lastName: string | null;
    nameSuffix: string | null;
    birthday: Date | null;
    gender: gendersEnum;


    // ===============================================================================> legal identity name
    legalName: string | null;
    tradeMark: string | null;
    registrationNumber: string | null;

    // ===============================================================================> common
    nationalCode: string | null;
    website: string | null;
    economicCode: string | null;




    // // personnel
    // @OneToMany(() => IdentityCompaniesPersonnel, (doc) => doc.company, { nullable: true })
    // personnel: IdentityCompaniesPersonnel[] | null;
    //
    // // personnel
    // @OneToMany(() => IdentityCompaniesPersonnel, (doc) => doc.company, { nullable: true })
    // companies: IdentityCompaniesPersonnel[] | null;




    createdBy: Account;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
}
