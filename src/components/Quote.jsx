import {Container, Row, Col } from "react-bootstrap"

export default function Quote() {

return (
    <section>
        <Container className="quote-container" fluid>
            <Row className="text-center">
                <Col>
                <p><q>Tell me and I forget, teach me and I may remember, involve me and I learn.</q></p> - Ben Franklin
                </Col>
            </Row>
        </Container>
    </section>
    )

}