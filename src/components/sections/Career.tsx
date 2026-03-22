import "./Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Leadership <span>&</span>
          <br /> Initiatives
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>President</h4>
                <h5>E-Cell</h5>
              </div>
              <div className="career-capsule">Leadership</div>
            </div>
            <p>
              Led the university’s entrepreneurship cell with a community of 600+ students. Organized 20+ events focused on startups, innovation, and business awareness while managing cross-functional teams across operations and outreach.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Founder</h4>
                <h5>Bocadoh</h5>
              </div>
              <div className="career-capsule">Entrepreneurship</div>
            </div>
            <p>
              Building a D2C healthy snacking brand focused on innovative products. Developing India’s first fruit-flavoured coconut chips while driving product development, market research, and go-to-market strategy.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Core Member</h4>
                <h5>Development Club</h5>
              </div>
              <div className="career-capsule">Open Source</div>
            </div>
            <p>
              Contributed to open-source initiatives and built a collaborative development culture. Initiated “DCode”, a platform enabling students to participate in open-source contributions and real-world development practices.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Core Committee</h4>
                <h5>Damru</h5>
              </div>
              <div className="career-capsule">WEB DEV</div>
            </div>
            <p>
              Selected as 1 of 20 core committee members from a 2000+ student body. Led the development of the official DAMRU website, delivering a high-quality platform recognized as one of the most mature fest websites at the university level.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
