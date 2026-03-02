import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>
          Innovative AI Solutions
          <br />
          Tailored For Your Industry
        </h1>

        <p>
          Transform manufacturing operations with intelligent
          anomaly detection, predictive insights, and seamless
          automation.
        </p>

        <button className="hero-btn">Explore Solutions</button>
      </div>

      <div className="hero-right">
        <div className="hero-card">
          AI-Powered Manufacturing Intelligence
        </div>
      </div>
    </section>
  );
}

export default Hero;
