import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/resources.css";
import blog1 from "../assets/blog/RE.B1.avif";
import blog2 from "../assets/blog/RE.B2.avif";
import blog3 from "../assets/blog/RE.B3.avif";
import blog4 from "../assets/blog/RE.B4.avif";
import blog5 from "../assets/blog/RE.B5.avif";
import blog6 from "../assets/blog/RE.B6.avif";
import blog7 from "../assets/blog/RE.B7.avif";
import blog8 from "../assets/blog/RE.B8.avif";
import blog9 from "../assets/blog/RE.B9.avif";

const blogs = [
  {
    id: 1,
    title: "Five most dangerous trends facing manufacturers today",
    date: "Mar 26, 2023",
    image: blog1,
    preview: "Explore the major risks manufacturers face including regulations, digital disruption and market shifts."
  },
  {
    id: 2,
    title: "3D Digital Twins and AI for Predictive Analytics in Industry",
    date: "Jan 11, 2023",
    image: blog2,
    preview: "How digital twins and AI transform predictive maintenance and operational intelligence."
  },
  {
    id: 3,
    title: "Navigating the transition to Industry 4.0",
    date: "Dec 29, 2022",
    image: blog3,
    preview: "How manufacturers can successfully transition to Industry 4.0 with AI and IoT."
  },
  {
    id: 4,
    title: "Effortlessly Monitor Your Manufacturing Assets",
    date: "Dec 29, 2022",
    image: blog4,
    preview: "How to monitor manufacturing assets with minimal effort using AI."
  },
  {
    id: 5,
    title: "Maximizing Efficiency and Quality in Manufacturing",
    date: "Dec 26, 2022",
    image: blog5,
    preview: "How to maximize efficiency and quality in manufacturing operations."
  },
  {
    id: 6,
    title: "How Manufacturing companies can save energy using IOT data?",
    date: "Dec 26, 2022",
    image: blog6,
    preview: "How to save energy in manufacturing using IoT data."
  },
  {
    id: 7,
    title: "6 Ways Anomaly Detection Can Benefit Manufacturing Operations",
    date: "Dec 26, 2022",
    image: blog7,
    preview: "How anomaly detection can improve manufacturing operations."
  },
  {
    id: 8,
    title: "Monitoring Asset Health with Megha AI Solution.",
    date: "Jul 10, 2022",
    image: blog8,
    preview: "How Megha AI helps monitor asset health in manufacturing."
  },
  {
    id: 9,
    title: "Megha AI as AI-ML based insights solution provider for State of Indiana.",
    date: "Mar 3, 2022",
    image: blog9,
    preview: "How Megha AI provides AI-ML based insights for the State of Indiana."
  }
];

export default function ResourcesPage() {
  return (
    <>

      <div className="resources-page">

        {/* Animated Page Title */}
        <motion.h1
          className="resources-title"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          BLOGS
        </motion.h1>

        {/* Blog Grid */}
        <div className="blog-grid">
          {blogs.map((blog, index) => (
            
            <Link 
              to={`/blog/${blog.id}`} 
              key={blog.id} 
              className="blog-link"
            >
              <motion.div
  className="blog-card"
  initial={{ opacity: 0, y: 60 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: index * 0.15 }}
>
  <div className="card-inner">
    
    {/* FRONT */}
    <div className="card-front">
      <div className="blog-image">
        <img src={blog.image} alt={blog.title} />
      </div>

      <div className="blog-content">
        <p className="blog-date">{blog.date}</p>
        <h3>{blog.title}</h3>
      </div>
    </div>

    {/* BACK (Preview) */}
    <div className="card-back">
  <div className="preview-wrapper">
    <p className="preview-text">{blog.preview}</p>
  </div>

  <div className="read-more">
    Read More →
  </div>
</div>

  </div>
</motion.div>


            </Link>
            

          ))}
        </div>
      </div>
    </>
    
  );
}
