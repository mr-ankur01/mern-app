import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../services/blogs";
import { setBlog } from "../reducers/blogReducer";
import { useEffect } from "react";
export default function Home() {
  const dispatch = useDispatch();
  const blogData = useSelector((state) => state.blogs);
  const token = useSelector((state) => state.auth.token);
  const { data, isLoading, isError } = useQuery({
    queryKey: ["data"],
    queryFn: () => getAll(token),
  });

  useEffect(() => {
    if (data) dispatch(setBlog(data));
  }, [dispatch, data]);

  if (isLoading) return <div className="container">Loading...</div>;
  if (isError) return <div className="container">Error</div>;
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="container">
      <h2>BLOGS</h2>
      <div className="blogContainer">
        {blogData.length > 0
          ? blogData.map((blog) => {
              return (
                <div className="blog" key={blog._id}>
                  <label>{blog.title}</label>
                  <p>{blog.body}</p>
                  <span>{blog.updatedAt && formatDate(blog.updatedAt)}</span>
                </div>
              );
            })
          : "there is nothing"}
      </div>
    </div>
  );
}
