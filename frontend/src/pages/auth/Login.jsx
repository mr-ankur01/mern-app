import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { loginUser } from "../../services/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../reducers/authReducer";

export default function Login() {
  const initialData = { email: "", password: "" };
  const [form, setForm] = useState(initialData);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      if (data.error) return setError(data.error);
      dispatch(login(data.token));
      setForm(initialData);
      navigate("/");
    },
  });

  const handleLogin = (e) => {
    e.preventDefault();
    mutation.mutate(form);
  };

  return (
    <div className="container auth">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          placeholder="Enter your email"
          type="email"
          value={form.email}
          onChange={(e) => setForm((u) => ({ ...u, email: e.target.value }))}
        />
        <input
          placeholder="Enter your password"
          type="password"
          value={form.password}
          onChange={(e) => setForm((u) => ({ ...u, password: e.target.value }))}
        />
        {error && <div className="error">{error} </div>}
        <button>Login</button>
      </form>
    </div>
  );
}
