import type { Meta, StoryObj } from "@storybook/react";

import SuggestionsCard from "../../components/SuggestionsCard";

const meta = {
  title: "Medium/SuggestionsCard",
  component: SuggestionsCard,

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof SuggestionsCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    blog: {
      id: 1,
      title: "Blog Title",
      description: "Blog Description",
      content: "Blog Content",
      author: "Blog Author",
      date: "20 sep",
      likes: 10,
      media: "https://picsum.photos/200/300",
      tagsId: 1,
    },
  },
};
