import { SubMenuItem } from "./SubMenuItem";

export default {
  title: "RahsazAdmin/SubMenuItem",
  component: SubMenuItem,
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
