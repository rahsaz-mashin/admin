import React, {ReactNode} from "react";
import {Logo as RahsazStoreLogo} from "@/stories/RahsazStore";
import {
    BoldDuotoneAddIcon,
    BoldDuotoneAddUserIcon,
    BoldDuotoneBranchIcon,
    BoldDuotoneCampaignIcon,
    BoldDuotoneCategoryBrandIcon,
    BoldDuotoneCategoryListIcon,
    BoldDuotoneComposeMessageIcon,
    BoldDuotoneCountingIcon,
    BoldDuotoneCurrencyIcon,
    BoldDuotoneDiscountIcon,
    BoldDuotoneEarthIcon,
    BoldDuotoneEmailAddressIcon,
    BoldDuotoneEmojiIcon,
    BoldDuotoneFeaturesIcon,
    BoldDuotoneIdentityDocumentIcon,
    BoldDuotoneIntroductionMethodIcon,
    BoldDuotoneListIcon,
    BoldDuotoneLockPasswordIcon,
    BoldDuotoneMapIcon,
    BoldDuotoneMessageBoxIcon,
    BoldDuotonePermissionCategoryIcon,
    BoldDuotonePermissionGroupIcon,
    BoldDuotonePermissionIcon,
    BoldDuotonePresaleIcon,
    BoldDuotonePriceIcon,
    BoldDuotoneSettingIcon,
    BoldDuotoneStatisticIcon,
    BoldDuotoneStreetMapIcon,
    BoldDuotoneSystemIcon,
    BoldDuotoneTemplateIcon,
    BoldDuotoneUsersIcon,
    BoldDuotoneVideoLibraryIcon,
    BoldDuotoneWarehouseIcon,
    BoldDuotoneWarehouseTransactionIcon,
    OutlineBoxIcon,
    OutlineCartIcon,
    OutlineCommunicationIcon,
    OutlineDashboardIcon,
    OutlinedUsersGroupIcon,
    OutlineLibraryIcon,
    OutlineOrderIcon,
    OutlineSettingIcon,
    OutlineStatisticIcon,
    OutlineWalletIcon
} from "@/stories/RahsazAdmin/Icons";


export type AdminMenu = {
    key: string;
    title: string;
    description?: string;
    icon?: ReactNode;
    isEnable?: boolean;
    hidden?: boolean;
    sub?: AdminMenu[];
}


