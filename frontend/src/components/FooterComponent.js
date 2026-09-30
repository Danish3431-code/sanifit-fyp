import { Container, Row, Col } from "react-bootstrap";

const FooterComponent = () => {
  return (
    <footer>
      <Container fluid>
        <Row className="">
          <Col className="bg-dark text-white text-center py-3">
            Copyright &copy; SANITARY HUB
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterComponent;
