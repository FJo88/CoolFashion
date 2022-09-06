import { Card, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CategoryPage = () => {
  let jackets = [
    "Levi Jacket",
    "White Jacket",
    "Nike Jacket",
    "Blue Jacket",
    "Parajumper Jacket",
    "Leather Jacket",
  ];

  return (

    <Container>
        <h1>Jackor</h1>
      <Row className="justify-content-sm-center" xs={2} md={4}>
        <Col lg={3} sm={6}>
          <Card className="bg-dark text-white" style={{ width: "auto"}}>
            <Card.Img variant="top" src="https://placeholder.pics/svg/300x400" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="success">Köp</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} sm={6}>
          <Card className="bg-dark text-white" style={{ width: "auto" }}>
            <Card.Img variant="top" src="https://placeholder.pics/svg/300x400" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Köp</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} sm={6}>
          <Card className="bg-dark text-white" style={{ width: "auto" }}>
            <Card.Img variant="top" src="https://placeholder.pics/svg/300x400" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="secondary">Köp</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} sm={6}>
          <Card className="bg-dark text-white" style={{ width: "auto" }}>
            <Card.Img variant="top" src="https://placeholder.pics/svg/300x400" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="danger">Köp</Button>
            </Card.Body>
          </Card>
        </Col>
       
      </Row>
    </Container>
  );
};

export default CategoryPage;
