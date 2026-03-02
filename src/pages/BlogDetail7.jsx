import { useContext } from "react";
import { SearchContext } from "../pages/SearchContext";
import { useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import blog71 from "../assets/blog/B71.avif";
import blog72 from "../assets/blog/B72.avif";
import blog73 from "../assets/blog/B73.avif";
import blog74 from "../assets/blog/B74.avif";
import blog75 from "../assets/blog/B75.avif";
import blog76 from "../assets/blog/B76.avif";
import blogImg from "../assets/blog/B11.avif";
import blogImg2 from "../assets/blog/B12.avif";
import blogImg3 from "../assets/blog/B13.avif";
import {
  FaShareAlt,
  FaUserCircle,
  FaEllipsisV,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaEye,
  FaRegCommentDots,
  FaLink,
  FaSmile,
  FaImage,
  FaVideo,
  FaGift,
  FaFacebook
} from "react-icons/fa";


import { FaXTwitter } from "react-icons/fa6";


import "../styles/blog.css";


export default function BlogDetail() {
  const [showScroll, setShowScroll] = useState(false);
  const [mainLikes, setMainLikes] = useState(12);
  const [mainLiked, setMainLiked] = useState(false);
  const { id } = useParams();
  const ref = useRef(null);
  const [darkMode, setDarkMode] = useState(false);
  const [summaryOpen, setSummaryOpen] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [showShare, setShowShare] = useState(false);
  const [comment, setComment] = useState("");
  const [showLogin, setShowLogin] = useState(false);
  const { searchTerm, setSearchTerm } = useContext(SearchContext);
  const navigate = useNavigate();
  const currentUrl = window.location.href;
const handleCopy = () => {
  navigator.clipboard.writeText(window.location.href);
  alert("Link copied!");
};
  /* Scroll Progress */
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30
  });

  const sections = [
    { id: "1", title: "Start" },
    { id: "2", title: "In Industry 4.0" },
    { id: "3", title: "IIT4.0 platform" },
    { id: "4", title: "How MeghaAI can help?" }
  ];
  const [recentPosts, setRecentPosts] = useState([
  {
    id: 1,
    title: "Digital Twins in Industry",
    image: blogImg,
    preview: "How digital twins are transforming predictive analytics.",
    views: 18,
    comments: 13,
    likes: 5,
    liked: false,
    link: "/blog/1"
  },
  {
    id: 2,
    title: "AI in Manufacturing",
    image: blogImg2,
    preview: "Leveraging AI to optimize production lines.",
    views: 13,
    comments: 18,
    likes: 5,
    liked: false,
    link: "/blog/2"
  },
  {
    id: 3,
    title: "Smart Supply Chains",
    image: blogImg3,
    preview: "How predictive systems help manage supply chain disruptions.",
    views: 20,
    comments: 9,
    likes: 5,
    liked: false,
    link: "/blog/3"
  }
]);
useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};
  return (
    <>

      <motion.div className="progress-bar" style={{ scaleX }} />

      <div className={`blog-wrapper ${darkMode ? "dark" : ""}`} ref={ref}>
{/* CATEGORY TABS */}
<div
  style={{
    marginTop: "50px",   // space below navbar
    maxWidth: "1200px",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "0 20px"
  }}
>

   <div>
  <Link to="/allposts">All Posts</Link>

  <Link to="/pressrelease" style={{ marginLeft: "20px" }}>
    Press Release
  </Link>

  <Link to="/blog" style={{ marginLeft: "20px" }}>
    Blog
  </Link>
</div>

  <input
    type="text"
    placeholder="Search posts..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    onKeyDown={(e) => {
      if (e.key === "Enter") navigate("/search");
    }}
    style={{
      width: "180px",
      padding: "6px 10px",
      borderRadius: "20px",
      border: "1px solid #ccc",
       marginTop: "10px",
    }}
  />
</div>

       {/* LAYOUT WRAPPER */}
