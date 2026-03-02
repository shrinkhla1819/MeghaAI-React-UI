import blog9 from "../assets/blog/B75.avif";
import blog1 from "../assets/blog/RE.B1.avif";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { FaEye, FaComment } from "react-icons/fa6";
import "../styles/allposts.css";

const blogs = [
  {
    id: 9,
    title:
      "Megha AI as AI-ML based insights solution provider for State of Indiana.",
    date: "Mar 3, 2022",
    readTime: "1 min read",
    image: blog9,
    preview:
      "New Energy Insights program, in partnership with IEDC and AWS...",
    views: 12,
    comments: 0
  }
];

export default function PressRelease() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="allposts-container">
        <motion.h1
          className="allposts-title"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Press Release
        </motion.h1>

        {blogs.map((blog) => (
          <div key={blog.id} className="post-card">
            <div className="post-image">
              <img src={blog.image} alt={blog.title} />
            </div>

            <div className="post-content">
              <div className="author-info">
                <FaUserCircle />
                <div>
                  <p className="author-name">meghaai</p>
                  <p className="meta-text">
                    {blog.date} · {blog.readTime}
                  </p>
                </div>
              </div>

              <h2>{blog.title}</h2>
              <p>{blog.preview}</p>

              {/* THIS IS THE IMPORTANT LINK */}
             <Link
  to={`/blog/${blog.id}`}
  className="read-more"
>
  Read More →
</Link>

              <div className="post-footer">
                <span>
                  <FaEye /> {blog.views}
                </span>
                <span>
                  <FaComment /> {blog.comments}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}