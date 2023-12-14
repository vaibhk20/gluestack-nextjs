import data from "@/app/data.json";

export function getTagTopic(tagID: number) {
  const tagTopic = data.tags.find((tag) => tag.id === tagID);
  return tagTopic?.name;
}

export function getBlogById(id: number) {
  const blog = data.blogs.find((blog) => blog.id === id);
  return blog;
}