<div className="blog-layout">


        {/* HERO */}
        <div className="blog-container">
        <motion.div
  initial={{ opacity: 0, y: -120 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: "easeOut" }}
>
  {/* AUTHOR BAR */}
<div className="author-bar">
  <div className="author-left">
    <FaUserCircle className="author-icon" />
    <div>
      <span className="author-name">meghaai</span>
      <span className="author-meta">
        ·Jan 11, 2023 · 4 min read
      </span>
    </div>
  </div>

  <div className="author-right">
    <button onClick={() => setShowShare(true)}>
  <FaShareAlt size={20} />
</button>
{showShare && (
  <div className="share-overlay">
    <div className="share-box">
      <h3>Share Post</h3>

      <div className="icons">
        <a
    href={`https://www.facebook.com/sharer/sharer.php?u=https://www.meghaai.com/post/five-most-dangerous-trends-facing-manufacturers-today
`}
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaFacebook size={30} />
  </a>
        <a
    href={`https://x.com/intent/post?url=https%3A%2F%2Fwww.meghaai.com%2Fpost%2Ffive-most-dangerous-trends-facing-manufacturers-today
`}
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaTwitter size={30} />
  </a>
        <a
    href={`https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2FshareArticle%3Fmini%3Dtrue%26url%3Dhttps%3A%2F%2Fwww.meghaai.com%2Fpost%2Ffive-most-dangerous-trends-facing-manufacturers-today`}
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaLinkedinIn size={30} />
  </a>
       <FaLink
    size={30}
    style={{ cursor: "pointer" }}
    onClick={() => {
      navigator.clipboard.writeText(currentUrl);
      alert("Link copied!");
    }}
  />
      </div>

      <button onClick={() => setShowShare(false)}>
        Close
      </button>
    </div>
  </div>
)}

  </div>
</div>

  <div className="blog-hero">
    <p>Jan 11, 2023</p>
  </div>
</motion.div>
          <div className="blog-main-container">  
                      <section className="article-section">
            <h1>6 Ways Anomaly Detection Can Benefit Manufacturing Operations</h1>
    
            <p> Anomaly detection is important in manufacturing operations because it helps to identify deviations from the normal or expected behavior of a system. This can be critical for identifying problems that may affect the quality or efficiency of the manufacturing process. For example, an anomaly in a machine's performance could be an indication of a malfunction that needs to be addressed before it causes more significant issues. By detecting anomalies early, manufacturers can take corrective action to prevent disruptions to the production process and avoid costly downtime. In addition, anomaly detection can help manufacturers identify opportunities to optimize their operations by identifying patterns or trends that may indicate inefficiencies or areas for improvement.</p>
          </section>
           <section className="article-section">
            <h2>1. Improved efficiency:</h2>
           <img src={blog71} alt="Improved Efficiency in Manufacturing" className="blog-inline-image" /><br></br><br></br>
    
            <p> Anomaly detection can help improve efficiency in manufacturing operations by identifying and correcting problems that may be causing inefficiencies in the production process. For example, if a machine is experiencing an anomaly in its performance, this could be an indication of a malfunction that needs to be addressed. By identifying and correcting such issues, manufacturers can prevent disruptions to the production process and avoid costly downtime.</p>
            <p>In addition, anomaly detection can help identify patterns or trends in manufacturing data that may indicate inefficiencies or areas for improvement. For example, if an anomaly is detected in the amount of energy being consumed by a machine, this could be an indication that the machine is operating less efficiently than it should be. By identifying such patterns, manufacturers can take steps to optimize their operations and improve overall efficiency.</p>
            <p>Overall, by detecting and correcting problems early, anomaly detection can help manufacturers achieve higher levels of efficiency, reduce costs, and improve the overall performance of their operations.</p>
</section>
<section className="article-section">
<h2>2. Increased quality:</h2>
<img src={blog72} alt="Increased Quality in Manufacturing" className="blog-inline-image" /><br></br><br></br>

