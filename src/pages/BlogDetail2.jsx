import blog1 from "../assets/blog/B21.avif";
import blog2 from "../assets/blog/B22.avif";
import blog3 from "../assets/blog/B23.avif";
import blog4 from "../assets/blog/B24.avif";
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
          {/* Sections */}
  <section className="article-section">
            <h2>3D Digital Twins and AI for Predictive Analytics in Industry: Trends and Challenges</h2>
            <img src={blog1} alt="3D Digital Twins and AI" className="article-image" />
   <p> A 3D digital twin is a digital representation of a physical asset or system that is created using 3D modelling and simulation technologies. In the context of Industry 4.0, a 3D digital twin can be used to optimize and improve the performance of manufacturing processes, supply chains, and other industrial operations.</p>

  <p>One of the main benefits of using a 3D digital twin is that it allows companies to test and optimize different scenarios and configurations virtually, without the need for physical prototypes or costly changes to the physical asset or system. This can help reduce the time and cost of developing and implementing new solutions, and can also improve the safety and efficiency of industrial operations.</p>
  
<p>For example, a 3D digital twin of a production line can be used to test and optimize different layouts, materials, and equipment configurations to improve the efficiency and productivity of the line. A 3D digital twin of a supply chain can be used to analyze and optimize the flow of materials and goods through the network, identifying bottlenecks and inefficiencies and proposing solutions to improve performance.</p>
</section>
<section className="article-section">
          
            <img src={blog2} alt="3D Digital Twins and AI" className="article-image" />
        
            <p> In Industry 4.0, 3D digital twins can be used in conjunction with other technologies such as the Internet of Things (IoT) and artificial intelligence (AI) to create a more connected, responsive, and intelligent industrial ecosystem. This can help companies achieve greater operational efficiency, agility, and competitiveness</p>
            
  <p>3D digital twins combined with artificial intelligence (AI) can be used to do predictive analytics of plant physical assets in several ways. Here are a few examples:</p>
<ol className="blog-list">
    <li>
      <strong>Predictive maintenance:</strong> A 3D digital twin of a plant's physical assets, combined with data from sensors and other IoT devices, can be used to analyze and predict when maintenance is needed for specific assets. This can help optimize maintenance schedules, reduce downtime, and extend the lifetime of the assets.
    </li>

    <li>
      <strong>Performance optimization:</strong> A 3D digital twin can be used to analyze the performance of a plant's physical assets and identify potential bottlenecks or inefficiencies. AI algorithms can be used to analyze the data and suggest changes or improvements to optimize performance.
    </li>

    <li>
      <strong>Develop incident response plans:</strong> Develop plans for responding to cybersecurity incidents, including steps to contain the incident, restore operations, and investigate the cause of the incident.
    </li>

    <li>
      <strong>Quality control:</strong> A 3D digital twin can be used to simulate the manufacturing process and identify potential quality issues before they occur. AI algorithms can be used to analyze the data and suggest changes or improvements to improve quality control.
    </li>
      </ol>
      <p>Overall, the use of 3D digital twins combined with AI can help companies optimize the performance and efficiency of their plant physical assets, reduce downtime and maintenance costs, and improve quality control and risk management.</p>
<p>There are several challenges that companies may face when using 3D digital twins for manufacturing:</p>
<ol className="blog-list">
    <li>
      <strong>Data quality and availability:</strong> To create an accurate and useful 3D digital twin, companies need access to high-quality data about the physical asset or system being modelled. This may require the installation of sensors and other IoT devices to collect real-time data, as well as the development of robust data management and integration systems to process and analyze the data.
    </li>

    <li>
      <strong>Model complexity:</strong> Depending on the size and complexity of the physical asset or system being modelled, creating a 3D digital twin may be a time-consuming and resource-intensive process. It may also require specialized skills and expertise in areas such as 3D modelling, simulation, and data analytics.
    </li>

    <li>
      <strong>Integration with existing systems:</strong> To be effective, a 3D digital twin must be integrated with the company's existing systems and processes. This may require significant effort and resources to ensure that the 3D digital twin is aligned with the company's data, systems, and business goals.
    </li>

    <li>
      <strong>Updating and maintaining the 3D digital twin:</strong> As the physical asset or system changes over time, the 3D digital twin must be updated and maintained to reflect these changes. This may require ongoing efforts to collect and analyze data and update the 3D digital twin as needed.
    </li>
     <li>
      <strong>Cost:</strong> Developing and implementing a 3D digital twin can be a costly endeavour, especially for companies that are new to this technology. Companies may need to invest in hardware, software, and other resources to create and maintain a 3D digital twin, which may be a significant expense.
    </li>
      </ol>
       </section>
  <section className="article-section">
            <img src={blog3} alt="3D Digital Twin Benefits" className="article-image" />

    
           <p>Overall, while 3D digital twins can offer significant benefits for manufacturing operations, companies need to be prepared to address these challenges to make the most of this technology.</p>
        
<p>Megha AI platform offers complete IIT4.0 platform which can integrate data from machines, sensors, PLCs, SCADA, MES, ERP and AI generated Insights overlayed with 3D model to give a complete reality of the physical system. The intelligent 3D model, uses innovative and unique technology to optimize the data and when combined with cloud-based rendering enables high speed data transition and rendering even on devices with low memory including low end mobile devices. The platform offers easy corelation of this model with plant assets along with AI model generated Insights for these assets optimize the running of plants operations.</p></section>
          <section className="article-section">
            <h3>How MeghaAI can help?</h3>
            <img src={blog4} alt="MeghaAI 3D Digital Twin" className="article-image" />
        
            <p>MeghaAI is a revolutionary web application that allows companies to easily create and maintain 3D digital twins of their physical assets and systems. Using a cloud-based, no-code approach, MeghaAI makes it easy for companies to collect and analyze high-quality data, create and update complex 3D models, and integrate their digital twin with existing systems and processes. With MeghaAI, companies can improve the efficiency, effectiveness, and profitability of their operations by using digital twin technology at a low cost. </p>
        
            <p>MeghaAI provides a 3D model integration module that addresses all the challenges faced by companies when using 3D digital twins for manufacturing, such as data quality and availability, model complexity, integration with existing systems, and updating and maintaining the 3D digital twin. With MeghaAI, companies can easily benefit from the powerful insights and automation capabilities of digital twin technology without the need for extensive investment and resources.</p>

<p>The below example demonstrates the integration of model with real time data Insights.
<a href="https://d3up3ob7jq5eed.cloudfront.net/">Megha AI 3D Twin</a><br></br>
If you have any questions or need support with our 3D Digital Twin module , please don't hesitate to reach out to us at support@meghaai.com. Our team of experts is always here to help you get the most out of our software and improve your manufacturing operations. We look forward to hearing from you!</p>
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

