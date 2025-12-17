import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { signUser } from "../../services/auth";
import { useDispatch } from "react-redux";
import { login } from "../../reducers/authReducer";
import { useNavigate } from "react-router-dom";

export default function Sign() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const mutation = useMutation({
    mutationFn: signUser,
    onSuccess: (data) => {
      if (data.error) return setError(data.error);
      dispatch(login(data.token));
      setError(null);
      navigate("/");
    },
  });

  const hangleSign = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      setError("password and confirm password is different");
    }
    mutation.mutate({
      email: form.email,
      password: form.password,
      name: form.name,
    });
  };

  return (
    <div className="container auth">
      <h2>SignUp</h2>
      <form onSubmit={hangleSign}>
        <input
          placeholder="Enter your name"
          type="text"
          value={form.name}
          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
        />
        <input
          placeholder="Enter your email"
          type="email"
          value={form.email}
          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
        />

        <input
          placeholder="Enter your password"
          type="password"
          value={form.password}
          onChange={(e) => setForm((f) => ({ ...f, password: e.target.value }))}
        />
        <input
          placeholder="Confirm password"
          type="password"
          value={form.confirmPassword}
          onChange={(e) =>
            setForm((f) => ({ ...f, confirmPassword: e.target.value }))
          }
        />
        {error && <div className="error">{error}</div>}
        <button>SignUp</button>
      </form>
    </div>
  );
}
