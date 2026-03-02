import blog1 from "../assets/blog/B61.avif";
import blog2 from "../assets/blog/B62.avif";
import blog3 from "../assets/blog/B63.webp";
import blog4 from "../assets/blog/B64.webp";
import blog5 from "../assets/blog/B65.webp";
import blog7 from "../assets/blog/RE.B6.avif";
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
    { id: "1", title: "Start" },
    { id: "2", title: "Energy Management Software" },
    { id: "3", title: "Setting energy targets " },
    { id: "4", title: "Encouraging employee involvement " },
    { id: "5", title: "Data analytics " },
    { id: "6", title: "How MeghaAI can help?" }
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
         · Dec 26, 2022 · 6 min read
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


          {/* Sections */}
        <div className="blog-main-container">
              
            <section className="article-section">
  <h1>How Manufacturing companies can save energy using IOT data?</h1>
 <img src={blog7} alt="Energy IoT" className="blog-inline-image" /><br></br><br></br>
            <p>Energy efficiency is becoming increasingly important for manufacturing companies, as they look to reduce costs and improve their environmental impact. There are several strategies that manufacturing companies can use to generate insights and save energy.</p>
            <h2>Energy Audit
</h2>
<img src={blog1} alt="Energy IoT" className="blog-inline-image" />
<br></br><br></br>
<p>An energy audit is a thorough analysis of a company's energy use and potential for energy savings. An energy audit can identify opportunities for energy efficiency improvements, such as upgrading equipment or adopting more energy-efficient processes.</p>
<p>1. Internet of Things (IoT) devices can be used to collect data that can be used to conduct an energy audit and identify opportunities for energy efficiency improvements. Here are some specific ways that IoT data can be used in an energy audit:</p>
<p>2. Monitoring energy use in real-time: IoT devices can be installed to monitor energy use in real-time, allowing companies to track their energy use and identify patterns and trends.</p>
<p>3. Identifying energy-intensive equipment: By installing IoT devices on equipment, companies can track the energy use of specific pieces of equipment and identify which ones are particularly energy-intensive.</p>
<p>4. Identifying opportunities for automation: IoT data can be used to identify opportunities for automating energy-saving processes. For example, IoT data can be used to determine when equipment is not being used and automate the process of shutting it off to save energy.</p>
<p>5. Identifying opportunities for process improvements: IoT data can be used to identify opportunities for improving energy-intensive processes. For example, a company may find that a certain production process is using significantly more energy than other processes. By analyzing IoT data, the company can identify opportunities to optimize the process and improve its energy efficiency.</p>
</section>
<section className="article-section">
          <img src={blog2} alt="Energy IoT" className="blog-inline-image" /><br></br><br></br>
           <p>Another strategy is to implement energy management software. Energy management software can help a company track and analyze its energy use in real-time, identify areas of waste, and identify opportunities for energy savings.</p>
           <p>MeghaAI is a cloud-based platform that connects manufacturing data from IoT devices into the cloud and enables the generation of analytics using the data. As an energy management software, MeghaAI can help manufacturing companies track and analyze their energy use in real-time, identify areas of waste, and identify opportunities for energy savings. By collecting and analyzing data from IoT devices, MeghaAI can provide valuable insights into a company's energy use and help identify specific areas where energy efficiency improvements can be made. Overall, MeghaAI is a powerful tool for manufacturing companies looking to improve their energy efficiency and reduce costs.</p>
           </section>
           <section className="article-section">
            <img src={blog3} alt="Energy IoT" className="blog-inline-image" />
            <br></br><br></br>
         <p>Setting energy targets and tracking progress towards achieving them can also be helpful for manufacturing companies looking to save energy. By setting specific goals, companies can stay focused on energy efficiency and identify opportunities for improvement.</p>
<p>Here are some specific ways that manufacturing companies can set and track energy targets:</p>
           <p>1. Set specific, measurable, attainable, relevant, and time-bound (SMART) energy targets: To be effective, energy targets should be specific, measurable, attainable, relevant, and time-bound (SMART). For example, a company may set a target to reduce energy use by 10% over the next year by upgrading equipment or adopting more energy-efficient processes.</p>
<p>2. Use data to inform target setting: Manufacturing companies can use data, such as energy usage data collected through IoT devices or energy audits, to inform their target setting. By analyzing data, companies can identify patterns and trends in their energy use and set targets that are based on realistic opportunities for improvement.</p>
<p>3. Track progress regularly: It is important for companies to track their progress towards achieving energy targets regularly to ensure that they are on track to meet their goals. This can be done through the use of energy management software or through manual tracking of energy use data.</p>
<p>4. Identify and address any challenges or barriers: As companies work towards achieving their energy targets, they may encounter challenges or barriers that prevent them from making progress. It is important for companies to identify and address these challenges or barriers in order to stay on track towards achieving their targets.

