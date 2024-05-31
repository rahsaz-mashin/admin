import { StoryItem } from "./StoryItem";

export default {
  title: "RahsazStore/Stories/StoryItem",
  component: StoryItem,
};

export const Default = {
  args: {
    id: "1",
    cover: "https://dkstatics-public.digikala.com/digikala-content-x-profile/2fbff525e29363c4e05743df82c9ec7acba99599_1715614714.jpg?x-oss-process=image/resize,m_lfit,h_150,w_150/quality,q_80",
    type: "image",
    title: "پیش فروش",
    subtitle: "موتوری و برقی",
    file: "",
  },
  parameters: {
    nextjs: {
      appDirectory: true,
    }
  },
};
