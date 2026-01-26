import { Container, Row, Col } from "react-bootstrap";
import GiphyViewer from "./GiphyViewer";
import "bootstrap/dist/css/bootstrap.css";
import "../assets/app.css";

export default function GiphyDemo() {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <GiphyViewer />
        </Col>
      </Row>
    </Container>
  );
}
