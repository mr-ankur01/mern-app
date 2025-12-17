export const getAll = async (token) => {
  const res = await fetch("/api/blogs", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return await res.json();
};

export const createBlog = async ({ data, token }) => {
  const res = await fetch("/api/blog", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  console.log(res);
  return await res.json();
};
