import { MainLayout } from "./MainLayout";
import {Logo as RahsazStoreLogo} from "@/stories/RahsazStore";
import {OutlinedCustomizationIcon} from "@/stories/Icons";

export default {
  title: "RahsazAdmin/MainLayout",
  component: MainLayout,
};

export const Default = {
  args: {
    headerProps: {
      workspaceName: "راهساز استور",
      steps: [
        {
          id: "products",
          label: "محصولات",
          url: "/admin/store/products",
        },
        {
          id: "list",
          label: "لیست محصولات",
          url: "/admin/store/products/list",
        },
        {
          id: "47856",
          label: "موتور دوپا",
          url: "/admin/store/products/list/47856",
        },
      ],
    },
    workspaceItems: [
      {
        id: "gate",
        label: "راهساز گیت",
        logo: RahsazStoreLogo
      },
      {
        id: "store",
        label: "راهساز استور",
        logo: RahsazStoreLogo
      },
      {
        id: "info",
        label: "راهساز اینفو",
        logo: RahsazStoreLogo
      },
      {
        id: "online",
        label: "راهساز آنلاین",
        logo: RahsazStoreLogo
      },
      {
        id: "mag",
        label: "راهساز مگ",
        logo: RahsazStoreLogo
      },
      {
        id: "support",
        label: "راهساز ساپورت",
        logo: RahsazStoreLogo
      },
      {
        id: "pro",
        label: "راهساز پرو",
        logo: RahsazStoreLogo
      },
    ],
    menuItems: [
      {
        id: "customers",
        label: "مشتریان",
        icon: OutlinedCustomizationIcon,
      },
      {
        id: "products",
        label: "محصولات",
        icon: OutlinedCustomizationIcon,
      },
      {
        id: "orders",
        label: "سفارشات",
        icon: OutlinedCustomizationIcon,
      },
      {
        id: "wallet",
        label: "کیف پول",
        icon: OutlinedCustomizationIcon,
      },
      {
        id: "customers1",
        label: "مشتریان",
        icon: OutlinedCustomizationIcon,
      },
      {
        id: "products1",
        label: "محصولات",
        icon: OutlinedCustomizationIcon,
      },
      {
        id: "orders1",
        label: "سفارشات",
        icon: OutlinedCustomizationIcon,
      },
      {
        id: "wallet1",
        label: "کیف پول",
        icon: OutlinedCustomizationIcon,
      },
      {
        id: "customers2",
        label: "مشتریان",
        icon: OutlinedCustomizationIcon,
      },
      {
        id: "products2",
        label: "محصولات",
        icon: OutlinedCustomizationIcon,
      },
      {
        id: "orders2",
        label: "سفارشات",
        icon: OutlinedCustomizationIcon,
      },
      {
        id: "wallet2",
        label: "کیف پول",
        icon: OutlinedCustomizationIcon,
      },
      {
        id: "customers3",
        label: "مشتریان",
        icon: OutlinedCustomizationIcon,
      },
      {
        id: "products3",
        label: "محصولات",
        icon: OutlinedCustomizationIcon,
      },
      {
        id: "orders3",
        label: "سفارشات",
        icon: OutlinedCustomizationIcon,
      },
      {
        id: "wallet3",
        label: "کیف پول",
        icon: OutlinedCustomizationIcon,
      },
    ],
    userMenuItems: [
      {
        id: "edit-profile",
        label: "ویرایش پروفایل"
      },
      {
        id: "notifications",
        label: "اعلانات"
      },
      {
        id: "logout",
        label: "خروج از حساب کاربری"
      }
    ],
    accountName: "عباس قلی",
    accountAvatar: "",
    children: "This is body"
  },
  parameters: {
    nextjs: {
      appDirectory: true,
    }
  },
};
