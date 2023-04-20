import { Container, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";

export default function About() {
  const [picToggle, setPicToggle] = useState(false);
  const [textToggle, setTextToggle] = useState(false);

  return (
    <main>
      <Container className="text-center">
        <Row className="aboutrow">
          <Col sm={12} md={6}>
            <img
              onClick={() => setPicToggle(!picToggle)}
              src={
                picToggle ? "/images/pic1.jpg" : "/images/headshot-square-1.jpg"
              }
              className="rounded-circle"
              alt="Meghann Stamper"
            />
          </Col>

          <Col>
            <h1>Meghann Stamper</h1>
            {textToggle
                ? <p>Fun Fact: I have freckles on my lips!</p>
                : <p>
              I spent most of my life avoiding things that I deemed “scary,” or
              “too difficult;” in doing so, I missed many opportunities -
              academic, social, and career-based. When I turned forty I decided
              I did not want to live my life in fear any more. So here I am,
              ready to embark on a scary, difficult, thrilling, creative, yet
              rewarding new new career path!
            </p>}
            <Button
              onClick={() => setTextToggle(!textToggle)}
              className="button"
            >
              Click Me{" "}
            </Button>
          </Col>
        </Row>
      </Container>
    </main>
  );
}
