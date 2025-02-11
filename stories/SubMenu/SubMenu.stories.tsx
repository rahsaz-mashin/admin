import { SubMenu } from "./SubMenu";

export default {
  title: "SubMenu",
  component: SubMenu,
};

export const Default = {
  args: {
    id: "add",
    label: "محصول جدید",
  },
  parameters: {
    nextjs: {
      appDirectory: true,
    }
  },
};