</p></section> <section className="article-section">
            <img src={blog4} alt="Energy IoT" className="blog-inline-image" /><br></br><br></br>
        
           <p>Employee involvement can be an important strategy for manufacturing companies looking to save energy. Here are some specific ways that companies can involve employees in energy-saving efforts:</p>

<p>1. Encourage employees to suggest energy-saving ideas: Companies can encourage employees to share their ideas for energy-saving initiatives. Employees may have unique insights into the company's energy use and may be able to suggest ideas that may not have been identified otherwise.</p>
<p>2. Involve employees in implementing energy-saving initiatives: Once energy-saving ideas have been identified, companies can involve employees in implementing those ideas. This can help to ensure that the initiatives are implemented effectively and that employees are invested in the success of the initiatives.</p>
<p>3. Educate employees about energy-saving practices: Companies can educate employees about energy-saving practices, such as turning off equipment when it is not in use or using energy-efficient lighting. This can help to ensure that employees are aware of the impact of their actions on the company's energy use and are more likely to adopt energy-saving practices.</p>
<p>4. Recognize and reward employees for their efforts: Companies can recognize and reward employees for their efforts to save energy. This can help to motivate employees to continue to prioritize energy efficiency and can also help to create a culture of energy conservation within the company.</p></section>
   <section className="article-section">
              <img src={blog5} alt="Energy IoT" className="blog-inline-image" />
          <br></br><br></br>
           <p>Data analytics can be a powerful tool for manufacturing companies looking to save energy by helping them identify patterns and trends in their energy use and identify opportunities for energy efficiency improvements. Here are some specific ways that data analytics can be used to save energy in a manufacturing setting:</p>
 <p>1. Identifying times of peak energy use: By analyzing energy data over time, a company can identify times when energy use is highest and consider ways to reduce energy use during those times. For example, a company may find that energy use is highest during the afternoon when production is at its peak. The company could then consider ways to shift energy-intensive processes to other times of the day to reduce energy use during peak times.</p>
 <p>2. Identifying energy-intensive equipment or processes: By analyzing energy data, a company can identify equipment or processes that are particularly energy-intensive and consider ways to improve their energy efficiency. For example, a company may find that a certain production line is using significantly more energy than others. The company could then consider upgrading that production line with more energy-efficient equipment or adopting more energy-efficient processes.</p>
 <p>3. Identifying opportunities for energy-saving automation: Data analytics can help a company identify opportunities for automating energy-saving processes. For example, a company may find that certain processes can be automated to shut off equipment when it is not in use, reducing energy waste.</p>
 <p>4. Monitoring the effectiveness of energy-saving efforts: By analyzing energy data over time, a company can monitor the effectiveness of its energy-saving efforts and identify areas where additional efforts may be needed..</p>
 <p>Finally, manufacturing companies may want to consider using renewable energy sources, such as solar or wind power, to reduce their reliance on fossil fuels and decrease their carbon footprint.</p></section>
          <section className="article-section">
             <img src={blog7} alt="Energy IoT" className="blog-inline-image" /><br></br><br></br>
           <p>MeghaAI is a cloud-based platform that connects manufacturing data from IoT devices into the cloud and enables the generation of analytics using the data. As an energy management software, MeghaAI can help manufacturing companies track and analyze their energy use in real-time, identify areas of waste, and identify opportunities for energy savings. By collecting and analyzing data from IoT devices, MeghaAI can provide valuable insights into a company's energy use and help identify specific areas where energy efficiency improvements can be made.</p>
<p>In addition to using MeghaAI to track and analyze energy use, manufacturing companies can also use the platform to set energy targets and track progress towards achieving those targets. By setting specific, measurable, attainable, relevant, and time-bound (SMART) energy targets and tracking progress regularly, companies can stay focused on energy efficiency and identify opportunities for improvement.</p>

 <p>Furthermore, involving employees in energy-saving initiatives and educating them about energy-saving practices can also be effective strategies for manufacturing companies looking to reduce their energy usage. By involving employees in energy-saving efforts and creating a culture of energy conservation within the company, manufacturing companies can tap into their unique insights and ensure that energy-saving initiatives are implemented effectively.
Overall, MeghaAI can be a powerful tool for manufacturing companies looking to reduce their energy usage by helping them track and analyze energy use, set energy targets, and involve employees in energy-saving initiatives. By implementing a combination of these strategies, manufacturing companies can improve their energy efficiency, reduce costs, and protect the environment.</p></section>
          
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

