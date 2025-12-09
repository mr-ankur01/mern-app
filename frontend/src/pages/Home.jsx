import { useSelector } from "react-redux";

export default function Home() {
  const blogData = useSelector((state) => state.blogs);
  return (
    <div className="container">
      <h2>BLOGS</h2>
      <div className="blogContainer">
        {blogData.map((blog) => {
          return (
            <div className="blog" key={blog.id}>
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
