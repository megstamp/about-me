import { Container, Row, Col } from "react-bootstrap";

export default function Grid() {

    return(
        <section>
            <Container className="grid-container">
                <Row className="text-center">
                    <Col sm={12} md={4}>
                        <h2> Why did I choose BocaCode?</h2>
                        <p>Boca Code offers a rare chance to change one’s life so drastically in such a relatively short amount of time. After completing this course, I hope to find an internship position combining coding with project management. I look forward to the challenges, flexible working options, constant learning curve, and a high demand, high growth forecast. </p>
                    </Col>

                    <Col sm={12} md={4}>
                        <h2>What project am I excited to create?</h2>
                        <p>At this moment, I would really like to build an app that combines soft skills and social skills necessary for any work environment. In my previous career as an SLP, I regularly helped young adults with this topic and would love the opportunity to do so online.</p>
                    </Col>

                    <Col sm={12} md={4}>
                    <h2>What is my ideal workplace?</h2>
                    <p>My ideal type of work environment enforces a positive work culture. I believe employees should feel supported, engaged, and respected. I’m looking for a workplace where I can hone my fundamental skills while also being encouraged to learn new ones. I enjoy working individually and on a team, and in-person or remote.</p>
                    </Col>

                </Row>
            </Container>
        </section>
    )
}