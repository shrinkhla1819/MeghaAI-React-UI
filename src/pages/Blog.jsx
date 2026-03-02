import blog1 from "../assets/blog/RE.B1.avif";
import blog2 from "../assets/blog/RE.B2.avif";
import blog3 from "../assets/blog/RE.B3.avif";
import blog4 from "../assets/blog/RE.B4.avif";
import blog5 from "../assets/blog/RE.B5.avif";
import blog6 from "../assets/blog/RE.B6.avif";
import blog7 from "../assets/blog/RE.B7.avif";
import blog8 from "../assets/blog/RE.B8.avif";
import blog9 from "../assets/blog/RE.B9.avif";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
  FaRegHeart,
  FaHeart,
  FaEye,
  FaComment,
  FaLink
} from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import Navbar from "../components/layout/Navbar";
import "../styles/allposts.css";   // ✅ same structure style import

const blogs = [
  {
    id: 8,
    title: "Monitoring Asset Health with Megha AI Solution.",
    date: "Jul 10, 2022",
    readTime: "4 min read",
    image: blog8,
    preview:
      "Industry 4.0 The Fourth Industrial Revolution, or Industry 4.0, is bringing rapid changes within the industry from the evolution of...",
    views: 19,
    comments: 0
  }
];

export default function AllPosts() {
  const [likes, setLikes] = useState({});
  const [openMenu, setOpenMenu] = useState(null);
  const [showScroll, setShowScroll] = useState(false);

  // Scroll button logic
  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Like function (no negative values)
  const toggleLike = (id) => {
    setLikes((prev) => {
      const current = prev[id] || { liked: false, count: 0 };

      if (current.liked) {
        return {
          ...prev,
          [id]: {
            liked: false,
            count: Math.max(current.count - 1, 0)
          }
        };
      } else {
        return {
          ...prev,
          [id]: {
            liked: true,
            count: current.count + 1
          }
        };
      }
    });
  };

  const toggleMenu = (id) => {
    setOpenMenu(openMenu === id ? null : id);
  };

  const handleShare = (platform, id) => {
    const url = `${window.location.origin}/blog/${id}`;
    const encoded = encodeURIComponent(url);
    let shareUrl = "";

    if (platform === "facebook")
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encoded}`;

    if (platform === "twitter")
      shareUrl = `https://x.com/intent/post?url=${encoded}`;

    if (platform === "linkedin")
      shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encoded}`;

    window.open(shareUrl, "_blank");
  };

  const handleCopy = (id) => {
    const url = `${window.location.origin}/blog/${id}`;
    navigator.clipboard.writeText(url);
    alert("Link copied!");
  };

  return (
    <>

      <div className="allposts-container">
        <motion.h1
          className="allposts-title"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Blog
        </motion.h1>

        {blogs.map((blog, index) => (
          <motion.div
            key={blog.id}
            className="post-card"
            initial={{ opacity: 0, scale: 0.9, filter: "blur(8px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
              ease: "easeOut"
            }}
          >
            <div className="post-image">
              <img src={blog.image} alt={blog.title} />
            </div>

            <div className="post-content">

              {/* Author + Menu */}
              <div className="post-header">
                <div className="author-info">
                  <FaUserCircle className="author-avatar" />
                  <div>
                    <p className="author-name">meghaai</p>
                    <p className="meta-text">
                      {blog.date} · {blog.readTime}
                    </p>
                  </div>
                </div>

                <div className="menu-wrapper">
                  <span
                    className="three-dots"
                    onClick={() => toggleMenu(blog.id)}
                  >
                    ⋮
                  </span>

                  {openMenu === blog.id && (
                    <div className="share-menu">
                      <FaFacebookF onClick={() => handleShare("facebook", blog.id)} />
                      <FaXTwitter onClick={() => handleShare("twitter", blog.id)} />
                      <FaLinkedinIn onClick={() => handleShare("linkedin", blog.id)} />
                      <FaLink onClick={() => handleCopy(blog.id)} />
                    </div>
                  )}
                </div>
              </div>

              <h2>{blog.title}</h2>
              <p className="post-preview">{blog.preview}</p>

              <Link to={`/blog/${blog.id}`} className="read-more">
                Read More →
              </Link>

              <div className="post-footer">
                <div className="stats">
                  <span><FaEye /> {blog.views}</span>
                  <span><FaComment /> {blog.comments}</span>
                </div>

                <div className="actions">
                  <span
                    className="like-btn"
                    onClick={() => toggleLike(blog.id)}
                  >
                    {likes[blog.id]?.liked ? (
                      <FaHeart className="liked" />
                    ) : (
                      <FaRegHeart />
                    )}
                    {likes[blog.id]?.count || 0}
                  </span>
                </div>
              </div>

            </div>
          </motion.div>
        ))}
      </div>
 {showScroll && (
        <button className="scroll-top-btn" onClick={scrollToTop}>
          ↑
        </button>
      )}
    </>
  );
}