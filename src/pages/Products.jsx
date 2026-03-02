import product1 from "../assets/products/product1.jpeg";
import product2 from "../assets/products/product2.jpeg";
import product3 from "../assets/products/product3.jpeg";
import product4 from "../assets/products/product4.jpeg";
import "../styles/products.css";
import p1 from "../assets/products/p1.png";
import p2 from "../assets/products/p2.png";


function Products() {
  return (
    <div className="products-page">

      <section className="products-container">

        <div className="product-card">
          <img src={product1} alt="Product 1" />
          <h3>AI-Powered Multivariate Anomaly Detection</h3>
          <p>
            
AI-Powered Multivariate Anomaly Detection For Manufacturing
Our AI-driven anomaly detection analyzes hundreds of parameters together, unlike traditional systems that assess them separately. This holistic approach uncovers complex, interdependent anomalies that would otherwise go unnoticed.

 </p> <p>

By processing temperature, pressure, vibration, flow rates, and chemical concentrations simultaneously, it provides a complete system view and identifies multi-variable issues.
 </p> <p>
​

Beyond detection, our AI explains root causes, revealing mechanical wear in CNC machines, motor vibrations, or pressure fluctuations in reverse osmosis membranes. By analyzing parameter relationships, it shows how one change disrupts the system.What sets us apart is rapid predictive model creation—no data science expertise needed. Our system ingests data, analyzes it, and delivers insights automatically.
          </p>
        </div>

        <div className="product-card">
          <img src={product2} alt="Product 2" />
          <h3>LLM-Powered Insights</h3>
          <p>
            Integrating LLM-powered insights, our solution detects anomalies, explains root causes, and provides actionable recommendations. By leveraging SOPs, manuals, and best practices, it delivers step-by-step guidance for each anomaly.
</p> <p>
​

For instance, if pressure fluctuations affect reverse osmosis membranes, the system identifies the cause and suggests corrective actions, like adjusting pressure or scheduling maintenance. This removes guesswork, empowering operators with AI-driven, industry-aligned instructions.

​
</p> <p>
Operators receive contextual explanations, action summaries, and real-time guidance, ensuring faster resolutions and minimal disruptions. Combining anomaly detection with LLM insights helps manufacturers maintain equipment, optimize processes, and drive continuous improvement, enhancing productivity and reducing downtime.
          </p>
        </div>

        <div className="product-card">
          <img src={product3} alt="Product 3" />
          <h3>Knowledge Graph Integration</h3>
          <p>
            
Knowledge Graph Integration For Advanced Contextual Understanding 
To take insights even further, our solution integrates with a powerful Knowledge Graph, which connects disparate data sources, operational processes, and assets. The Knowledge Graph interlinks vast amounts of data, organizing it into a structured form that helps identify patterns, relationships, and potential risks.

 </p> <p>

This intelligent system can link historical performance data, sensor readings, and maintenance records, making it easier to correlate anomalies and uncover trends that are otherwise hidden within the data. 

 </p> <p>

The Knowledge Graph also aids in strategic decision-making by presenting a comprehensive, interrelated view of plant operations, from high-level processes to individual assets. This enables operators and decision-makers to gain deeper insights and understand the broader implications of detected anomalies or optimizations, helping them make more informed decisions with greater speed and accuracy.
          </p>
        </div>

        <div className="product-card">
          <img src={product4} alt="Product 4" />
          <h3>Intelligent 3D Modeling</h3>
          <p>
            Our solution integrates advanced 3D models for real-time plant operations visualization. These models optimize data rendering for faster performance.

​
</p> <p>
Combined with AI insights, these 3D models enable operators to interactively explore plant data, correlating real-time information with plant assets. Operators can click on assets like pumps or motors to view data and receive actionable recommendations, such as optimal parameters or maintenance schedules, based on AI analysis.
</p> <p>
​

This 3D-AI integration boosts situational awareness, giving operators a dynamic view of plant health, performance, and potential issues. By linking 3D models to the Knowledge Graph, operators can view the entire plant ecosystem in a unified interface, optimizing operations and ensuring efficiency.
          </p>
        </div>

      </section>
  {/* ================= COMBINED STRATEGY + AI SECTION ================= */}

<div className="strategy-ai-wrapper">

  {/* DATA STRATEGY */}
  <section className="data-strategy-section">
    <h2>Data Strategy</h2>
<div
  style={{
    display: "flex",
    justifyContent: "center",
    margin: "25px 0"
  }}
>
  <img
    src={p2}
    alt="Data Strategy"
    style={{
      width: "90%",        // controls horizontal size
      maxWidth: "1000px",   // maximum limit
      height: "auto",      // keeps aspect ratio correct
      borderRadius: "16px",
      boxShadow: "0 8px 25px rgba(0,0,0,0.15)"
    }}
  />
</div>

    <p>
      MeghaAI’s data strategy stands out by seamlessly integrating data from
      diverse industrial protocols, including legacy systems, through proprietary
      hardware and software. This unique approach enables data capture from both
      modern and older machines, ensuring compatibility and real-time insights
      across the entire operation.
    </p>
  </section>

  {/* AI IN ACTION */}
  <section className="ai-section">
    <h2>AI in Action</h2>

    <div
  style={{
    display: "flex",
    justifyContent: "center",
    margin: "25px 0"
  }}
>
  <img
    src={p1}
    alt="AI in Action"
    style={{
    width: "90%",        // controls horizontal size
      maxWidth: "1000px",   // hard limit
      height: "auto",      // keeps proper ratio
      borderRadius: "16px",
      boxShadow: "0 8px 25px rgba(0,0,0,0.15)"
    }}
  />
</div>

    <ul>
      <li>Detects hidden issues before they cause failures.</li>
      <li>Monitors multiple parameters simultaneously.</li>
      <li>Predicts failures in advance to reduce unplanned downtime.</li>
      <li>Learns and improves over time using past data.</li>
      <li>Identifies root causes instead of just raising alarms.</li>
      <li>Reduces false alerts by filtering out normal variations.</li>
      <li>Works in real-time for instant issue detection.</li>
      <li>Configurable for any manufacturing setup and integrates with existing systems.</li>
    </ul>
  </section>

</div>
    </div>
    
  );    
}

export default Products;
