export default function Home() {
  const blogData = [
    {
      id: 1,
      title: "Getting Started with React",
      body: "React is a JavaScript library for building user interfaces. It helps create reusable UI components and manage state efficiently.",
      date: "2025-01-10",
      author: "Ankur Sawant",
    },
    {
      id: 2,
      title: "Understanding JavaScript Closures",
      body: "Closures allow a function to access variables from an outer function even after the outer function has returned.",
      date: "2025-01-08",
      author: "John Doe",
    },
    {
      id: 3,
      title: "Why You Should Learn TypeScript",
      body: "TypeScript improves code quality through static typing and better tooling support. It's especially useful in large-scale applications.",
      date: "2025-01-02",
      author: "Sarah Parker",
    },
    {
      id: 4,
      title: "CSS Grid vs Flexbox",
      body: "Both Grid and Flexbox are powerful layout systems, but they serve different purposes. Grid is best for 2D layouts while Flexbox is ideal for 1D.",
      date: "2024-12-25",
      author: "Michael Lee",
    },
    {
      id: 5,
      title: "MongoDB: Beginner to Pro",
      body: "MongoDB is a NoSQL database that stores data in flexible, JSON-like documents, making it perfect for scalable modern web apps.",
      date: "2024-12-20",
      author: "Ankur Sawant",
    },
  ];

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
