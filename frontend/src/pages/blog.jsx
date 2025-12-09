import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { formSubmit } from "../reducers/formReducer";
import { createBlog } from "../services/blogs";
import { useState } from "react";

export default function Blog() {
  const initialData = { title: "", author: "", body: "" };
  const [formData, setFormData] = useState(initialData);

  const dispatch = useDispatch();
  const mutation = useMutation({
    mutationFn: createBlog,
    onSuccess: (data) => {
      dispatch(formSubmit(data));
      setFormData(initialData);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(formData);
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Title of blog"
          value={formData.title}
          onChange={(e) =>
            setFormData((d) => ({ ...d, title: e.target.value }))
          }
        />
        <input
          placeholder="Author of blog"
          value={formData.author}
          onChange={(e) =>
            setFormData((d) => ({ ...d, author: e.target.value }))
          }
        />
        <input
          placeholder="Body of blog"
          value={formData.body}
          onChange={(e) => setFormData((d) => ({ ...d, body: e.target.value }))}
        />
        <button>{mutation.isSuccess ? "Submit" : "submitting"}</button>
      </form>
    </div>
  );
}