<p>Anomaly detection can help improve the quality of manufacturing operations by identifying and correcting problems that may affect the quality of the final product. For example, if an anomaly is detected in the performance of a machine or in the materials being used in the production process, this could be an indication of a problem that needs to be addressed. By identifying and correcting such issues, manufacturers can ensure that they are producing goods that meet customer expectations and requirements.</p>

<p>In addition, anomaly detection can help manufacturers identify patterns or trends in manufacturing data that may indicate opportunities for improving product quality. For example, if an anomaly is detected in the rate of defective products being produced, this could be an indication that there is a problem with the production process that needs to be addressed. By identifying such patterns, manufacturers can take steps to optimize their operations and improve the overall quality of their products.</p>

<p>Overall, by using anomaly detection to identify and correct problems that may affect product quality, manufacturers can improve customer satisfaction and build a stronger reputation for producing high-quality goods.</p>
</section>
         <section className="article-section">
         <h2>3. Reduced downtime:</h2>
         <img src={blog73} alt="Reduced Downtime in Manufacturing" className="blog-inline-image" /><br></br><br></br>
          
            <p>Anomaly detection can help reduce downtime in manufacturing operations by identifying and correcting problems before they cause significant disruptions to the production process. For example, if an anomaly is detected in the performance of a machine, this could be an indication of a malfunction that needs to be addressed before it causes the machine to break down. By identifying and correcting such issues early, manufacturers can prevent disruptions to the production process and avoid costly downtime.</p>

<p>In addition, anomaly detection can help manufacturers identify patterns or trends in manufacturing data that may indicate the potential for future downtime. For example, if an anomaly is detected in the rate of equipment failures, this could be an indication that there is a problem with the equipment that needs to be addressed before it causes more significant issues. By identifying such patterns, manufacturers can take proactive steps to prevent future downtime and optimize their operations.</p>
<p>Overall, by using anomaly detection to identify and correct problems that may cause disruptions to the production process, manufacturers can reduce downtime and improve the overall efficiency and performance of their operations.</p>
        </section>
           <section className="article-section">
         <h2>4. Enhanced safety:</h2>
         <img src={blog74} alt="Enhanced Safety in Manufacturing" className="blog-inline-image" /><br></br><br></br>
          
           <p>Anomaly detection can help enhance safety in manufacturing operations by identifying potential safety hazards and allowing manufacturers to take preventive measures to protect workers and prevent accidents. For example, if an anomaly is detected in the performance of a machine, this could be an indication of a malfunction that could pose a safety risk to workers. By identifying and correcting such issues, manufacturers can ensure that their equipment is operating safely and reduce the risk of accidents.</p>


<p>In addition, anomaly detection can help manufacturers identify patterns or trends in manufacturing data that may indicate potential safety hazards. For example, if an anomaly is detected in the rate of accidents or injuries, this could be an indication that there is a safety issue that needs to be addressed. By identifying such patterns, manufacturers can take steps to improve safety in their operations and reduce the risk of accidents or injuries.</p>


<p>Overall, by using anomaly detection to identify and correct potential safety hazards, manufacturers can enhance the safety of their operations and protect their workers from harm.</p>
          </section>
           <section className="article-section">
         <h2>5. Improved maintenance: </h2>
         <img src={blog75} alt="Improved Maintenance in Manufacturing" className="blog-inline-image" /><br></br><br></br>
         <p>Anomaly detection can help improve maintenance in manufacturing operations by identifying problems with equipment or machinery that may require maintenance or repair. For example, if an anomaly is detected in the performance of a machine, this could be an indication of a malfunction that needs to be addressed through maintenance or repair. By identifying and correcting such issues, manufacturers can prevent disruptions to the production process and extend the lifespan of their equipment.</p>


<p>In addition, anomaly detection can help manufacturers identify patterns or trends in manufacturing data that may indicate the need for maintenance or repair. For example, if an anomaly is detected in the rate of equipment failures, this could be an indication that there is a problem with the equipment that needs to be addressed. By identifying such patterns, manufacturers can take proactive steps to maintain and repair their equipment, improving its reliability and performance.</p>


