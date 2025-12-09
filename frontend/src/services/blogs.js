import axios from "axios";

export const getAll = async () => {
  const res = await axios.get("/api/blogs");
  return res.data;
};

export const createBlog = async (data) => {
  const res = await axios.post("/api/blog", data);
  return res.data;
};
