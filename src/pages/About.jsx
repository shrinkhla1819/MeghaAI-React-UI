import { useState } from "react";
import "../styles/about.css";
import { FaLinkedin, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import PartnerImg from "../assets/miscellaneous/PartnerImg.jpeg";

import person1 from "../assets/team/person1.jpeg";
import person2 from "../assets/team/person2.jpeg";
import person3 from "../assets/team/person3.jpeg";
import person4 from "../assets/team/person4.jpeg";
import person5 from "../assets/team/person5.jpeg";
import person6 from "../assets/team/person6.jpeg";
import aws from "../assets/home/aws.png";
import microsoft from "../assets/home/microsoft.png";
import base from "../assets/home/base.png";
import nvidia from "../assets/home/nvidia.png";
import thub from "../assets/home/thub.png";

import a1 from "../assets/miscellaneous/a1.jpeg";
import a2 from "../assets/miscellaneous/a2.jpeg";
import a3 from "../assets/miscellaneous/a3.jpeg";

function About() {
  const [selectedMember, setSelectedMember] = useState(null);

  /* ============================= */
  /* TOP INFO CARDS */
  /* ============================= */

  const infoCards = [
    {
      title: "Vision",
      description:
        "To be the leading enabler of innovation, empowering manufacturers to thrive in a world of continuous operations and complex challenges.",
      image: a1,
    },
    {
      title: "Mission",
      description:
        "Empower manufacturers to excel in the complex world of continuous operations using AI-driven technologies.",
      image: a2,
    },
    {
      title: "Goals",
      description:
        "To become an invaluable ally for manufacturers in optimizing plant operations and driving operational excellence.",
      image: a3,
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
      },
    }),
  };

  /* ============================= */
  /* TEAM DATA */
  /* ============================= */

  const team = [
    {
      id: 1,
      name: "Krishan Kumar Meghani",
      role: "CEO",
      image: person1,
      description: "Krishan has 25years of enterprise product software development experience. He holds master degree from IIT KGP and Bachelors degree from NIT Raipur. He has worked in the domain of power plants, chemical plants, oil ,gas and marine from design to construction to the operations need of the plants . He has closely worked large EPCs and plant owners and operator enterprises for their digital journey and business transformation. He has led globally various AI ML initiatives as part of his experience and have filed six patents under his name.",
      linkedin: "https://www.linkedin.com/in/krishan-meghani-885702a/",
    },
    {
      id: 2,
      name: "Lakkaraju Ramesh",
      role: "Head of Customer Success",
      image: person2,
      description: "Ramesh has more than 20+ years of Industry experience in software development across various industries covering chemical, power, oil & gas, marine, process and discrete manufacturing He has created and managed various large offshore teams(100+) and successfully lead complex projects. He has lead teams on various innovative solutions. He has managed global stakeholders from various countries",
      linkedin: "https://www.linkedin.com/in/rameshlakkaraju/",
    },
    {
      id: 3,
      name: "Luther Walke",
      role: "Head Product Management",
      image: person3,
      description: "Luther has 30 years industry experience. As director of product management, he oversaw the critical adoption and growth phases of Hexagon PPM’s flagship product, Smart 3D. He has collaborated with clients worldwide to perceive their business needs and determine how best to apply technology to address those needs in a profound way. Luther is an alumnus of Georgia Institute of technology and holds a patent in automated cable routing",
      linkedin: "https://www.linkedin.com/in/luther-walke-92b89125/",
    },
    {
      id: 4,
      name: "Ajay Jain",
      role: "Advisory Member",
      image: person4,
      description: "Ajay Jain has 25+ years of Software Industry Experience. He holds Master Degree in Business Administration and Management from ISB. Accomplished global leader with a history of success in start-ups and legacy organisations, transforming, generating savings, improving quality, increasing revenues and profitability, and strengthening operational effectiveness. Track record in creating and growing businesses from the ground up, turning around and transforming struggling organizations, and building and retaining high-performance teams. Excellent interpersonal and relationship management skills with all intermediaries, including C-level customers and all stakeholders.",
      linkedin: "https://www.linkedin.com/in/jainajaykumar/",
    },
    {
      id: 5,
      name: "Mihir Dash",
      role: "Advisory Member",
      image: person5,
      description: "Mihir has more than twenty five years of work experience in Software Development. A Program Manager, IT Consultant and a Delivery Leader dedicated to Program/Project Management, Team Leadership, IT Strategy and Planning, Software Development & Estimation, and Process Reengineering. Successfully delivered several business-critical complex application systems for multiple clients. He has worked for various GE projects during his TCS stint. Mihir holds a Mechanical Engineering degree from State Engineering College (IGIT, Odisha) and Master of Technology from IIT, Dhanbad.",
      linkedin: "https://www.linkedin.com/in/mihir-dash-0a52802/",
    },
    {
      id: 6,
      name: "Pradeep Das",
      role: "Advisory Member",
      image: person6,
      description: "Pradeep has over twenty five years of work experience in data, DWBI and Big Data technology. Significant operational and technology leadership across BFSI, MFG and SCM domains. Successfully led multiple business critical complex engagements and responsible for having more than $20 MUSD while in the leadership role at Infosys.Pradeep holds a Mechanical Engineering degree from State Engineering College (CET, Odisha) and Master of Technology from IIT, Kharagpur. ",
      linkedin: "https://www.linkedin.com/in/pradeep-das-755b463/",
    },
  ];

  return (
    <div className="about-page">

{/* ================= PREMIUM INFO CARDS ================= */}

<div className="premium-cards-wrapper">
  {infoCards.map((card, index) => (
    <motion.div
      key={index}
      className="premium-card"
      custom={index}
      initial="hidden"
      animate="visible"
      variants={cardVariants}
    >
      <div className="premium-card-content">
        <div className="premium-text">
          <h2>{card.title}</h2>
          <p>{card.description}</p>
        </div>

      </div>
    </motion.div>
  ))}
</div>

      {/* ================= TEAM GRID ================= */}

      <div className="team-grid">
        {team.map((member) => (
          <div
            key={member.id}
            className="team-card"
            onClick={() => setSelectedMember(member)}
          >
            <img src={member.image} alt={member.name} />
            <div className="overlay">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ================= MODAL ================= */}

      {selectedMember && (
        <div className="modal-overlay">
          <div className="modal-box">

            <FaTimes
              className="close-btn"
              onClick={() => setSelectedMember(null)}
            />

            <a
              href={selectedMember.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-top"
            >
              <FaLinkedin />
            </a>

            <img
              src={selectedMember.image}
              alt={selectedMember.name}
              className="modal-image"
            />

            <h2>{selectedMember.name}</h2>
            <h4>{selectedMember.role}</h4>

            <p className="modal-description">
              {selectedMember.description}
            </p>

          </div>
        </div>
        
      )}
      {/* PARTNERS */}
            <section className="partners">
              <h2>PARTNERSHIPS AND COLLABORATIONS</h2>
      
              <div className="partner-grid">
                <img src={aws} alt="AWS" />
                <img src={microsoft} alt="Microsoft" />
                <img src={base} alt="Base Automation" />
                <img src={thub} alt="Thub" />
                <img src={nvidia} alt="Nvidia" />
              </div>
            </section>
            <section className="partner-section">
  <div className="partner-container">
    
    <div className="partner-text">
      <h2>Why Partner With Us?</h2>

      <p>
        <strong>Industry Expertise –</strong> Backed by a team with years of
        experience in AI-driven industrial transformation.
      </p>

      <p>
        <strong>Strategic Collaborations –</strong> Strong partnerships with
        leading tech providers like AWS, Azure, Nvidia, and Base Automation
        to deliver scalable and cutting-edge solutions.
      </p>

      <p>
        <strong>Proven Impact –</strong> Real-world case studies showcasing how
        our AI-powered insights optimize efficiency, enhance reliability,
        and drive measurable business outcomes.
      </p>
    </div>

    <div className="partner-image">
      <img src={PartnerImg} alt="Business partnership" />
    </div>

  </div>
</section>
    </div>
  );
}

export default About;
