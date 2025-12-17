import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/basic/Navbar";
import Home from "./pages/Home";
import Blog from "./pages/blog";
import Login from "./pages/auth/Login";
import Sign from "./pages/auth/Sign";
import Protected from "./components/auth/protected";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Protected />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
        </Route>
        <Route path="/auth">
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Sign />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
