import type { Meta, StoryObj } from "@storybook/react";

import BlogCard from "../../components/BlogCard";

import { BlogSchema } from "../../lib/schema";

const BlogCardArgs: BlogSchema = {
  id: 1,
  title: "Blog Title",
  description: "Blog Description",
  content: "Blog Content",
  author: "Blog Author",
  date: "20 sep",
  likes: 10,
  media: "https://picsum.photos/200/300",
  tagsId: 1,
};

const meta = {
  title: "Medium/BlogCard",
  component: BlogCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    nextjs: {
      appDirectory: true,
    },
  },

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof BlogCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    blogData: BlogCardArgs,
  },
};
