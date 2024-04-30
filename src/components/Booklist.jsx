import React, { useState } from "react";
import SingleBook from "./SingleBook";
import { Row, Col, Container, Form } from "react-bootstrap";

function Booklist({ books }) {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (event) => {
    setSearchText(event.target.value.toLowerCase());
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchText)
  );

  return (
    <Container>
      <Form.Control
        type="text"
        placeholder="Search books..."
        onChange={handleSearchChange}
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

export default Booklist;
