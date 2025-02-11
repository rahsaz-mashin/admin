import { DrawerWorkspaceItem } from "./DrawerWorkspaceItem";
import {Logo} from "@/stories/Logo";

export default {
  title: "Drawer/DrawerWorkspaceItem",
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