<p>Overall, by using anomaly detection to identify and correct problems with equipment or machinery, manufacturers can improve maintenance and extend the lifespan of their equipment, resulting in cost savings and improved efficiency in their operations.</p>
</section>
<section className="article-section">
         <h2>6. Better decision making:</h2>
         <img src={blog76} alt="Better Decision Making in Manufacturing" className="blog-inline-image" /><br></br><br></br>
         <p>Anomaly detection can help improve decision making in manufacturing operations by identifying patterns and trends in manufacturing data that may be useful for identifying opportunities for improvement. By analyzing data from various sources, such as production machines, quality control systems, and logistics systems, manufacturers can identify anomalies or deviations from the expected behavior of the system. These anomalies may indicate problems that need to be addressed or opportunities for optimization.</p>


<p>For example, if an anomaly is detected in the rate of defective products being produced, this could be an indication that there is a problem with the production process that needs to be addressed. By identifying and correcting such issues, manufacturers can improve the quality of their products and reduce the risk of customer complaints or returns.</p>


<p>In addition, anomaly detection can help manufacturers identify patterns or trends in manufacturing data that may indicate opportunities for efficiency improvements. For example, if an anomaly is detected in the amount of energy being consumed by a machine, this could be an indication that the machine is operating less efficiently than it should be. By identifying such patterns, manufacturers can take steps to optimize their operations and reduce costs.</p>


<p>Overall, by using anomaly detection to identify patterns and trends in manufacturing data, manufacturers can make more informed decisions about their operations and identify opportunities for improvement. This can help them optimize their operations, improve efficiency, and enhance the overall performance of their business.</p>
</section>
<section className="article-section">
         <h2>Conclusion:</h2>
         <p>In conclusion, anomaly detection is an important tool for manufacturing operations, helping to identify deviations from the normal or expected behavior of a system. By using anomaly detection, manufacturers can improve efficiency, increase quality, reduce downtime, enhance safety, improve maintenance, and make better decisions about their operations. MeghaAI's no code anomaly detection module offers a convenient and user-friendly way for manufacturers to implement anomaly detection in their operations, making it easy to identify and address problems and optimize their processes. By leveraging the power of anomaly detection, manufacturers can improve the performance of their operations and achieve a competitive edge in their industry.</p></section>

          
          {/* SHARE + STATS */}
<div className="share-section">
  <div className="share-icons">

  {/* Facebook */}
  <a
    href="https://www.facebook.com/sharer/sharer.php?u=https://www.meghaai.com/post/five-most-dangerous-trends-facing-manufacturers-today"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaFacebookF />
  </a>

  {/* X (Twitter) */}
  <a
    href="https://x.com/intent/post?url=https%3A%2F%2Fwww.meghaai.com%2Fpost%2Ffive-most-dangerous-trends-facing-manufacturers-today"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaXTwitter />
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/feed?mini=true&url=https%3A%2F%2Fwww.meghaai.com%2Fpost%2Ffive-most-dangerous-trends-facing-manufacturers-today&shareUrl=https%3A%2F%2Fwww.meghaai.com%2Fpost%2Ffive-most-dangerous-trends-facing-manufacturers-today&shareActive=true&linkOrigin=LI_BADGE&skipRedirect=true&lipi=urn%3Ali%3Apage%3Ad_UNKNOWN_ROUTE_inshare-redirect%3B19b2eb82-0de4-40a8-ad31-048082b4a11b"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaLinkedinIn />
  </a>

  {/* Copy Link */}
  <FaLink className="copy-icon" onClick={handleCopy} />

</div>


  <div className="post-stats">
    <span><FaEye /> 36 views</span>
    <span><FaRegCommentDots /> 0 comments</span>
    <span 
  className="like-btn"
  onClick={() => {
    if (!mainLiked) {
      setMainLikes(mainLikes + 1);
    } else {
      setMainLikes(mainLikes - 1);
    }
    setMainLiked(!mainLiked);
  }}
