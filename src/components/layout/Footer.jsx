import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import "../../styles/footer.css";
import logo from "../../assets/logo1.png";

function Footer() {
  const [showCareers, setShowCareers] = useState(false);
  const [showApply, setShowApply] = useState(false);

  const navigate = useNavigate();

  return (
    <footer className="footer">

      {/* Logo Section */}
      <div className="footer-logo-section">
        <div className="divider"></div>
        <img src={logo} alt="MeghaAI Logo" className="footer-logo" />
        <div className="divider"></div>
      </div>

      {/* Contact Info */}
      <div className="footer-contact">
        <p>Tel. 1-833-634-4281</p>
        <p>Fax 1-248-955-1766</p>
        <p>support@meghaai.com</p>
      </div>

      {/* LinkedIn */}
      <div className="linkedin-section">
        <a
          href="https://www.linkedin.com/company/meghaai/posts/?feedView=all"
          target="_blank"
          rel="noreferrer"
          className="linkedin-icon"
        >
          <FaLinkedinIn />
        </a>
      </div>

      {/* 3 Column Row */}
      <div className="footer-action-row">

        {/* LEFT */}
        <div className="footer-action-left">
          <h4>Learn More</h4>
          <div className="footer-links">
            <div onClick={() => navigate("/solutions")}>Industries</div>
            <div onClick={() => navigate("/products")}>Products</div>
            <div onClick={() => navigate("/about")}>About Us</div>
          </div>
        </div>

        {/* CENTER */}
        <div className="footer-action-center">
          <p className="address">
            MeghaAI, T-Hub, Plot No 1/C, Sy No 83/1, Raidurgam Panmaktha
            Hyderabad Knowledge City, Serilingampally, Hyderabad,
            Telangana 500081, India & Indianapolis, Indiana, USA
            <br />
            Bhubaneswar, India
          </p>
        </div>

        {/* RIGHT */}
        <div className="footer-action-right">
          <h4>Get Started</h4>
          <div className="footer-links right-links">
            <div onClick={() => navigate("/contact")}>Contact Us</div>
            <div onClick={() => setShowCareers(!showCareers)}>
              Careers
            </div>
          </div>
        </div>

      </div>

      {/* CAREERS CARDS (OUTSIDE ROW) */}
      {showCareers && (
        <div className="footer-careers-wrapper">
          <div className="footer-cards">
            <div className="card">
              <h4>Data Scientist</h4>
              <p>3-5 Years experience in building models with IoT data.</p>
              <button onClick={() => setShowApply(true)}>APPLY</button>
            </div>

            <div className="card">
              <h4>AWS Cloud Expert</h4>
              <p>5-7 Years experience in cloud migration.</p>
              <button onClick={() => setShowApply(true)}>APPLY</button>
            </div>

            <div className="card">
              <h4>Agile Project Manager</h4>
              <p>10-12 Years experience in handling Agile projects.</p>
              <button onClick={() => setShowApply(true)}>APPLY</button>
            </div>
          </div>
        </div>
      )}

      {/* APPLY MODAL */}
      {showApply && (
        <div className="apply-modal">
          <div className="apply-box">
            <h3>Apply Now</h3>
            <input placeholder="First Name" />
            <input placeholder="Last Name" />
            <input placeholder="Email" />
            <input placeholder="Phone" />
            <input placeholder="Available Start Date" />
            <select>
              <option>Select Position</option>
              <option>Data Scientist</option>
              <option>AWS Cloud Expert</option>
              <option>Agile Project Manager</option>
            </select>
            <button>Submit</button>
            <button onClick={() => setShowApply(false)}>Close</button>
          </div>
        </div>
      )}

      {/* COPYRIGHT */}
      <div className="footer-copyright">
        © 2025 by MeghaAI - All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;