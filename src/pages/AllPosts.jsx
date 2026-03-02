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
    id: 1,
    title: "Five most dangerous trends facing manufacturers today",
    date: "Mar 26, 2023",
    readTime: "6 min read",
    image: blog1,
    preview:
      "Cybersecurity threats: As manufacturers become more connected and reliant on technology, they are increasingly vulnerable to cyber...",
    views: 86,
    comments: 0
  },
  {
    id: 2,
    title: "3D Digital Twins and AI for Predictive Analytics in Industry: Trends and...",
    date: "Jan 11, 2023",
    readTime: "4 min read",
    image: blog2,
    preview:
      "A 3D digital twin is a digital representation of a physical asset or system that is created using 3D modelling and simulation...",
    views: 37,
    comments: 0
  },
  {
    id: 3,
    title: "Navigating the transition to Industry 4.0: Challenges, opportunities, & the role...",
    date: "Dec 29, 2022",
    readTime: "5 min read",
    image: blog3,
    preview:
      "What are the main differences between Industry 3.0 and 4.0? Industry 3.0, also known as the Digital Revolution, refers to the period of...",
    views: 11,
    comments: 0
  },{
    id: 4,
    title: "Effortlessly Monitor Your Manufacturing Assets with MeghaAI's No-Code AI...",
    date: "Dec 29, 2022",
    readTime: "4 min read",
    image: blog4,
    preview:
      "Introduction: At MeghaAI, we understand that manufacturing companies often have a lot of data coming from their machines and equipment,...",
    views: 14,
    comments: 0
  },{
    id: 5,
    title: "Maximizing Efficiency and Quality in Manufacturing: How MeghaAI's Data Lake..",
    date: "Dec 26, 2022",
    readTime: "4 min read",
    image: blog5,
    preview:
      "Why RCA? Root cause analysis (RCA) is an important tool in manufacturing because it helps identify the underlying cause of a problem or...",
    views: 13,
    comments: 0
  },{
    id: 6,
    title: "How Manufacturing companies can save energy using IOT data?",
    date: "Dec 26, 2022",
    readTime: "6 min read",
    image: blog6,
    preview:
      "Energy efficiency is becoming increasingly important for manufacturing companies, as they look to reduce costs and improve their...",
    views: 13,
    comments: 0
  },{
    id: 7,
    title: "6 Ways Anomaly Detection Can Benefit Manufacturing Operations",
    date: "Dec 26, 2022",
    readTime: "5 min read",
    image: blog7,
    preview:
      "Anomaly detection is important in manufacturing operations because it helps to identify deviations from the normal or expected behavior...",
    views: 15,
    comments: 0
  },{
    id: 8,
    title: "Monitoring Asset Health with Megha AI Solution.",
    date: "Jul 10, 2022",
    readTime: "4 min read",
    image: blog8,
    preview:
      "Industry 4.0 The Fourth Industrial Revolution, or Industry 4.0, is bringing rapid changes within the industry from the evolution of...",
    views: 19,
    comments: 0
  },
  {
    id: 9,
    title: "Megha AI as AI-ML based insights solution provider for State of Indiana.",
    date: "Mar 3, 2022",
    readTime: "1 min read",
    image: blog9,
    preview:
      "New Energy Insights program, in partnership with IEDC and AWS, to reduce energy costs for Indiana manufacturers March 2, 2022...",
    views: 12,
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
          ALL POSTS
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