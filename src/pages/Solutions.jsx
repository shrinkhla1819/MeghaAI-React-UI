import "../styles/solutions.css";
import solution1 from "../assets/solutions/solution1.jpeg";
import solution2 from "../assets/solutions/solution2.jpeg";
import solution3 from "../assets/solutions/solution3.jpeg";
import solution4 from "../assets/solutions/solution4.jpeg";
import solution5 from "../assets/solutions/solution5.jpeg";
import solution6 from "../assets/solutions/solution6.jpeg";

function Solutions() {
  const solutions = [
    {
      id: 1,
      title: "Revolutionizing Manufacturing With AI-Powered Intelligence",
      description:
        "MeghaAI revolutionizes industries with deep learning algorithms that detect anomalies and explain their causes in manufacturing-specific terms. Its multivariate anomaly detection uncovers hidden patterns, predicts failures, and provides actionable insights for engineers and operators.​ With AI-powered knowledge graphs and 3D visualization, businesses can identify complex relationships, optimize processes, and make confident, data-driven decisions. Unlike traditional AI, MeghaAI’s models deploy in minutes, requiring no data science expertise.From predictive maintenance to process optimization, MeghaAI seamlessly integrates into manufacturing, delivering real-time, explainable insights that enhance efficiency, reduce downtime, and drive innovation.",
      image: solution1,
    },
    {
      id: 2,
      title: "AI-Driven Insights For Steel & Metal Manufacturing",
      description: "MeghaAI provides real-time insights for blast furnace and rolling mill operators, optimizing efficiency and cutting costs. In blast furnaces, AI monitors hot metal chemistry, pressure drops, and coke rate efficiency, ensuring stable temperatures and predicting tuyere zone anomalies—cutting coke use by 5-8% and boosting hot metal yield by 2-4%.For rolling mills, MeghaAI analyzes load variations, roll wear, vibrations, and surface quality, preventing defects and enabling precise speed and force adjustments—improving throughput by 3-5% and reducing scrap by 15-20%. With AI-driven insights, MeghaAI enhances process control, minimizes downtime, and boosts energy efficiency—elevating production quality and profitability.",
      image: solution2,
    },
    {
      id: 3,
      title: "AI-Driven Insights For Oil & Gas Operations",
      description: "Our AI-powered solution delivers real-time intelligence for oil and gas operations, optimizing processes, enhancing asset reliability, and improving efficiency. In upstream exploration, AI analyzes well integrity, reservoir pressure, gas lift, and fluid dynamics, helping operators anticipate declines, mitigate risks, and optimize recovery—reducing unscheduled maintenance by 10-15% and boosting production by 5-7%.In downstream refining, it provides insights on distillation, heat exchangers, and catalyst deactivation, ensuring optimal conditions. By detecting deviations in temperature, pressure, and fluid composition, engineers can fine-tune control strategies, cutting energy use by 7-10%, extending catalyst life, and refining with greater precision.Seamlessly integrating into workflows, our AI empowers operators to enhance performance, minimize risks, and drive cost-effective production—improving reservoir management and refining efficiency industry-wide.",
      image: solution3,
    },
    {
      id: 4,
      title: "AI-Driven Insights For Pharmaceutical Operations",
      description: "Our AI-powered solution enhances pharmaceutical operations by optimizing process efficiency, product quality, and costs. In drug manufacturing, AI analyzes reactor conditions to ensure precise formulation, detect API inconsistencies, and predict batch failures—boosting yield by 8-10% while minimizing waste and rework. For tablet coating and packaging, AI monitors coating thickness, drying, and hardness, optimizing material use and uniformity. This improves efficiency, cuts material costs by 5-7%, and boosts throughput in blenders, tablet presses, and coating pans. Predictive maintenance reduces costs by 15-20% and enhances equipment uptime.Our AI empowers pharmaceutical manufacturers to maintain quality, ensure compliance, and optimize production costs across the manufacturing lifecycle",
      image: solution4,
    },
    {
      id: 5,
      title: "AI-Driven Insights For Automotive Operations",
      description: "Our AI-powered solution enhances automotive manufacturing by optimizing processes, reducing cycle times, and ensuring quality. In assembly lines, AI monitors welding, painting, and component placement, enabling predictive maintenance. Detecting anomalies in temperature, pressure, and alignment reduces defects by 10-12% and downtime by 8-10%, improving throughput.For engine manufacturing, AI optimizes machining and assembly, ensuring precision and minimizing rework. It enhances CNC and robotic performance, increasing speed by 5-7% and cutting scrap by 15-20%. By analyzing material consistency, temperature, and tool wear, AI predicts replacements, reducing tooling costs by 10-15% and extending machine life. AI-driven intelligence boosts efficiency, lowers costs, and enhances quality.",
      image: solution5,
    },
    {
      id: 6,
      title: "AI-Driven Insights For Wastewater Treatment Operations",
      description: "AI-Driven Insights For Wastewater Treatment Operations. Our AI-powered solution optimizes wastewater treatment, cutting costs, improving efficiency, and ensuring compliance. In RO systems, AI monitors pressure, flow rates, and membrane fouling to predict degradation and optimize energy use. By analyzing real-time water quality data like TDS and salinity, it extends membrane lifespan, reducing maintenance costs by 10-15% and boosting uptime by 5-7%. For pre and post-treatment, AI optimizes chemical dosing, sedimentation, and coagulation, cutting chemical use by 8-12% and sludge disposal costs by 10-15%. Integrated with monitoring systems, AI enhances RO pumps, pressure vessels, and UV units, minimizing downtime and improving energy efficiency, water recovery, and sustainability.",
      image: solution6,
    },
  ];

  return (
    <div className="solutions-page">
      <div className="solutions-container">
        {solutions.map((solution, index) => (
          <div
            key={solution.id}
            className={`solution-box ${
              index % 2 === 0 ? "image-right" : "image-left"
            }`}
          >
            <div className="solution-text">
              {/* Topic for 2–6 only */}
              {solution.id !== 1 && (
                <p className="common-topic">
                  Industry-Specific AI Solutions
                </p>
              )}

              <h3>{solution.title}</h3>
              <p>{solution.description}</p>
            </div>

            <div className="solution-img">
              <img src={solution.image} alt={solution.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Solutions;
