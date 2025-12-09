import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../services/blogs";
import { setBlog } from "../reducers/blogReducer";
import { useEffect } from "react";
export default function Home() {
  const dispatch = useDispatch();
  const blogData = useSelector((state) => state.blogs);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["data"],
    queryFn: getAll,
  });

  useEffect(() => {
    if (data) dispatch(setBlog(data));
  }, [dispatch, data]);

  if (isLoading) return <div className="container">Loading...</div>;
  if (isError) return <div className="container">Error</div>;
  console.log(blogData);
  return (
    <div className="container">
      <h2>BLOGS</h2>
      <div className="blogContainer">
        {blogData &&
          blogData.map((blog) => {
            return (
              <div className="blog" key={blog._id}>
                <label>{blog.title}</label>
                <p>{blog.body}</p>
                <span>{blog.date}</span>
              </div>
            );
          })}
      </div>
    </div>
  );
}
