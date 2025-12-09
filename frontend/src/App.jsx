import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/basic/Navbar";
import Home from "./pages/Home";
import Blog from "./pages/blog";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </>
  );
}

export default App;
