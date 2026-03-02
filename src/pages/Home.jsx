import { useEffect } from "react";
import "../styles/home.css";

import sol1 from "../assets/home/solutions1.jpeg";
import sol2 from "../assets/home/solutions2.jpeg";
import sol3 from "../assets/home/solutions1.jpeg"; // you can change this image
import heroImage from "../assets/home/hero.jpeg";
import aws from "../assets/home/aws.png";
import microsoft from "../assets/home/microsoft.png";
import base from "../assets/home/base.png";
import nvidia from "../assets/home/nvidia.png";
import thub from "../assets/home/thub.png";
import c1 from "../assets/customers/c1.png";
import c2 from "../assets/customers/c2.png";
import c3 from "../assets/customers/c3.png";
import c4 from "../assets/customers/c4.png";
import c5 from "../assets/customers/c5.png";
import c6 from "../assets/customers/c6.png";
import c7 from "../assets/customers/c7.png";

function Home() {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.15 }
    );

    reveals.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="home-page">
      
      {/* HERO */}
      <section className="hero-top">
  <h1 className="hero-title">
    LEADING THE FUTURE OF MANUFACTURING
    <br />
    WITH <span>AI-DRIVEN</span> INNOVATION
  </h1>

  <div className="hero-image-wrapper">
    <img src={heroImage} alt="Manufacturing AI" />
  </div>
</section>



      {/* TAGLINE */}
      <section className="tagline-section reveal">
        <h2>
          TRANSFORMING INDUSTRY OPERATIONS WITH INTELLIGENT PREDICTIONS AND INSIGHTS
        </h2>
      </section>

      {/* NEW 3 SOLUTION CARDS */}
      <section className="home-solutions reveal">
        <div className="home-solutions-container">

          <div className="home-solution-card">
            <img src={sol1} alt="Smart Manufacturing" />
            <h3>AI & ML Solutions For Smart Manufacturing</h3>
          </div>

          <div className="home-solution-card">
            <img src={sol2} alt="LLM Insights" />
            <h3>LLM-Powered Insights For Operational Efficiency</h3>
          </div>

          <div className="home-solution-card">
            <img src={sol3} alt="IT-OT Integration" />
            <h3>Seamless IT-OT Data Integration With Advanced Technology</h3>
          </div>

        </div>
      </section>

      {/* CUSTOMERS */}
      <section className="customers">
        <h2>Trusted by the top companies in this industry</h2>

        <div className="customer-slider">
          <div className="slide-track">
            <img src={c1} alt="Customer 1" />
            <img src={c2} alt="Customer 2" />
            <img src={c3} alt="Customer 3" />
            <img src={c4} alt="Customer 4" />
            <img src={c5} alt="Customer 5" />
            <img src={c6} alt="Customer 6" />
            <img src={c7} alt="Customer 7" />

            {/* duplicate for infinite scroll */}
            <img src={c1} alt="" />
            <img src={c2} alt="" />
            <img src={c3} alt="" />
            <img src={c4} alt="" />
            <img src={c5} alt="" />
            <img src={c6} alt="" />
            <img src={c7} alt="" />
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="partners reveal">
        <h2>PARTNERSHIPS AND COLLABORATIONS</h2>

        <div className="partner-grid">
          <img src={aws} alt="AWS" />
          <img src={microsoft} alt="Microsoft" />
          <img src={base} alt="Base Automation" />
          <img src={thub} alt="Thub" />
          <img src={nvidia} alt="Nvidia" />
        </div>
      </section>

    </div>
  );
}

export default Home;
