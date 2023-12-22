import data from "../app/data.json";

export function getTagTopic(tagID: number) {
  const tagTopic = data.tags.find((tag) => tag.id === tagID);
  return tagTopic?.name;
}

export function getBlogById(id: string) {
  const BlogID = Number(id);
  const blog = data.blogs.find((blog) => blog.id === BlogID);
  return blog;
}
