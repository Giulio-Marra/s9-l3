import React from "react";
import { Card } from "react-bootstrap";

const SingleBook = (props) => {
  return (
    <Card className="cardBody">
      <Card.Img
        className="cardImg"
        variant="top"
        src={props.book.img}
        alt={props.book.title}
      />
      <Card.Body>
        <Card.Title>{props.book.title}</Card.Title>
        <Card.Text>Price: {props.book.price} $</Card.Text>
        <Card.Text>Genre: {props.book.category}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;
