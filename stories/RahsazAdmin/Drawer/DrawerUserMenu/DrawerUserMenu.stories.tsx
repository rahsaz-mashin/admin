import {DrawerUserMenu} from "@/stories/RahsazAdmin/Drawer/DrawerUserMenu";

export default {
  title: "RahsazAdmin/Drawer/DrawerUserMenu",
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
