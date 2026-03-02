import { useState } from "react";

function Careers() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="careers-page">

      <h1 className="careers-title">Careers</h1>

      <div className="careers-container">

        {/* CARD 1 */}
        <div className="career-card">
          <h2>Data Scientist</h2>
          <p>
            3-5 Years experience in building models with IOT data.
            Deep knowledge on Hyper parameter tuning and accuracy metrics.
          </p>
          <button onClick={() => setShowModal(true)}>APPLY</button>
        </div>

        {/* CARD 2 */}
        <div className="career-card">
          <h2>AWS Cloud Expert</h2>
          <p>
            Cloud migration specialist with 5-7 years of experience
            moving databases to cloud. Good expertise in structured
            and unstructured data migration.
          </p>
          <button onClick={() => setShowModal(true)}>APPLY</button>
        </div>

        {/* CARD 3 */}
        <div className="career-card">
          <h2>Product Owner</h2>
          <p>
            10-12 Years experience in Agile projects.
            Ability to define product backlog and guide
            teams on releases and deliverables.
          </p>
          <button onClick={() => setShowModal(true)}>APPLY</button>
        </div>

      </div>


      {/* ================= MODAL ================= */}

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">

            <span
              className="close-btn"
              onClick={() => setShowModal(false)}
            >
              ×
            </span>

            <h2>Apply Here</h2>

            <div className="modal-form">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
              <input type="email" placeholder="Email" />
              <input type="tel" placeholder="Phone" />
              <input type="date" />
            </div>

            <button className="apply-btn">
              APPLY
            </button>

          </div>
        </div>
      )}

    </div>
  );
}

export default Careers;
