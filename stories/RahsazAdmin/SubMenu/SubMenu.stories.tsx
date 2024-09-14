import { SubMenu } from "./SubMenu";

export default {
  title: "RahsazAdmin/SubMenu",
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
