import { Card, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "../components/Header";
import Footer from "../components/Footer";

const CategoryPage = (props) => {
  const jackets = [];

  Object.values(props).forEach((jacket) => jackets.push(jacket));

  return (
    <Container>
      <Header />
      <h1>Jackor</h1>

      <Row xs={2} md={4}>
        {jackets.map((jacket) => {
          return (
            <Col lg={3} sm={6}>
              <Card
                className="bg-dark text-white mb-5"
                style={{ width: "auto" }}
              >
                <Card.Img variant="top" src={jacket.imageurl} />
                <Card.Body>
                  <Card.Title className="card-title">{jacket.title}</Card.Title>
                  <Card.Subtitle>{jacket.brand}</Card.Subtitle>
                  <Card.Text>{jacket.description}</Card.Text>
                  <Card.Subtitle className="card-price">
                    {jacket.price}
                  </Card.Subtitle>
                  <Button variant="primary">Köp</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
        ;
      </Row>
      <Footer />
    </Container>
  );
};

export default CategoryPage;
