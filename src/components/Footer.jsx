import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="footer text-white py-5 mt-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h5 className="mb-3">Guguloth Srikanth</h5>
            <p className="mb-2 opacity-75">
              | Full Stack (MERN) | AI Engineering Enthusiast
            </p>
            <p className="mb-0 opacity-75">&copy; 2025 All rights reserved.</p>
          </Col>
          <Col md={6} className="text-md-end">
            <div className="mb-3">
              <a
                href="https://github.com/srikanth299-sys"
                className="text-white me-3 fs-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-github"></i>
              </a>
              <a
                href="mailto:gugulothsrikanth299@gmail.com"
                className="text-white me-3 fs-4"
              >
                <i className="bi bi-envelope-fill"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/guguloth-srikanth-b519482b4/"
                className="text-white fs-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
            <p className="mb-0 opacity-75">
              Built with ❤️ using React & Bootstrap
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
