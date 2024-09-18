import React, {ReactNode} from "react";
import {Logo as RahsazStoreLogo} from "@/stories/RahsazStore";
import {
    BoldDuotoneAddIcon,
    BoldDuotoneBranchIcon, BoldDuotoneCampaignIcon,
    BoldDuotoneCategoryBrandIcon,
    BoldDuotoneCategoryListIcon,
    BoldDuotoneCategoryManufactureIcon,
    BoldDuotoneCurrencyIcon, BoldDuotoneDiscountIcon, BoldDuotoneEarthIcon, BoldDuotoneEmojiIcon,
    BoldDuotoneListIcon, BoldDuotoneMapIcon, BoldDuotonePresaleIcon,
    BoldDuotonePriceIcon, BoldDuotoneSettingIcon, BoldDuotoneStatisticIcon, BoldDuotoneStreetMapIcon,
    BoldDuotoneWarehouseIcon,
    BoldDuotoneWarehouseTransactionIcon,
    OutlineBoxIcon,
    OutlineCartIcon,
    OutlineDashboardIcon,
    OutlinedUsersGroupIcon,
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
    sub?: AdminMenu[];
}


const adminRoutes: AdminMenu[] = [
    {
        key: "general",
        title: "تنظیمات عمومی",
        icon: <RahsazStoreLogo size={36} noAnimation/>,
        isEnable: true,
        sub: [
            {
                key: "settings",
                title: "تنظیمات",
                icon: <OutlineSettingIcon/>,
                isEnable: true,
                sub: [
                    {
                        key: "address",
                        title: "تنظیمات آدرس",
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
                        key: "assets",
                        title: "اَسِت ها",
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
                    {
                        key: "email",
                        title: "تنظیمات ایمیل",
                        icon: null,
                        isEnable: true,
                        sub: [
                            {
                                key: "systems",
                                title: "سیستم های ایمیل",
                                icon: <BoldDuotoneEarthIcon size={64}/>,
                                description: "مشاهده لیست سیستم های ایمیل، ایجاد و مدیریت آن ها",
                                isEnable: true,
                            },
                            {
                                key: "templates",
                                title: "قالب ها",
                                icon: <BoldDuotoneStreetMapIcon size={64}/>,
                                description: "مشاهده لیست قالب های ایمیل، ایجاد و مدیریت آن ها",
                                isEnable: true,
                            },
                            {
                                key: "addresses",
                                title: "آدرس های ایمیل",
                                icon: <BoldDuotoneMapIcon size={64}/>,
                                description: "مشاهده لیست آدرس های ایمیل، ایجاد و مدیریت آن ها",
                                isEnable: true,
                            },
                            {
                                key: "compose",
                                title: "ارسال ایمیل",
                                icon: <BoldDuotoneStreetMapIcon size={64}/>,
                                description: "ارسال ایمیل",
                                isEnable: true,
                            },
                            {
                                key: "mails",
                                title: "ایمیل ها",
                                icon: <BoldDuotoneStreetMapIcon size={64}/>,
                                description: "مشاهده لیست ایمیل های دریافتی و ارسالی",
                                isEnable: true,
                            },
                        ],
                    },
                    {
                        key: "sms",
                        title: "تنظیمات پیامک",
                        icon: null,
                        isEnable: true,
                        sub: [
                            {
                                key: "systems",
                                title: "سیستم های پیامک",
                                icon: <BoldDuotoneEarthIcon size={64}/>,
                                description: "مشاهده لیست سیستم های ایمیل، ایجاد و مدیریت آن ها",
                                isEnable: true,
                            },
                            {
                                key: "templates",
                                title: "قالب ها",
                                icon: <BoldDuotoneStreetMapIcon size={64}/>,
                                description: "مشاهده لیست قالب های پیامک، ایجاد و مدیریت آن ها",
                                isEnable: true,
                            },
                            {
                                key: "compose",
                                title: "ارسال پیامک",
                                icon: <BoldDuotoneStreetMapIcon size={64}/>,
                                description: "ارسال پیامک",
                                isEnable: true,
                            },
                            {
                                key: "message",
                                title: "ایمیل ها",
                                icon: <BoldDuotoneStreetMapIcon size={64}/>,
                                description: "مشاهده لیست پیامک های دریافتی و ارسالی",
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
        isEnable: false,
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
                                key: "transaction",
                                title: "تراکنش های انبار",
                                icon: <BoldDuotoneWarehouseTransactionIcon size={64}/>,
                                description: "مشاهده تراکنش های انبارها و مدیریت آن ها",
                                isEnable: true,
                            },
                        ],
                    },
                    {
                        key: "category",
                        title: "مدیریت دسته بندی",
                        isEnable: true,
                        sub: [
                            {
                                key: "subjective",
                                title: "دسته بندی موضوعی",
                                icon: <BoldDuotoneCategoryListIcon size={64}/>,
                                description: "مشاهده لیست دسته بندی موضوعی، ایجاد و مدیریت آن ها",
                                isEnable: true,
                            },
                            {
                                key: "model",
                                title: "مدل های ماشین",
                                icon: <BoldDuotoneCategoryBrandIcon size={64}/>,
                                description: "مشاهده لیست برندها و مدل های ماشین ها، ایجاد و مدیریت آن ها",
                                isEnable: true,
                            },
                            {
                                key: "manufacture",
                                title: "برندهای سازنده",
                                icon: <BoldDuotoneCategoryManufactureIcon size={64}/>,
                                description: "مشاهده لیست برندهای سازنده کالاها، ایجاد و مدیریت آن ها",
                                isEnable: true,
                            },
                        ],
                    },
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
                                description: "مشاده لیست کالاها و مدیریت آن ها",
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
                        key: "campaign",
                        title: "مدیریت کمپین ها",
                        icon: null,
                        isEnable: true,
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
                        isEnable: true,
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
                        isEnable: true,
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
                    {
                        key: "setting",
                        title: "تنظیمات",
                        icon: null,
                        isEnable: true,
                        sub: [
                            {
                                key: "vat",
                                title: "ارزش افزوده",
                                icon: <BoldDuotoneSettingIcon size={64}/>,
                                description: "مدیریت ارزش افزوده (مالیات و عوارض)",
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
                isEnable: false,
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





