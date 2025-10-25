import { Container, Row, Col, Card } from "react-bootstrap";
import certificates from "../data/certificates";

const Certificates = () => {
  return (
    <section id="certificates" className="py-5">
      <Container>
        <h2 className="text-center section-header mb-5">
          Certificates & Achievements
        </h2>
        <Row className="g-4">
          {certificates.map((cert) => (
            <Col md={6} lg={3} key={cert.id}>
              <Card className="h-100 border-0 shadow-sm certificate-card position-relative overflow-hidden">
                <div
                  className="certificate-img-container"
                  style={{ height: "220px", overflow: "hidden" }}
                >
                  {cert.link ? (
                    <a href={cert.link} target="_blank" rel="noreferrer">
                      <Card.Img
                        variant="top"
                        src={cert.image}
                        alt={cert.title}
                        className="w-100 h-100"
                        style={{
                          objectFit: "contain",
                          padding: "15px",
                          transition: "transform 0.3s ease",
                        }}
                      />
                    </a>
                  ) : (
                    <Card.Img
                      variant="top"
                      src={cert.image}
                      alt={cert.title}
                      className="w-100 h-100"
                      style={{
                        objectFit: "contain",
                        padding: "15px",
                        transition: "transform 0.3s ease",
                      }}
                    />
                  )}
                </div>
                <Card.Body className="text-center p-4">
                  <div className="mb-2">
                    <i className="bi bi-award-fill text-warning fs-4"></i>
                  </div>
                  <Card.Title className="h6 fw-bold mb-1">{cert.title}</Card.Title>
                  <Card.Subtitle className="small text-muted mb-2">
                    {cert.issuer} {cert.date ? `• ${cert.date}` : ""}
                  </Card.Subtitle>
                  <Card.Text className="small text-muted">
                    {cert.description}
                  </Card.Text>
                </Card.Body>
                <div
                  className="position-absolute top-0 end-0 p-2"
                  style={{
                    background: "linear-gradient(45deg, #667eea, #2563eb)",
                    borderRadius: "0 0 0 10px",
                  }}
                >
                  <i className="bi bi-check-circle-fill text-white"></i>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Certificates;
