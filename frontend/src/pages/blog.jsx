import { useMutation } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { formSubmit } from "../reducers/formReducer";
import { createBlog } from "../services/blogs";
import { useState } from "react";

export default function Blog() {
  const initialData = { title: "", author: "", body: "" };
  const [formData, setFormData] = useState(initialData);
  const [submited, setSubmited] = useState(true);

  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  const mutation = useMutation({
    mutationFn: (data) => createBlog({ data, token }),
    onSuccess: (data) => {
      console.log(data);
      dispatch(formSubmit(data));
      setFormData(initialData);
      setSubmited(true);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmited(false);
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
        <textarea
          className="blogBody"
          placeholder="Body of blog"
          value={formData.body}
          onChange={(e) => setFormData((d) => ({ ...d, body: e.target.value }))}
        />
        <button>{submited ? "Submit" : "submitting..."}</button>
      </form>
    </div>
  );
}
