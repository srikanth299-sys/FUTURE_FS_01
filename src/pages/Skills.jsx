
import { Container, Row, Col, Card, ProgressBar } from "react-bootstrap";

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      icon: "bi bi-server",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      skills: [
        { name: "Java", level: 40, icon: "☕" },
        
        { name: "Node.js", level: 50, icon: "🟢" },
        { name: "Express.js", level: 55, icon: "⚡" },
        { name: "Python", level: 85, icon: "🐍" },
        
      ],
    },
    {
      title: "Database & Data",
      icon: "bi bi-database",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      skills: [
        { name: "MySQL", level: 80, icon: "🐬" },
        { name: "MongoDB", level: 75, icon: "🍃" },
        { name: "Data Structures", level: 85, icon: "📊" },
        { name: "Algorithms", level: 80, icon: "🧮" },
        { name: "Machine Learning", level: 65, icon: "🤖" },
      ],
    },
    {
      title: "Tools & Technologies",
      icon: "bi bi-tools",
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      skills: [
        { name: "Git", level: 55, icon: "📝" },
        { name: "Problem Solving", level: 80, icon: "🧩" },
        { name: "DSA", level: 55, icon: "📈" },
        { name: "AI Engineering", level: 70, icon: "🤖" },
        { name: "Full Stack Development", level: 70, icon: "💻" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="section-header mb-3">Skills & Technologies</h2>
          <p className="text-muted lead">
            My core technical skills
          </p>
        </div>

        <Row className="g-4">
          {skillCategories.map((category, index) => (
            <Col lg={6} key={index}>
              <Card className="h-100 border-0 shadow-lg skill-category-card position-relative overflow-hidden">
                <div
                  className="position-absolute top-0 start-0 w-100 h-100 opacity-10"
                  style={{ background: category.gradient }}
                ></div>
                <Card.Body className="p-4 position-relative">
                  <div className="d-flex align-items-center mb-4">
                    <div
                      className="rounded-circle me-3 d-flex align-items-center justify-content-center shadow-sm"
                      style={{
                        width: "50px",
                        height: "50px",
                        background: category.gradient,
                        color: "white",
                      }}
                    >
                      <i className={category.icon}></i>
                    </div>
                    <div>
                      <h4 className="mb-1 fw-bold">{category.title}</h4>
                    </div>
                  </div>

                  <div className="skills-list">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="skill-item mb-3">
                        <div className="d-flex justify-content-between align-items-center mb-1">
                          <span className="d-flex align-items-center">
                            <span className="me-2 fs-5">{skill.icon}</span>
                            <span className="fw-medium">{skill.name}</span>
                          </span>
                          <span
                            className="badge rounded-pill"
                            style={{
                              background: category.gradient,
                              color: "white",
                            }}
                          >
                            {skill.level}%
                          </span>
                        </div>
                        <ProgressBar
                          now={skill.level}
                          className="skill-progress"
                          style={{ height: "6px" }}
                        />
                      </div>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