const adminRoutes: AdminMenu[] = [
    {
        key: "general",
        title: "مدیریت کلی",
        icon: <RahsazStoreLogo size={36} noAnimation/>,
        isEnable: true,
        sub: [
            {
                key: "items",
                title: "آیتم ها",
                icon: <OutlineSettingIcon/>,
                isEnable: true,
                sub: [
                    {
                        key: "address",
                        title: "آدرس",
                        icon: null,
                        isEnable: true,
                        sub: [
                            {
                                key: "countries",
                                title: "کشورها",
                                icon: <BoldDuotoneEarthIcon size={64}/>,
                                description: "مشاهده لیست کشورها، ایجاد و مدیریت آن ها",
                                isEnable: true,
                            },
                            {
                                key: "provinces",
                                title: "استان ها",
                                icon: <BoldDuotoneMapIcon size={64}/>,
                                description: "مشاهده لیست استان ها، ایجاد و مدیریت آن ها",
                                isEnable: true,
                            },
                            {
                                key: "cities",
                                title: "شهر ها",
                                icon: <BoldDuotoneStreetMapIcon size={64}/>,
                                description: "مشاهده لیست شهرها، ایجاد و مدیریت آن ها",
                                isEnable: true,
                            },
                        ],
                    },
                    {
                        key: "others",
                        title: "سایر",
                        icon: null,
                        isEnable: true,
                        sub: [
                            {
                                key: "icons",
                                title: "آیکون ها",
                                icon: <BoldDuotoneEmojiIcon size={64}/>,
                                description: "مشاهده لیست آیکون ها، ایجاد و مدیریت آن ها",
                                isEnable: true,
                            },
                        ],
                    },
                ],
            },
            {
                key: "file_management",
                title: "مدیریت فایل",
                icon: <OutlineLibraryIcon/>,
                isEnable: true,
                sub: [
                    {
                        key: "storage",
                        title: "ذخیره سازی",
                        icon: null,
                        isEnable: true,
                        sub: [
                            {
                                key: "systems",
                                title: "سیستم ها",
                                icon: <BoldDuotoneSystemIcon size={64}/>,
                                description: "مشاهده لیست سیستم های ذخیره سازی فایل، ایجاد و مدیریت آن ها",
                                isEnable: true,
                            },
                        ],
                    },
                ],
            },
            {
                key: "communication",
                title: "ارتباطات",
                icon: <OutlineCommunicationIcon/>,
                isEnable: true,
                sub: [
                    {
                        key: "email",
                        title: "ایمیل",
                        icon: null,
                        isEnable: true,
                        sub: [
                            {
                                key: "systems",
                                title: "سیستم ها",
                                icon: <BoldDuotoneSystemIcon size={64}/>,
                                description: "مشاهده لیست سیستم های ایمیل، ایجاد و مدیریت آن ها",
                                isEnable: true,
                            },
                            {
                                key: "templates",
                                title: "قالب ها",
                                icon: <BoldDuotoneTemplateIcon size={64}/>,
                                description: "مشاهده لیست قالب های ایمیل، ایجاد و مدیریت آن ها",
                                isEnable: true,
                            },
                            {
                                key: "addresses",
                                title: "آدرس ها",
                                icon: <BoldDuotoneEmailAddressIcon size={64}/>,
                                description: "مشاهده لیست آدرس های ایمیل، ایجاد و مدیریت آن ها",
                                isEnable: true,
                            },
                            {
                                key: "compose",
                                title: "ارسال جدید",
                                icon: <BoldDuotoneComposeMessageIcon size={64}/>,
                                description: "ارسال ایمیل جدید",
                                isEnable: true,
                            },
                            {
                                key: "box",
                                title: "جعبه ارسال و دریافت",
                                icon: <BoldDuotoneMessageBoxIcon size={64}/>,
                                description: "مشاهده لیست ایمیل های دریافتی و ارسالی",
                                isEnable: true,
                            },
                        ],
                    },
                    {
                        key: "sms",
                        title: "پیامک",
                        icon: null,
                        isEnable: true,
                        sub: [
                            {
                                key: "systems",
                                title: "سیستم ها",
                                icon: <BoldDuotoneSystemIcon size={64}/>,
                                description: "مشاهده لیست سیستم های ایمیل، ایجاد و مدیریت آن ها",
                                isEnable: true,
                            },
                            {
                                key: "templates",
                                title: "قالب ها",
                                icon: <BoldDuotoneTemplateIcon size={64}/>,
                                description: "مشاهده لیست قالب های پیامک، ایجاد و مدیریت آن ها",
                                isEnable: true,
                            },
                            {
                                key: "compose",
                                title: "ارسال جدید",
                                icon: <BoldDuotoneComposeMessageIcon size={64}/>,
                                description: "ارسال پیامک جدید",
                                isEnable: true,
                            },
                            {
                                key: "message",
                                title: "جعبه ارسال و دریافت",
                                icon: <BoldDuotoneMessageBoxIcon size={64}/>,
                                description: "مشاهده لیست پیامک های دریافتی و ارسالی",
                                isEnable: true,
                            },
                        ],
                    },
                    {
                        key: "social",
                        title: "شبکه های اجتماعی",
                        icon: null,
                        isEnable: true,
                        sub: [
                            {
                                key: "systems",
                                title: "سیستم های شبکه های اجتماعی",
                                icon: <BoldDuotoneSystemIcon size={64}/>,
                                description: "مشاهده لیست سیستم های شبکه های اجتماعی، ایجاد و مدیریت آن ها",
                                isEnable: true,
                            },
                        ],
                    },
                ],
            },
            {
                key: "tools",
                title: "ابزارهای متفرقه",
                icon: <OutlineSettingIcon/>,
                isEnable: true,
                sub: [
                    {
                        key: "tools",
                        title: "ابزارها",
                        icon: null,
                        isEnable: true,
                        sub: [
                            {
                                key: "passwordList",
                                title: "لیست پسوردها",
                                icon: <BoldDuotoneLockPasswordIcon size={64}/>,
                                description: "مشاهده لیست پسوردها، ایجاد و مدیریت آن ها",
                                isEnable: true,
                            },
                            {
                                key: "trainings",
                                title: "آموزش های درون سازمانی",
                                icon: <BoldDuotoneVideoLibraryIcon size={64}/>,
                                description: "مشاهده لیست آموزش های درون سازمانی، ایجاد و مدیریت آن ها",
                                isEnable: true,
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        key: "gate",
        title: "راهساز گیت",
        icon: <RahsazStoreLogo size={36} noAnimation/>,
        isEnable: true,
        sub: [
            {
                key: "account",
                title: "کاربری",
                icon: <OutlinedUsersGroupIcon/>,
                isEnable: true,
                sub: [
                    {
                        key: "account",
                        title: "مدیریت حساب های کاربری",
                        icon: null,
                        isEnable: true,
                        sub: [
                            {
                                key: "add",
                                title: "کاربری جدید",
                                icon: <BoldDuotoneAddUserIcon size={64}/>,
                                description: "ثبت کاربری جدید",
                                isEnable: true,
                            },
                            {
                                key: "list",
                                title: "لیست حساب های کاربری",
                                icon: <BoldDuotoneUsersIcon size={64}/>,
                                description: "مشاهده لیست کاربران و مدیریت آن ها",
                                isEnable: true,
                            },
                            {
                                key: "edit",
                                title: "ویرایش کاربری",
                                icon: <BoldDuotoneUsersIcon size={64}/>,
                                description: "ویرایش کاربری",
                                hidden: true,
                                isEnable: false,
                            },
                        ],
                    },
                    {
                        key: "permission",
                        title: "مدیریت مجوز های دسترسی",
                        icon: null,
                        isEnable: true,
                        sub: [
                            {
                                key: "category",
                                title: "دسته بندی مجوزها",
                                icon: <BoldDuotonePermissionCategoryIcon size={64}/>,
                                description: "مشاهده لیست دسته بندی مجوزها، ایجاد و مدیریت آن ها",
                                isEnable: true,
                            },
                            {
                                key: "permission",
                                title: "مجوزها",
                                icon: <BoldDuotonePermissionIcon size={64}/>,
                                description: "مشاهده لیست مجوزها، ایجاد و مدیریت آن ها",
                                isEnable: true,
                            },
                            {
                                key: "group",
                                title: "گروه بندی مجوزها",
                                icon: <BoldDuotonePermissionGroupIcon size={64}/>,
                                description: "مشاهده لیست گروه بندی مجوزها، ایجاد و مدیریت آن ها",
                                isEnable: true,
                            },
                        ],
                    },
                ],
            },
            {
                key: "identity",
                title: "هویت",
                icon: <OutlinedUsersGroupIcon/>,
                isEnable: true,
                sub: [
                    {
                        key: "identity",
                        title: "مدیریت هویت ها",
                        icon: null,
                        isEnable: true,
                        sub: [
                            {
                                key: "add",
                                title: "هویت جدید",
                                icon: <BoldDuotoneAddUserIcon size={64}/>,
                                description: "ثبت هویت جدید",
                                isEnable: true,
                            },
                            {
                                key: "list",
                                title: "لیست هویت ها",
                                icon: <BoldDuotoneUsersIcon size={64}/>,
                                description: "مشاهده لیست هویت ها و مدیریت آن ها",
                                isEnable: true,
                            },
                        ],
                    },
                    {
                        key: "category",
                        title: "مدیریت دسته بندی و سطح بندی",
                        icon: null,
                        isEnable: true,
                        sub: [
                            {
                                key: "category",
                                title: "دسته بندی",
                                icon: <BoldDuotoneCategoryListIcon size={64}/>,
                                description: "مشاهده لیست دسته بندی هویت ها، ایجاد و مدیریت آن ها",
                                isEnable: true,
                            },
                            {
                                key: "grade",
                                title: "سطح بندی",
                                icon: <BoldDuotoneFeaturesIcon size={64}/>,
                                description: "مشاهده لیست سطح بندی هویت ها، ایجاد و مدیریت آن ها",
                                isEnable: true,
                            },
                        ],
                    },
                    {
                        key: "document",
                        title: "مدیریت مدارک هویتی",
                        icon: null,
                        isEnable: true,
                        sub: [
                            {
                                key: "document",
                                title: "مدارک هویتی",
                                icon: <BoldDuotoneIdentityDocumentIcon size={64}/>,
                                description: "مشاهده لیست مدارک هویتی، ایجاد و مدیریت آن ها",
                                isEnable: true,
                            },
                        ],
                    },
                    {
                        key: "others",
                        title: "سایر موارد",
                        icon: null,
                        isEnable: true,
                        sub: [
                            {
                                key: "phone_type",
                                title: "نوع های شماره",
                                icon: <BoldDuotoneListIcon size={64}/>,
                                description: "مشاهده لیست نوع های شماره، ایجاد و مدیریت آن ها",
                                isEnable: true,
                            },
                            {
                                key: "email_type",
                                title: "نوع های ایمیل",
                                icon: <BoldDuotoneListIcon size={64}/>,
                                description: "مشاهده لیست نوع های ایمیل، ایجاد و مدیریت آن ها",
                                isEnable: true,
                            },
                            {
                                key: "address_type",
                                title: "نوع های آدرس",
                                icon: <BoldDuotoneListIcon size={64}/>,
                                description: "مشاهده لیست نوع های آدرس، ایجاد و مدیریت آن ها",
                                isEnable: true,
                            },
                            {
                                key: "introduction_method",
                                title: "روش های آشنایی",
                                icon: <BoldDuotoneIntroductionMethodIcon size={64}/>,
                                description: "مشاهده لیست روش های آشنایی، ایجاد و مدیریت آن ها",
                                isEnable: true,
                            },

                        ],
                    },
                ],

            },
            {
                key: "setting",
                title: "تنظیمات",
                icon: <OutlineSettingIcon/>,
                isEnable: true,
                sub: [
                    {
                        key: "requiredFields",
                        title: "تنظیمات مربوط به فیلدهای ضروری",
                        icon: null,
                        isEnable: true,
                        sub: [
                            {
                                key: "realIdentity",
                                title: "کاربران حقیقی",
                                icon: <BoldDuotoneTemplateIcon size={64}/>,
                                description: "تنظیم فیلدهای ضروری کاربران حقیقی",
                                isEnable: true,
                            },
                            {
                                key: "legalIdentity",
                                title: "کاربران حقوقی",
                                icon: <BoldDuotoneTemplateIcon size={64}/>,
                                description: "تنظیم فیلدهای ضروری کاربران حقوقی",
                                isEnable: true,
                            },
                        ],
                    },
                    {
                        key: "requiredDocuments",
                        title: "تنظیمات مربوط به مدارک ضروری",
                        icon: null,
                        isEnable: true,
                        sub: [
                            {
                                key: "realIdentity",
                                title: "کاربران حقیقی",
                                icon: <BoldDuotoneTemplateIcon size={64}/>,
                                description: "تنظیم مدارک ضروری کاربران حقیقی",
                                isEnable: true,
                            },
                            {
                                key: "legalIdentity",
                                title: "کاربران حقوقی",
                                icon: <BoldDuotoneTemplateIcon size={64}/>,
                                description: "تنظیم مدارک ضروری کاربران حقوقی",
                                isEnable: true,
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        key: "store",
        title: "راهساز استور",
        icon: <RahsazStoreLogo size={36} noAnimation/>,
        isEnable: true,
        sub: [
            {
                key: "dashboard",
                title: "داشبورد",
                icon: <OutlineDashboardIcon/>,
                isEnable: false,
            },
            {
                key: "customers",
                title: "مشتریان",
                icon: <OutlinedUsersGroupIcon/>,
                isEnable: false,
            },
            {
                key: "products",
                title: "انبار و کالا",
                icon: <OutlineBoxIcon/>,
                isEnable: true,
                sub: [
                    {
                        key: "product",
                        title: "مدیریت کالا",
                        icon: null,
                        isEnable: true,
                        sub: [
                            {
                                key: "add",
                                title: "ثبت کالای جدید",
                                icon: <BoldDuotoneAddIcon size={64}/>,
                                description: "ثبت کالای جدید",
                                isEnable: true,
                            },
                            {
                                key: "list",
                                title: "لیست کالاها",
                                icon: <BoldDuotoneListIcon size={64}/>,
                                description: "مشاهده لیست کالاها و مدیریت آن ها",
                                isEnable: true,
                            },
                            {
                                key: "edit",
                                title: "ویرایش کالا",
                                icon: <BoldDuotoneListIcon size={64}/>,
                                description: "ویرایش کالا",
                                hidden: true,
                                isEnable: false,
                            },
                        ],
                    },
                    {
                        key: "branch",
                        title: "مدیریت شعبه",
                        icon: null,
                        isEnable: true,
                        sub: [
                            {
                                key: "list",
                                title: "شعبه ها",
                                icon: <BoldDuotoneBranchIcon size={64}/>,
                                description: "مشاهده لیست شعبه ها، ایجاد و مدیریت آن ها",
                                isEnable: true,
                            },
                        ],
                    },
                    {
                        key: "warehouse",
                        title: "مدیریت انبار",
                        icon: null,
                        isEnable: true,
                        sub: [
                            {
                                key: "list",
                                title: "انبارها",
                                icon: <BoldDuotoneWarehouseIcon size={64}/>,
                                description: "مشاهده لیست انبارها، ایجاد و مدیریت آن ها",
                                isEnable: true,
                            },
                            {
                                key: "counting_unit",
                                title: "واحدهای شمارش",
                                icon: <BoldDuotoneCountingIcon size={64}/>,
                                description: "مشاهده لیست واحدهای شمارش، ایجاد و مدیریت آن ها",
                                isEnable: true,
                            },
                            {
                                key: "transaction",
                                title: "تراکنش های انبار",
                                icon: <BoldDuotoneWarehouseTransactionIcon size={64}/>,
                                description: "مشاهده تراکنش های انبارها و مدیریت آن ها",
                                isEnable: false,
                            },
                        ],
                    },
                    {
                        key: "category",
                        title: "مدیریت دسته بندی",
                        isEnable: true,
                        sub: [
                            {
                                key: "machine_brand",
                                title: "برند ماشین",
                                icon: <BoldDuotoneCategoryBrandIcon size={64}/>,
                                description: "مشاهده لیست برندهای ماشین ها، ایجاد و مدیریت آن ها",
                                isEnable: true,
                            },
                            {
                                key: "machine_model",
                                title: "مدل ماشین",
                                icon: <BoldDuotoneCategoryBrandIcon size={64}/>,
                                description: "مشاهده لیست مدل های ماشین ها، ایجاد و مدیریت آن ها",
                                isEnable: true,
                            },
                            {
                                key: "subjective",
                                title: "دسته بندی موضوعی",
                                icon: <BoldDuotoneCategoryListIcon size={64}/>,
                                description: "مشاهده لیست دسته بندی موضوعی، ایجاد و مدیریت آن ها",
                                isEnable: true,
                            },
                        ],
                    },
                    {
                        key: "features",
                        title: "مدیریت ویژگی ها",
                        isEnable: true,
                        sub: [
                            {
                                key: "category",
                                title: "دسته بندی ویژگی ها",
                                icon: <BoldDuotoneCategoryListIcon size={64}/>,
                                description: "مشاهده لیست دسته بندی های ویژگی ها، ایجاد و مدیریت آن ها",
                                isEnable: true,
                            },
                            {
                                key: "list",
                                title: "ویژگی ها",
                                icon: <BoldDuotoneFeaturesIcon size={64}/>,
                                description: "مشاهده لیست ویژگی ها، ایجاد و مدیریت آن ها",
                                isEnable: true,
                            },
                        ],
                    },
                    {
                        key: "price",
                        title: "مدیریت ارزها و دسته های قیمتی",
                        icon: null,
                        isEnable: true,
                        sub: [
                            {
                                key: "currency",
                                title: "ارزها",
                                icon: <BoldDuotoneCurrencyIcon size={64}/>,
                                description: "مشاهده لیست ارزها، ایجاد و مدیریت آن ها",
                                isEnable: true,
                            },
                            {
                                key: "price_list",
                                title: "دسته های قیمتی",
                                icon: <BoldDuotonePriceIcon size={64}/>,
                                description: "مشاهده لیست دسته های قیمتی، ایجاد و مدیریت آن ها",
                                isEnable: true,
                            },
                        ],
                    },
                    {
                        key: "settings",
                        title: "تنظیمات",
                        icon: null,
                        isEnable: true,
                        sub: [
                            {
                                key: "product",
                                title: "تنظیمات کالا",
                                icon: <BoldDuotoneSettingIcon size={64}/>,
                                description: "تنظیمات مربوط به کالا",
                                isEnable: true,
                            },
                        ],
                    },
                    {
                        key: "campaign",
                        title: "مدیریت کمپین ها",
                        icon: null,
                        isEnable: false,
                        sub: [
                            {
                                key: "presale",
                                title: "پیش فروش ها",
                                icon: <BoldDuotonePresaleIcon size={64}/>,
                                description: "مشاهده لیست پیش فروش ها، ایجاد و مدیریت آن ها",
                                isEnable: true,
                            },
                            {
                                key: "sale",
                                title: "کمپین های فروش",
                                icon: <BoldDuotoneCampaignIcon size={64}/>,
                                description: "مشاهده لیست کمپین های فروش، ایجاد و مدیریت آن ها",
                                isEnable: true,
                            },
                        ],
                    },
                    {
                        key: "discount",
                        title: "مدیریت تخفیف ها",
                        icon: null,
                        isEnable: false,
                        sub: [
                            {
                                key: "public",
                                title: "تخفیف های عمومی",
                                icon: <BoldDuotoneDiscountIcon size={64}/>,
                                description: "مشاهده لیست تخفیف های عمومی، ایجاد و مدیریت آن ها",
                                isEnable: true,
                            },
                            {
                                key: "private",
                                title: "تخفیف های فردی",
                                icon: <BoldDuotoneDiscountIcon size={64}/>,
                                description: "مشاهده لیست تخفیف های گروهی و فردی، ایجاد و مدیریت آن ها",
                                isEnable: true,
                            },
                        ],
                    },
                    {
                        key: "statistics",
                        title: "آمار و گزارشات",
                        icon: null,
                        isEnable: false,
                        sub: [
                            {
                                key: "add",
                                title: "کالاهای پر خرید",
                                icon: <BoldDuotoneStatisticIcon size={64}/>,
                                description: "گزارش کالاهای پر خرید",
                                isEnable: true,
                            },
                            {
                                key: "add",
                                title: "کالاهای پر خرید",
                                icon: <BoldDuotoneStatisticIcon size={64}/>,
                                description: "گزارش کالاهای پر خرید",
                                isEnable: true,
                            },
                            {
                                key: "list",
                                title: "کمپین های فروش",
                                icon: <BoldDuotoneStatisticIcon size={64}/>,
                                description: "مشاهده لیست برندهای ماشین ها، ایجاد و مدیریت آن ها",
                                isEnable: true,
                            },
                        ],
                    },

                ],
            },
            {
                key: "cart",
                title: "سبد خرید",
                icon: <OutlineCartIcon/>,
                isEnable: false,
            },
            {
                key: "orders",
                title: "سفارشات",
                icon: <OutlineOrderIcon/>,
                isEnable: true,
                sub: [
                    {
                        key: "order",
                        title: "مدیریت سفارشات",
                        icon: null,
                        isEnable: true,
                        sub: [
                            {
                                key: "add",
                                title: "ثبت سفارش جدید",
                                icon: <BoldDuotoneAddIcon size={64}/>,
                                description: "ثبت سفارش جدید",
                                isEnable: true,
                            },
                            {
                                key: "list",
                                title: "لیست سفارشات",
                                icon: <BoldDuotoneListIcon size={64}/>,
                                description: "مشاهده لیست سفارشات و مدیریت آن ها",
                                isEnable: true,
                            },
                            {
                                key: "edit",
                                title: "ویرایش سفارش",
                                icon: <BoldDuotoneListIcon size={64}/>,
                                description: "ویرایش سفارش",
                                hidden: true,
                                isEnable: false,
                            },
                        ],
                    },
                ],
            },
            {
                key: "wallet",
                title: "کیف پول",
                icon: <OutlineWalletIcon/>,
                isEnable: false,
            },
            {
                key: "settings",
                title: "تنظیمات",
                icon: <OutlineSettingIcon/>,
                isEnable: false,
            },
            {
                key: "statistics",
                title: "آمار",
                icon: <OutlineStatisticIcon/>,
                isEnable: false,
            },
        ]
    },
    {
        key: "info",
        title: "راهساز اینفو",
        icon: <RahsazStoreLogo size={36} noAnimation/>,
        isEnable: false,
    },
    {
        key: "online",
        title: "راهساز آنلاین",
        icon: <RahsazStoreLogo size={36} noAnimation/>,
        isEnable: false,
    },
    {
        key: "mag",
        title: "راهساز مگ",
        icon: <RahsazStoreLogo size={36} noAnimation/>,
        isEnable: false,
    },
    {
        key: "support",
        title: "راهساز ساپورت",
        icon: <RahsazStoreLogo size={36} noAnimation/>,
        isEnable: false,
    },
    {
        key: "pro",
        title: "راهساز پرو",
        icon: <RahsazStoreLogo size={36} noAnimation/>,
        isEnable: false,
    },
]


export const getWorkspaceList = () => {
    return adminRoutes.map((w) => {
        return {
            ...w,
            isEnable: w.isEnable,
            sub: w.sub?.map((s) => {
                return {
                    ...s,
                    isEnable: w.isEnable && s.isEnable,
                    sub: s.sub?.map((c) => {
                        return {
                            ...c,
                            isEnable: w.isEnable && s.isEnable && c.isEnable,
                            sub: c.sub?.map((m) => {
                                return {
                                    ...m,
                                    isEnable: w.isEnable && s.isEnable && c.isEnable && m.isEnable,
                                }
                            })
                        }
                    })
                }
            })
        }
    })
}

export const getWorkspaceByKey = (workspace: string) => {
    return getWorkspaceList().find(({key}) => (key === workspace))
}

export const getSectionListByKey = (workspace: string) => {
    return getWorkspaceByKey(workspace)?.sub
}

export const getSectionByKey = (workspace: string, section: string) => {
    return getWorkspaceByKey(workspace)?.sub?.find(({key}) => (key === section))
}

export const getCategoryList = (workspace: string, section: string) => {
    return getSectionByKey(workspace, section)?.sub
}

export const getCategoryByKey = (workspace: string, section: string, category: string) => {
    return getSectionByKey(workspace, section)?.sub?.find(({key}) => (key === category))
}

export const getMenuByKey = (workspace: string, section: string, category: string, menu: string) => {
    return getCategoryByKey(workspace, section, category)?.sub?.find(({key}) => (key === menu))
}





