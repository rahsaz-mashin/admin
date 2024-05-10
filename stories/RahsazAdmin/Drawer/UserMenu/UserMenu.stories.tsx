import { OutlinedCustomizationIcon } from "@/stories/Icons";
import {DrawerUserMenu} from "@/stories/RahsazAdmin/Drawer/UserMenu/UserMenu";

export default {
  title: "RahsazAdmin/Drawer/UserMenu",
  component: DrawerUserMenu,
};

export const Default = {
  args: {
    items: [
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
    ]
  },
  parameters: {
    nextjs: {
      appDirectory: true,
    }
  },
};
