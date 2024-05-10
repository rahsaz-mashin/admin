import { DrawerMainItem } from "./DrawerMainItem";
import {Logo} from "@/stories/RahsazStore";

export default {
  title: "RahsazAdmin/Drawer/MainItem",
  component: DrawerMainItem,
};

export const Default = {
  args: {
    id: "store",
    label: "راهساز استور",
    logo: Logo,
    isActive: true
  },
  parameters: {
    nextjs: {
      appDirectory: true,
    }
  },
};