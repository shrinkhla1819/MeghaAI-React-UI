import React from "react";
import "../index.css";
import "../styles/contact.css";
const Contact = () => {
  return (
    <div className="contact-page">

      <h1 className="contact-heading">
        Take The Next Step Towards Operational Excellence
      </h1>

      <div className="contact-card">
        <form>

          {/* First + Last Name */}
          <div className="row two-columns">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>

          {/* Email + Phone */}
          <div className="row two-columns">
            <input type="email" placeholder="Email" />

            <div className="phone-group">
              <select>
                <option value="+91">+91</option>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
                <option value="+61">+61</option>
              </select>

              <input type="tel" placeholder="Phone" />
            </div>
          </div>

          {/* Address */}
          <div className="row">
            <textarea placeholder="Address"></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Submit
          </button>

        </form>
      </div>
    <div className="contact-cta">
          <h4>Get In Touch With Our Experts</h4>
     {/* OR */}
  <h4>Request A Free Consultation Today</h4> 
     </div>

    </div>
    
  );
};

export default Contact;
