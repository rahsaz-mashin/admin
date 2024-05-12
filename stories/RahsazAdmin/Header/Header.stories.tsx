import { Header } from "./Header";

export default {
  title: "RahsazAdmin/Header",
  component: Header,
};

export const Default = {
  args: {
    workspaceName: "راهساز استور",
    steps: [
      {
        id: "products",
        label: "محصولات",
        url: "/admin/store/products",
      },
      {
        id: "list",
        label: "لیست محصولات",
        url: "/admin/store/products/list",
      },
      {
        id: "47856",
        label: "موتور دوپا",
        url: "/admin/store/products/list/47856",
      },
    ],
  },
  parameters: {
    nextjs: {
      appDirectory: true,
    }
  },
};
