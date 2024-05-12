import { DrawerWorkspaceItem } from "./DrawerWorkspaceItem";
import {Logo} from "@/stories/RahsazStore";

export default {
  title: "RahsazAdmin/Drawer/DrawerWorkspaceItem",
  component: DrawerWorkspaceItem,
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