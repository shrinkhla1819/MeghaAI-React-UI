function SolutionsPreview() {
  return (
    <section className="section">
      <div className="container">

        <h2 style={{ marginBottom: "60px", textAlign: "center" }}>
          Our Intelligent Solutions
        </h2>

        <div style={{
          display: "flex",
          gap: "40px",
          justifyContent: "center"
        }}>

          <div className="card" style={{ width: "300px" }}>
            <h3>Predictive Maintenance</h3>
            <p>Reduce downtime with AI-based anomaly detection.</p>
          </div>

          <div className="card" style={{ width: "300px" }}>
            <h3>Quality Inspection</h3>
            <p>Automated defect detection using computer vision.</p>
          </div>

          <div className="card" style={{ width: "300px" }}>
            <h3>Process Optimization</h3>
            <p>Data-driven production efficiency improvements.</p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default SolutionsPreview;
