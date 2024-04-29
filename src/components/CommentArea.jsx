import React, { Component } from "react";

class CommentArea extends Component {
  state = {
    comments: [],
  };

  componentDidMount() {
    this.fetchComments();
  }

  fetchComments = () => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/0786966246", {
      method: "GET",
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjE4ZTY1NjdmMzA0NjAwMWFlNTlmNWQiLCJpYXQiOjE3MTQzOTM3NTEsImV4cCI6MTcxNTYwMzM1MX0.BZScmk1xLS-gmEUgZ4nSMGnpJHOfvx3o18CJiR6A040`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("error");
        }
        return response.json();
      })
      .then((data) => console.log(data))
      .catch((error) => console.error("Error fetching comments:", error));
  };

  render() {
    const { comments } = this.state;
    return (
      <div>
        <ul>
          {comments.map((comment) => (
            <li key={comment._id}>
              <p>{comment.comment}</p>
              <p>Rating: {comment.rate}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CommentArea;
