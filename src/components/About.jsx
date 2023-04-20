import { Container, Row, Col } from "react-bootstrap"


export default function About() {

    return (
        <main>
            <Container className="text-center">
                <Row className="aboutrow">
                    <Col sm={12} md={6}>
                        <img
                        src="/images/headshot-square.jpg"
                        className="rounded-circle"
                        alt="Profile Picture"
                        />
                    </Col>

                    <Col> 
                    <h1>Meghann Stamper</h1>
                    <p> I spent most of my life avoiding things that I deemed “scary,” or “too difficult;” in doing so, I missed many opportunities - academic, social, and career-based. When I turned forty I decided I did not want to live my life in fear any more. So here I am, ready to embark on a scary, difficult, thrilling, creative, yet rewarding new new career path!</p>
                    </Col>
                </Row>
            </Container>
        </main>

    )
}