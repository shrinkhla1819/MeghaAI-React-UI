import blog1 from "../assets/blog/B51.avif";
import blog2 from "../assets/blog/B52.avif";
import blog3 from "../assets/blog/B53.avif";
import blog4 from "../assets/blog/B54.avif";
import blog5 from "../assets/blog/B55.avif";
import blog6 from "../assets/blog/B56.avif";
import blog7 from "../assets/blog/B57.png";


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
    { id: "1", title: "Why RCA?" },
    { id: "2", title: "How MeghaAI helps?" },
    { id: "3", title: "Training an AI model " },
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
        ·Dec 26, 2022 · 4 min read
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
    <p>Dec 26, 2022</p>
  </div>
</motion.div>
<div className="blog-main-container">
                    {/* Sections */}
            <section className="article-section">
                      <h1>Maximizing Efficiency and Quality in Manufacturing: How MeghaAI's Data Lake and RCA Tools Can Help</h1>
                      <h4>Why RCA?</h4>    
  <p>Root cause analysis (RCA) is an important tool in manufacturing because it helps identify the underlying cause of a problem or issue and recommend corrective actions to prevent it from occurring again. By performing RCA, manufacturers can improve the efficiency and quality of their processes, reduce waste and downtime, and increase customer satisfaction.</p>
<h4>MeghaAI's Data lake</h4>
<p>MeghaAI is a powerful tool for performing root cause analysis (RCA) on manufacturing data. With its centralized data lake, you can store all your OT and IT data at any scale, making it easy to search for information and analyze data from multiple sources.</p>
<p>Here is how MeghaAI creates a new manufacturing data lake using the concepts of unified namespace:</p>
 <img src={blog1} className="blog-inline-image" />
<br></br>
<p>1. Determine your data needs: The first step in creating a manufacturing data lake is to determine what types of data you need to store and analyze. This may include data from OT (Operational Technology) systems such as sensors, PLCs, and SCADA systems, as well as IT (Information Technology) systems such as MES (Manufacturing Execution System) and ERP (Enterprise Resource Planning).</p>

<p>2. Collect and organize the data: Once you have identified the types of data you need to store, you can start collecting and organizing it. This may involve setting up data pipelines to extract data from various sources and transform it into a consistent format.

</p>
<p>3. Create a unified namespace: A unified namespace is a logical structure that allows you to access and search for data across multiple sources using a single name. This can be particularly useful for manufacturing data, as it allows you to easily search for and analyze data from different sources using simple queries.</p>
<p>4. Store the data: Once you have collected and organized your data, you can store it in your manufacturing data lake. This may involve setting up a distributed storage system such as Hadoop or a cloud-based storage system like Amazon S3.

</p>
<p>5. Analyze and visualize the data: With your data stored in a centralized repository, you can use tools such as MeghaAI or other visualization and analytics tools to analyze and visualize the data. This can help you identify patterns and trends, perform root cause analysis (RCA), and improve the efficiency and quality of your manufacturing processes.</p>
<br></br>
<p>By following these steps, MeghaAI creates a new manufacturing data lake using a unified namespace to store, analyze, and visualize data from multiple sources. This can help you make better data-driven decisions and improve the efficiency and quality of your manufacturing processes. </p>

<h4>RCA Use case</h4><br></br>

<p>Let us take an example of a typical manufacturing scenario. Quality team reports an event of defective quality during the week of October. The maintenance team jumps into action to understand what has happened. MeghaAI comes to the rescue.</p>

          <h4>How MeghaAI helps?</h4><br></br>
          
           <p>One of the key features of MeghaAI is its visualization tools, which allows you to view data in a timeline format. This can be particularly useful when performing RCA, as you can focus on a specific time period and view data from multiple dimensions, such as sensor data, MES data, and shift data. By analyzing data from these different sources, one can identify patterns and trends that may indicate the root cause of a problem.</p><br></br>
           <img src={blog2} className="blog-inline-image" /><br></br>
            <br></br>
           <p>In the above image, the maintenance team were able to combine the quality data with the machine data into a single dashboard. They now notice a series of red dots (indicating bad parts) on the timeline visualization, you can zoom in on that time period to see what was happening with the sensor data,raw materials, and other factors that may have contributed to the production of bad parts. We can look at the materials that were used during the exact time along with details like who was the supplier, the product they were manufacturing etc. Now on the same dashboard, you will notice OT data from machines.</p>
            <img src={blog3} className="blog-inline-image" />
            <br></br>
  <p>The above data indicates that the OT data values took a sudden dip during the time when the quality went bad. What was the cause of this dip? Were there any special instructions to handle this material? Who were the team that was on this shift? Was all this material was supplied by the same manufacturer? How much more raw material is available in our inventory?</p>
<p>All of this data can be made available in MeghaAI's datalake. Making it available on the finger tips in the need of the hour.</p>

<p>In addition to helping with RCA, MeghaAI's asset health models can be used to predict failures and prevent them from occurring. These models are trained on past data to identify patterns that may lead to the production of bad parts. By alerting operators and providing insights on corrective actions in real-time, asset health can help improve the overall efficiency and quality of your manufacturing processes.</p>
         
            <h4>Training an AI model to prevent events like this in future</h4><br></br>
           
        <p>MeghaAI's no code interface can help with anomaly detection by providing an easy-to-use interface for data analysis and visualization. Anomaly detection involves identifying patterns or deviations from normal behavior in data, which can indicate potential problems or issues. By using MeghaAI's no code interface, you can quickly train an AI model to learn from an event like this to identify the patterns. Next time, the application sees patterns like this, it alerts us hours or even days in advance.</p>
           <br></br>
           <img src={blog4} className="blog-inline-image" /><br></br><br></br>
             <p>An example of anomaly detected is shown below.</p><br></br>
<img src={blog5} className="blog-inline-image" />
              <br></br>
<p>Along with finding an anomaly, MeghaAI's Asset Health module also indicates the leading causes of the failure. This helps us take an appropriate action, like scheduling a maintenance etc.</p>
<img src={blog6} className="blog-inline-image" /><br></br><br></br>
<p>Histogram representation of the data, helps the team understand the data better and trust the system.</p>
<img src={blog7} className="blog-inline-image" /><br></br><br></br>
<p>Overall, MeghaAI is a valuable tool for performing RCA and improving the quality of your manufacturing processes. By providing easy access to data from multiple sources and powerful visualization and prediction tools, it can help you identify and solve problems quickly and efficiently.</p>
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
</div>

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


/* 🔥 Section Component */
function PremiumSection({ id, direction, title, image, children }) {
  const isLeft = direction === "left";

  return (
    <motion.section
  id={id}
  className={`premium-section ${isLeft ? "row-normal" : "row-reverse"}`}
  initial={{ opacity: 0, x: isLeft ? -150 : 150 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.2 }}
>
      {image && (
  <div className="section-image">
    <img src={image} alt={title} />
  </div>
)}


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

