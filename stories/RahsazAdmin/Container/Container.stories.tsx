import { Container } from "./Container";

export default {
  title: "RahsazAdmin/Container",
  component: Container,
};

export const Default = {
  args: {
    headerProps: {
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
    children: "heyyy"
  },
  parameters: {
    nextjs: {
      appDirectory: true,
    }
  },
};
