import "./Work.css";

const projects = [
  {
    title: "Cold Case",
    repo: "cold_case",
    category: "Data Forensics & Analysis",
    tools: "Python, Data Science, Web Scraping",
  },
  {
    title: "Modern Responsive Landing Page",
    repo: "Modern-Responsive-Landing-Page",
    category: "Frontend UI",
    tools: "React, HTML5, CSS3, Animations",
  },
  {
    title: "Solar System Replica",
    link: "https://solar-system-replica.vercel.app/",
    category: "3D Web App",
    tools: "Three.js, React, WebGL, Animations",
  },
  {
    title: "Property Listing",
    repo: "property-listing",
    category: "Real Estate Platform",
    tools: "React, Node.js, Express, MongoDB",
  },
  {
    title: "NLP Research Analyser",
    repo: "NLP_Research_Analyser",
    category: "Machine Learning",
    tools: "Python, Scikit-learn, Pandas, NLP",
  },
];

const Work = () => {
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <div className="work-content-layout">
          <div className="work-text-content">
            <h2>
              Work <br/> <span>Profile</span>
            </h2>
            <p className="work-note">Press the file to view the project</p>
          </div>

          <div className="mac-folder-container">
            <div className="mac-folder">
              <div className="mac-folder-back"></div>
              <div className="mac-folder-files">
                {projects.map((project, index) => (
                  <a
                    key={index}
                    href={project.link || `https://github.com/KaavyaGala546/${project.repo || project.title.replace(/\s+/g, '-')}`}
                    target="_blank"
                    rel="noreferrer"
                    className="folder-file"
                    style={{ "--index": index } as React.CSSProperties}
                  >
                    <div className="file-content">
                      <div>
                        <h4>{project.title}</h4>
                        <p className="file-category">{project.category}</p>
                      </div>
                      <div className="file-tools">{project.tools}</div>
                    </div>
                  </a>
                ))}
              </div>
              <div className="mac-folder-front"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
