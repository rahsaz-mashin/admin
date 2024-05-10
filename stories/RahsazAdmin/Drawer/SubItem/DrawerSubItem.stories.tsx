import { DrawerSubItem } from "./DrawerSubItem";
import { OutlinedCustomizationIcon } from "@/stories/Icons";

export default {
  title: "RahsazAdmin/Drawer/SubItem",
  component: DrawerSubItem,
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
