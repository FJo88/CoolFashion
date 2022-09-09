import React from "react";
import { Card, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ProductList = (props) => {
  // let jackets = [
  //     {
  //       title: 'Red Jacket',
  //       brand: 'Levis',
  //       price: '599 kr',
  //       category: 'Jackets',
  //       imageurl: 'https://placehold.jp/300x400.png',
  //       description: 'lorem ipsum dolor',
  //     },
  //     {
  //       title: 'Black Jacket',
  //       brand: 'Levis',
  //       price: '699 kr',
  //       category: 'Jackets',
  //       imageurl: 'https://placehold.jp/300x400.png',
  //       description: 'lorem dolor ipsum',
  //     },
  //     {
  //       title: 'Blue Jacket',
  //       brand: 'Tommy Hilfiger',
  //       price: '799 kr',
  //       category: 'Jackets',
  //       imageurl: 'https://placehold.jp/300x400.png',
  //       description: 'lorem',
  //     },
  //     {
  //       title: 'Green Jacket',
  //       brand: 'Levis',
  //       price: '599 kr',
  //       category: 'Jackets',
  //       imageurl: 'https://placehold.jp/300x400.png',
  //       description: 'lorem',
  //     },
  //   ];

  const { products, category } = props;

  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  Object.values(filteredProducts).forEach((product) =>
    filteredProducts.push(product)
  );

  return (
    <Container>
      <Header />
      <h1>{category}</h1>
      <Row xs={2} md={4}>
        {filteredProducts.map((product, i) => {
          return (
            <Col lg={3} sm={6} key={i}>
              <Card
                className="bg-dark text-white mb-5"
                style={{ width: "auto" }}
              >
                <Card.Img variant="top" src={product.imageurl} />
                <Card.Body>
                  <Card.Title className="card-title">
                    {product.title}
                  </Card.Title>
                  <Card.Subtitle>{product.brand}</Card.Subtitle>
                  <Card.Text>{product.description}</Card.Text>
                  <Card.Subtitle className="card-price">
                    {product.price}kr
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

export default ProductList;
