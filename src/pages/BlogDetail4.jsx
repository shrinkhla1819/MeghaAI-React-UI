import blog1 from "../assets/blog/B41.avif";
import blog2 from "../assets/blog/B42.avif";
import blog3 from "../assets/blog/B43.avif";
import blog4 from "../assets/blog/B44.avif";
import blog5 from "../assets/blog/B45.avif";

import { useContext } from "react";
import { SearchContext } from "../pages/SearchContext";
import { useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
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
import { image } from "framer-motion/client";
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
    { id: "1", title: "Introduction:" },
    { id: "2", title: "Finding anomalies?" },
    { id: "3", title: "How it works:" },
    { id: "4", title: "Benefits" },
    { id: "5", title: "Conclusion" }
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
    marginTop: "80px",   // space below navbar
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
      marginTop: "10px",
      padding: "6px 10px",
      borderRadius: "20px",
      border: "1px solid #ccc"
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
         ·Dec 29, 2022 · 4 min read
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
    <p>Dec 29, 2022</p>
  </div>
</motion.div>

 <div className="blog-main-container">
                    {/* Sections */}
            <section className="article-section">
                      <h1>Effortlessly Monitor Your Manufacturing Assets with MeghaAI's No-Code AI</h1>
                      <h4>INTRODUCTION</h4>     <br></br>
  <p> At MeghaAI, we understand that manufacturing companies often have a lot of data coming from their machines and equipment, but may not have the resources or expertise to analyze this data effectively. That's where our no-code AI module comes in.</p>
<p>With just a few clicks, our module allows users to build an anomaly detection model for their assets and sensors, without any need for data science knowledge. This means that users can easily identify problems and issues in their manufacturing processes, and take steps to address them in a timely manner.</p>

<h4>Why Anomaly detection?</h4>
<br></br>
<p>Anomaly detection is a critical part of any manufacturing process, as it helps to identify and address problems and issues that may arise. By detecting anomalies in real-time, manufacturers can take timely action to address these issues and prevent them from becoming bigger problems, improving efficiency and reducing downtime. In addition, anomaly detection can help to identify problems that may not be immediately apparent, such as equipment wear and tear or inefficiencies in the manufacturing process. By continuously monitoring for anomalies, manufacturers can proactively address these issues and improve the overall efficiency and quality of their operations.</p>
</section> 
<section className="article-section">
            <img src={blog1} className="blog-inline-image" />
            <p>Almost like finding a needle in the haystack!!</p>
            <br></br>
          <p>Anomaly detection can be particularly challenging when dealing with large amounts of data, also known as "big data." This is because big data sets are often highly complex and may contain a large number of variables, making it difficult to identify patterns and anomalies. In addition, big data sets may contain a significant amount of noise or irrelevant data, which can further complicate the process of anomaly detection.</p>
            <br></br>
  <p style={{fontWeight: "bolder"}}>Why no code AI?</p>
<p>A no-code AI platform can be extremely useful for manufacturing companies, as it allows them to easily incorporate advanced analytics and machine learning techniques into their operations without requiring any data science expertise. With a no-code platform, users can simply select the data they want to analyze, and the platform will automatically build and run machine learning models to identify patterns and anomalies in the data.</p>
<br></br>

<p>This can be especially useful for manufacturing companies, as it allows them to easily monitor their equipment and processes for issues, and take timely action to address any problems that may arise. For example, a no-code AI platform could be used to identify equipment failures or inefficiencies in the manufacturing process, and alert the appropriate personnel to take action. This can help to reduce downtime, improve efficiency, and reduce the cost of repairs.</p>
<br></br>
<p>In addition, a no-code AI platform can help to automate many of the manual tasks associated with data analysis, such as data cleaning and preprocessing, freeing up valuable time for other activities. This makes it easier for manufacturing companies to incorporate AI into their operations, even if they don't have a dedicated data science team. Overall, a no-code AI platform can be an invaluable tool for manufacturing companies looking to improve their operations and stay competitive in a rapidly changing industry.</p>
         </section>

          <section className="article-section">
          <p>To use our no-code AI module, users simply need to select their assets and sensors, and click the "Create AI Model" button. Our software will then automatically analyze the data and identify any anomalies or unusual patterns.</p>
           <br></br>
           <img src={blog2} className="blog-inline-image" />
           <br></br>
            <br></br>
            <p>Once the model is built, users can monitor their assets in real-time and receive alerts when any anomalies are detected. This allows them to proactively address any issues before they become bigger problems, improving efficiency and reducing downtime.
              <br></br>
              Here is an example of an anomaly detected days in advance.</p>
               <br></br>

  <img src={blog3} className="blog-inline-image" />
   <br></br>
<p>Along with the reasons, that are causing the anomaly.</p>
 <br></br>
<img src={blog4} className="blog-inline-image" />
          </section>

          <section className="article-section">
             <img src={blog5} className="blog-inline-image" />
             <br></br> <br></br>
           <p>There are many benefits to using our no-code AI module for anomaly detection in manufacturing. Some of these include:</p>
   <p>Time savings: By automating the process of building and running an anomaly detection model, users can save a significant amount of time that would otherwise be spent on manual analysis.</p>
<p>Cost savings: By identifying and addressing problems early, users can save money by avoiding expensive repairs and downtime.</p>
<p>Improved efficiency: By detecting anomalies in real-time, users can take timely action to address problems, improving efficiency and reducing waste.</p>
<p>Easy to use: Our no-code interface means that users don't need any data science knowledge to take advantage of the benefits of AI.</p> <p>At MeghaAI, we are committed to making it easy for manufacturing companies to harness the power of AI to improve their operations. Our no-code AI module is just one way we are doing this, providing an easy and efficient way for users to build and run anomaly detection models, without any need for data science expertise.</p>
          <p>If you have any questions or need support with our no-code AI module, please don't hesitate to reach out to us at support@meghaai.com. Our team of experts is always here to help you get the most out of our software and improve your manufacturing operations. We look forward to hearing from you!</p>
         </section>
          
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
    <span><FaEye /> 13 views</span>
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
</div>  {/* END blog-content-card */}


{/* RECENT POSTS */}
<div className="recent-posts">
  <div className="recent-header">
  <h3>Recent Posts</h3>
 <button className="see-all"><Link to="/allposts">See All</Link></button>
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

