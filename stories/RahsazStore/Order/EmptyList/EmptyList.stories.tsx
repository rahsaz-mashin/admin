import { OrderEmptyList } from "./EmptyList";


export default {
  title: "RahsazStore/Order/EmptyList",
  component: OrderEmptyList,
};

export const Default = {
  args: {
    status: "all"
  },
  parameters: {
    nextjs: {
      appDirectory: true,
    }
  },
};
