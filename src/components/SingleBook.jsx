import React, { Component } from "react";
import { Card } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    const { book } = this.props;

    return (
      <Card
        className="cardbody"
        onClick={() => this.setState({ selected: !this.state.selected })}
      >
        <Card.Img
          className="cardImg"
          variant="top"
          src={book.img}
          alt={book.title}
        />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>Prezzo: {book.price} $</Card.Text>
          <Card.Text>Genere: {book.category}</Card.Text>
          <Card.Text>ID: {book.asin}</Card.Text>
        </Card.Body>
        <CommentArea />
      </Card>
    );
  }
}

export default SingleBook;
