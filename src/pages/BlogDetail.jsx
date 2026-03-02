import blog1 from "../assets/blog/B11.avif";
import blog2 from "../assets/blog/B12.avif";
import blog3 from "../assets/blog/B13.avif";
import blog4 from "../assets/blog/B14.avif";
import blog5 from "../assets/blog/B15.avif";
import blog6 from "../assets/blog/B16.avif";
import blog7 from "../assets/blog/B17.avif";
import { useContext } from "react";
import { SearchContext } from "../pages/SearchContext";
import { useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import blogImg1 from "../assets/blog/B11.avif";
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
    { id: "Start", title: "Start" },
    { id: "Security", title: "How to deal with Cyber Security issues?" },
    { id: "Supply chain", title: "How to deal with Supply chain issues?" },
    { id: "Shortage", title: "How to deal with Skill Shortage?" },
    { id: "regulations", title: "How to deal with Environmental Regulations?" },
    { id: "customers", title: "How to deal with Changing Customer preferences?" },
    { id: "about", title: "About MeghaAI" }
  ];
  const [recentPosts, setRecentPosts] = useState([
  {
    id: 1,
    title: "Digital Twins in Industry",
    image: blogImg1,
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
    marginTop: "35px",   // space below navbar
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
      marginTop: "15px"
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
        · Mar 26, 2023 · 6 min read
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
    <p>March 26, 2023</p>
    
  </div>
</motion.div>

<div className="blog-content-card">
      <section className="article-section">
  
          <h2>Five Most Dangerous Trends Facing Manufacturers</h2>
          <img src={blog1} alt="Manufacturing Trends" className="article-image" /><br></br>
  <ol className="blog-list">
    <li>
      <strong>Cybersecurity threats:</strong> As manufacturers become more connected and reliant on technology, they are increasingly vulnerable to cyber attacks. The rise of the Internet of Things (IoT) and other connected technologies has created a larger attack surface for hackers to exploit, and the consequences of a successful cyber attack can be catastrophic.
    </li>
    <li>
      <strong>Supply chain disruptions:</strong> The COVID-19 pandemic has highlighted the risks associated with global supply chains. Manufacturers are exposed to disruptions from natural disasters, geopolitical tensions, and other factors that can interrupt the flow of materials and components, leading to production delays and lost revenue.
    </li>
    <li>
      <strong>Skills shortage:</strong>The manufacturing industry is facing a skills shortage as older workers retire and younger workers pursue other careers. This has led to a shortage of skilled workers in critical areas such as engineering and production, making it difficult for manufacturers to keep up with demand and maintain quality standards.
    </li>
    <li>
      <strong>Environmental regulations:</strong> Manufacturers are facing increasing pressure to reduce their environmental impact and comply with regulations related to emissions, waste disposal, and other environmental concerns. Failure to comply can result in fines, damage to reputation, and loss of business.
    </li>
    <li>
      <strong>Changing consumer preferences:</strong> Consumers are increasingly demanding products that are environmentally friendly, ethically sourced, and produced with sustainable practices. Manufacturers that fail to adapt to these changing preferences risk losing market share to competitors that can meet these demands.
    </li>
  </ol>
</section>

           <section className="article-section">
  
          <h2>How to deal with Cyber Security issues? </h2>
          <img src={blog2} alt="Cyber Security Issues" className="article-image" />
    
           <ol className="blog-list">
    <p>Dealing with cybersecurity threats is a complex and ongoing process that requires a combination of technical and organizational measures. Here are some steps that manufacturers can take to protect themselves from cybersecurity threats:</p>
  

    <li>
      <strong>Implement technical controls:</strong> Implement technical controls such as firewalls, intrusion detection and prevention systems, antivirus software, and encryption to protect your systems and data from unauthorized access and malware
    </li>
    <li>
      <strong>Train employees:</strong> Educate employees on cybersecurity best practices, such as creating strong passwords, avoiding phishing emails, and reporting suspicious activity.
    </li>
    <li>
      <strong>Develop incident response plans:</strong> Develop plans for responding to cybersecurity incidents, including steps to contain the incident, restore operations, and investigate the cause of the incident.
    </li>
    <li>
      <strong>Conduct regular testing and assessments:</strong>Regularly test your systems and processes to identify vulnerabilities and areas for improvement. This can include penetration testing, vulnerability scanning, and security assessments.
    </li>
     <li>
      <strong>Stay informed:</strong> Keep up-to-date with the latest cybersecurity threats and trends by subscribing to industry newsletters and participating in cybersecurity communities.
    </li>
     <li>
      <strong>Engage with third-party vendors:</strong> If you work with third-party vendors, ensure they have robust cybersecurity measures in place and consider including cybersecurity requirements in your contracts with them.
    </li>
  </ol>
          </section>
          <section className="article-section">
  
          <h2>How to deal with Supply chain issues?</h2>
          <img src={blog3} alt="Supply Chain Issues" className="article-image" />
            <ol className="blog-list">
     <p>Dealing with supply chain disruptions can be challenging, but there are several steps manufacturers can take to mitigate the impact of these disruptions:</p>
  

    <li>
      <strong>Diversify suppliers:</strong>Relying on a single supplier can increase your vulnerability to supply chain disruptions. Consider diversifying your supplier base to reduce this risk.
    </li>
    <li>
      <strong>Develop contingency plans:</strong> Develop contingency plans that can be implemented quickly in the event of a disruption. These plans should include alternative suppliers, transportation methods, and production locations.
    </li>
    <li>
      <strong>Improve communication:</strong>Communication is critical during a supply chain disruption. Maintain open lines of communication with suppliers, customers, and logistics providers to stay informed about the situation and to coordinate responses.
    </li>
    <li>
      <strong>Monitor risks:</strong> Monitor risks and potential disruptions by tracking factors such as weather, political instability, and transportation disruptions.
    </li>
     <li>
      <strong>Use technology</strong>Use technology to improve supply chain visibility and to identify potential disruptions early. This can include tools such as predictive analytics, real-time tracking, and supply chain management software.
    </li>
     <li>
      <strong>Maintain inventory buffers:</strong> Maintain inventory buffers of critical materials and components to reduce the impact of supply chain disruptions. However, be mindful of the cost implications of carrying excess inventory.
    </li>
    <li>
      <strong>Build resilience:</strong> Build resilience into your supply chain by identifying and addressing vulnerabilities, developing risk management strategies, and implementing continuous improvement initiatives.
    </li>
  </ol>
          </section>

          <section className="article-section">
  
          <h1>How to deal with Skill Shortage?</h1>
          <img src={blog4} alt="Skill Shortage" className="article-image" />
               <ol className="blog-list">
     <p>Dealing with a skills shortage in manufacturing requires a multifaceted approach. Here are some steps that manufacturers can take to address this issue:</p>
  

    <li>
      <strong>Develop a talent strategy:</strong> Develop a talent strategy that aligns with your business objectives and addresses your skills gaps. This strategy should identify the skills and competencies you need to succeed and outline the steps you will take to acquire or develop these skills.
    </li>

    <li>
      <strong>Recruit strategically:</strong> Develop a targeted recruitment strategy that focuses on attracting candidates with the skills and experience you need. Consider reaching out to schools and training programs to identify potential candidates and create partnerships with local workforce development organizations.
    </li>

    <li>
      <strong>Upskill existing employees: </strong>Upskill existing employees by providing training and development opportunities that enable them to acquire the skills needed for critical roles within the organization.
    </li>

    <li>
      <strong>Offer competitive compensation:</strong> Offer competitive compensation packages that are aligned with industry standards to attract and retain top talent.
    </li>
     <li>
      <strong>Leverage technology:</strong> Leverage technology to automate processes and improve productivity, enabling your workforce to focus on higher-value tasks.
    </li>
     <li>
      <strong>Collaborate with industry associations:</strong>Collaborate with industry associations to identify and address common workforce challenges and to share best practices for recruiting and retaining talent.
    </li>
  </ol>
           </section>
          <section className="article-section">
  
          <h1>How to deal with Environmental Regulations?</h1>
          <img src={blog5} alt="Environmental Regulations" className="article-image" />
               <ol className="blog-list">
     <p>Environmental regulations are an important consideration for manufacturers, as they can have significant implications for their operations and bottom line. Here are some steps that manufacturers can take to deal with environmental regulations:</p>
  

    <li>
      <strong>Stay informed:</strong> Stay informed about current and upcoming environmental regulations that may impact your business. This can be done through industry associations, government websites, and environmental consulting firms.
    </li>

    <li>
      <strong>Conduct a compliance assessment:</strong> Conduct a compliance assessment to identify areas where your organization may not be in compliance with environmental regulations. This can be done internally or with the help of a third-party consultant.
    </li>

    <li>
      <strong>Develop a compliance strategy:</strong> Develop a compliance strategy that includes specific actions to address areas of noncompliance, such as updating equipment or processes, implementing new procedures, or acquiring necessary permits.
    </li>

    <li>
      <strong>Engage with regulators:</strong> Engage with regulators to understand their expectations and to seek guidance on compliance issues. This can help to establish a positive working relationship and to identify opportunities for collaboration.
    </li>
     <li>
      <strong>Invest in environmental management systems:</strong> Invest in environmental management systems that enable you to monitor and manage your environmental performance, including tracking emissions, waste generation, and water use.
    </li>
     <li>
      <strong>Train employees:</strong> Train employees on environmental regulations and best practices, including how to identify and report environmental concerns and how to properly handle hazardous materials.
    </li>
    <li>
      <strong>Measure and report environmental performance:</strong> Measure and report your environmental performance to stakeholders, including customers, investors, and regulators, to demonstrate your commitment to environmental stewardship and to build trust.
    </li>
    </ol>
           </section>
  <section className="article-section">
  
          <h1>How to deal with Changing Customer preferences?</h1>
          <img src={blog6} alt="Changing Customer preferences" className="article-image" />
          <br></br>
                  <ol className="blog-list">
     <p>Consumer preferences can change rapidly in today's fast-paced marketplace. Here are some steps that manufacturers can take to deal with changing consumer preferences:</p>
  
    <br></br>
    <li>
      <strong>Conduct market research:</strong> Conduct market research to understand changing consumer preferences, including trends in product design, functionality, and packaging. This can help manufacturers to stay ahead of the curve and to identify new opportunities.
    </li>

    <li>
      <strong>Be agile:</strong> Be agile and flexible in responding to changing consumer preferences. This may involve adjusting product designs, formulations, or packaging, or even launching new products to meet emerging trends.
    </li>

    <li>
      <strong>Listen to feedback:</strong> Listen to customer feedback through surveys, focus groups, and social media. This can help manufacturers to understand what customers want and to identify areas for improvement.
    </li>

    <li>
      <strong>Leverage technology:</strong> Leverage technology to gather and analyze data on consumer behavior and preferences. This can include tools such as predictive analytics, social media monitoring, and customer relationship management software.
    </li>
     <li>
      <strong>Collaborate with suppliers:</strong> Collaborate with suppliers to identify new materials or ingredients that can be used to create products that align with changing consumer preferences.
    </li>
     <li>
      <strong>Emphasize sustainability:</strong> Emphasize sustainability in product design and manufacturing processes, as consumers are increasingly interested in environmentally friendly products and practices.
    </li>
    <li>
      <strong>Build a strong brand:</strong> Build a strong brand that resonates with customers and that is flexible enough to evolve with changing consumer preferences. This can include investing in marketing and advertising, building a strong online presence, and cultivating a loyal customer base.
    </li>
    </ol>
           </section>
              <section className="article-section">
              <h1>How to deal with Changing Customer preferences?</h1>
          <img src={blog7} alt="Changing Customer preferences" className="article-image" />
          
          <p>Startups like MeghaAI can provide valuable services to manufacturing companies by leveraging advanced technologies such as AI and machine learning to analyze data and identify trends and patterns. By using these technologies, manufacturing companies can make more informed decisions, improve operational efficiency, and reduce costs.</p>

 <p>MeghaAI's approach of analyzing both IT and OT data is particularly valuable, as it can help manufacturers to gain a more comprehensive view of their operations and identify opportunities for improvement across the entire value chain. This approach can also help manufacturers to address a range of challenges, including supply chain disruptions, skills shortages, environmental regulations, and changing consumer preferences.</p>

<p>Contact us at <a href="mailto:support@meghaai.com">support@meghaai.com</a> if you need a free consulting on the above topics and also on  how we can help you find the optimization you are looking for in your manufacturing.</p>
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
    <span><FaEye /> 62 views</span>
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

