import { DrawerMenuItem } from "./DrawerMenuItem";
import { OutlinedCustomizationIcon } from "@/stories/Icons";

export default {
  title: "RahsazStore/Drawer/DrawerMenuItem",
  component: DrawerMenuItem,
};

export const Default = {
  args: {
    id: "products",
    label: "محصولات",
    icon: OutlinedCustomizationIcon,
    isActive: false
  },
  parameters: {
    nextjs: {
      appDirectory: true,
    }
  },
};