>
  {mainLiked ? (
    <FaHeart className="heart filled" />
  ) : (
    <FaRegHeart className="heart" />
  )}
  <span className="like-count">{mainLikes}</span>
</span>


  </div>
</div>
</div>

{/* RECENT POSTS */}
<div className="recent-posts">
  <div className="recent-header">
  <h3>Recent Posts</h3>
  <button className="see-all">See All</button>
</div>

  <div className="recent-grid">
    {recentPosts.map(post => (
  <RecentCard 
    key={post.id} 
    post={post} 
    updatePosts={setRecentPosts}
  />
))}

  </div>
</div>
{/* Comment Section Title */}
<div style={{ marginTop: "60px", marginBottom: "20px" }}>
  <h2 style={{ borderBottom: "1px solid #ccc", paddingBottom: "10px" }}>
    Comments
  </h2>
</div>

{/* COMMENTS */}
<textarea
  placeholder="Start writing or type / for plugins"
  value={comment}
  onChange={(e) => setComment(e.target.value)}
  style={{ width: "100%", height: "100px" ,border: "2px solid black", borderRadius: "20px", padding: "15px"}}
/>

<div style={{ display: "flex", gap: "15px", marginTop: "10px" }}>
  <FaSmile />
  <FaImage />
  <FaVideo />
  <FaGift />
</div>
        </div>
      </div>

        </div> {/* END blog-container */}

      {showLogin && (
  <div className="login-overlay">
    <div className="login-box">
      <h1>Log In</h1>
      <p>New to this site? Sign Up</p>

      <button>Log in with Google</button>
      <button>Log in with Facebook</button>
      <button>Log in with Email</button>

      <button onClick={() => setShowLogin(false)}>
        Close
      </button>
    </div>
  </div>
)}

        {showScroll && (
  <button className="scroll-top-btn" onClick={scrollToTop}>
    ↑
  </button>
)}

    </>
  );
}


/* 🔥 Section Component */
function PremiumSection({ id, direction, title, image, children }) {
  const isLeft = direction === "left";

  return (
    <motion.section
      id={id}
      className={`premium-section ${isLeft ? "row-normal" : "row-reverse"}`}
      initial={{ opacity: 0, x: isLeft ? -200 : 200 }}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.3 }}  // 🔥 animation every scroll
    >
      <div className="section-image">
        <img src={image} alt={title} />
      </div>

      <div className="section-text">
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
    </motion.section>
    
  );
}
function RecentCard({ post, updatePosts }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleLike = (e) => {
    e.stopPropagation();
    updatePosts(prev =>
      prev.map(p =>
        p.id === post.id
          ? {
              ...p,
              liked: !p.liked,
              likes: p.liked ? p.likes - 1 : p.likes + 1
            }
          : p
      )
    );
  };

  return (
    <div className="recent-card-wrapper">

      <div className={`recent-card-inner ${isFlipped ? "flipped" : ""}`}>

        {/* FRONT */}
        <div className="recent-card-front">

          {/* TOP IMAGE AREA (FLIP + NAVIGATE) */}
          <Link
            to={post.link}
            className="recent-top-area"
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
          >
            <img src={post.image} alt={post.title} />
            <h4>{post.title}</h4>
          </Link>

          {/* DIVIDER LINE */}
          <div className="recent-divider"></div>

          {/* BOTTOM ICON AREA (NO FLIP) */}
          <div className="recent-bottom-area">
            <span><FaEye /> {post.views}</span>
            <span><FaRegCommentDots /> {post.comments}</span>

            <span className="like-btn" onClick={handleLike}>
              {post.liked ? (
                <FaHeart className="heart filled" />
              ) : (
                <FaRegHeart className="heart" />
              )}
              {post.likes}
            </span>
          </div>

        </div>

        {/* BACK */}
        <div
          className="recent-card-back"
          onMouseLeave={() => setIsFlipped(false)}
        >
          <p>{post.preview}</p>

          <Link to={post.link} className="read-more-btn">
            Read More →
          </Link>
        </div>

      </div>
    </div>
  );
}

