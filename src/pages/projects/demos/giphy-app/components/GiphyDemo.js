import { Container, Row, Col } from "react-bootstrap";
import GiphyViewer from "./GiphyViewer";
import "bootstrap/dist/css/bootstrap.css";
import "../assets/app.css";

export default function GiphyDemo() {
  return (
    <div className="bg-black text-white">
      <Container fluid className="bg-black text-white py-4">
        <Row>
          <Col>
            <GiphyViewer />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
