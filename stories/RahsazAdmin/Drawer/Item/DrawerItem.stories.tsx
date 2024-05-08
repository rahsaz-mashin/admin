import { DrawerItem } from "./DrawerItem";
import { OutlinedCustomizationIcon } from "../../../Icons";

export default {
  title: "RahsazAdmin/Drawer/Item",
  component: DrawerItem,
};

export const Default = {
  args: {
    label: "محصولات",
    id: "products",
    Icon: OutlinedCustomizationIcon,
  },
};
