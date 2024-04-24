import React, { Component } from "react";
import { Container, Row, Col, Card, Form, Dropdown } from "react-bootstrap";
import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";

const allBooks = [...history, ...fantasy, ...horror, ...romance, ...scifi];

allBooks.sort(() => Math.random() - 0.5);

class AllTheBooks extends Component {
  state = {
    selectedCategory: allBooks,
    searchText: "",
  };

  filterBooks = () => {
    const { searchText, selectedCategory } = this.state;
    return selectedCategory.filter((book) =>
      book.title.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  render() {
    const filteredBooks = this.filterBooks();
    return (
      <>
        <Container className=" mb-5 stickyContainer">
          <Row className="mb-3 text-center">
            <Col className="d-flex justify-content-between align-items-center">
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Choose Category
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item
                    onClick={() => this.setState({ selectedCategory: fantasy })}
                  >
                    Fantasy
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => this.setState({ selectedCategory: horror })}
                  >
                    Horror
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => this.setState({ selectedCategory: romance })}
                  >
                    Romance
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => this.setState({ selectedCategory: history })}
                  >
                    History
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => this.setState({ selectedCategory: scifi })}
                  >
                    Sci-Fi
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() =>
                      this.setState({ selectedCategory: allBooks })
                    }
                  >
                    All
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Form.Control
                type="text"
                placeholder="Search books..."
                onChange={(event) =>
                  this.setState({ searchText: event.target.value })
                }
                className="rounded-5"
              />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="mb-3">
            {filteredBooks.length > 0 ? (
              filteredBooks.map((book) => (
                <Col
                  key={book.id}
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  className="mb-2"
                >
                  <Card className="cardBody">
                    <Card.Img
                      className="cardImg"
                      variant="top"
                      src={book.img}
                      alt={book.title}
                    />
                    <Card.Body>
                      <Card.Title>{book.title}</Card.Title>
                      <Card.Text>Price: {book.price} $</Card.Text>
                      <Card.Text>Genre: {book.category}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              <Col>
                <p>No book found</p>
              </Col>
            )}
          </Row>
        </Container>
      </>
    );
  }
}
export default AllTheBooks;
