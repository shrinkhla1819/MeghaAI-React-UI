import { Routes, Route } from "react-router-dom";

/* Layout */
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

/* Main Pages */
import Home from "./pages/Home";
import Products from "./pages/Products";
import Solutions from "./pages/Solutions";
import About from "./pages/About";
import Contact from "./pages/Contact";

/* Resources & Blog Pages */
import ResourcesPage from "./pages/Resources";
import BlogDetail from "./pages/BlogDetail";
import BlogDetail2 from "./pages/BlogDetail2";
import BlogDetail3 from "./pages/BlogDetail3";
import BlogDetail4 from "./pages/BlogDetail4";
import BlogDetail5 from "./pages/BlogDetail5";
import BlogDetail6 from "./pages/BlogDetail6";
import BlogDetail7 from "./pages/BlogDetail7";
import BlogDetail8 from "./pages/BlogDetail8";
import BlogDetail9 from "./pages/BlogDetail9";
import PressRelease from "./pages/PressRelease";
import AllPosts from "./pages/AllPosts";
import Blog from "./pages/Blog";

function App() {
  return (
    <>
      {/* GLOBAL NAVBAR */}
      <Navbar />

      <Routes>
        {/* Main Website */}
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Resources Section */}
        <Route path="/resources" element={<ResourcesPage />} />

        {/* Blog Details */}
        <Route path="/blog/1" element={<BlogDetail />} />
        <Route path="/blog/2" element={<BlogDetail2 />} />
        <Route path="/blog/3" element={<BlogDetail3 />} />
        <Route path="/blog/4" element={<BlogDetail4 />} />
        <Route path="/blog/5" element={<BlogDetail5 />} />
        <Route path="/blog/6" element={<BlogDetail6 />} />
        <Route path="/blog/7" element={<BlogDetail7 />} />
        <Route path="/blog/8" element={<BlogDetail8 />} />
        <Route path="/blog/9" element={<BlogDetail9 />} />
      <Route path="/pressrelease" element={<PressRelease />} />
<Route path="/allposts" element={<AllPosts />} />
<Route path="/blog" element={<Blog />} />
      </Routes>

      {/* GLOBAL FOOTER */}
      <Footer />
    </>
  );
}

export default App;
