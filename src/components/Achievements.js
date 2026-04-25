import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import "animate.css";

const Achievements = () => {
    const achievements = [
        {
            title: "Hackathon Winner",
            subtitle: "2nd Rank — Dev with AI Hackathon",
            detail: "Secured 2nd rank in Dev with AI Hackathon",
            accentColor: "#f0b232",
        },
        {
            title: "HackerRank 5-Star",
            subtitle: "Java Problem Solving",
            detail: "Recognised for exceptional problem-solving proficiency in Java",
            accentColor: "#00d9a6",
        },
        {
            title: "Postman API Expert",
            subtitle: "Student Expert — Certified",
            detail: "Postman API Fundamentals Student Certification Program",
            accentColor: "#c471f5",
        },
        {
            title: "GraphQL Developer",
            subtitle: "Associate — Certified",
            detail: "Apollo GraphQL Developer Associate Certification Program",
            accentColor: "#fa71cd",
        },
    ];

    return (
        <section className="achievements" id="achievements">
            <Container>
                <Row>
                    <Col xs={12}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Achievements</h2>
                                    <p className="achievements-subtitle">Recognition and certifications earned along the journey.</p>
                                    <Row className="achievements-grid">
                                        {achievements.map((item, index) => (
                                            <Col key={index} md={6} lg={3} xs={12} className="mb-4">
                                                <div className="achievement-card">
                                                    <div
                                                        className="achievement-accent"
                                                        style={{ background: item.accentColor }}
                                                    ></div>
                                                    <h4>{item.title}</h4>
                                                    <h5>{item.subtitle}</h5>
                                                    <p>{item.detail}</p>
                                                </div>
                                            </Col>
                                        ))}
                                    </Row>
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Achievements;
