import React, { Component } from "react";
import SingleBook from "./SingleBook";
import { Row, Col, Container, Form } from "react-bootstrap";

class Booklist extends Component {
  state = {
    searchText: "",
  };

  handleSearchChange = (event) => {
    this.setState({ searchText: event.target.value.toLowerCase() });
  };

  render() {
    const filteredBooks = this.props.books.filter((book) =>
      book.title.toLowerCase().includes(this.state.searchText)
    );

    return (
      <Container>
        <Form.Control
          type="text"
          placeholder="Search books..."
          onChange={this.handleSearchChange}
          className="rounded-5"
        />
        <Row>
          {filteredBooks.map((book, index) => (
            <Col sm={12} md={6} lg={4} xl={3} key={index}>
              <SingleBook book={book} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Booklist;
