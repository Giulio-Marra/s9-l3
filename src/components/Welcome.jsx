import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

function Welcome() {
  const [show, setShow] = useState(true);

  return (
    <>
      <Alert show={show} variant="success" className="text-center mt-5">
        <Alert.Heading>HELLO!!!</Alert.Heading>
        <p>
          Welcome to this library, sit back and choose your next book to read
        </p>
        <hr />
        <div>
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close me
          </Button>
        </div>
      </Alert>
    </>
  );
}

export default Welcome;
