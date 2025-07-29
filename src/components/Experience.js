// src/components/Experience.js

import { Container, Row, Col } from "react-bootstrap";
import ExperienceCard from "./ExperienceCard"; // Make sure the path is correct
import colorSharp2 from "../assets/img/color-sharp2.png";
import machao from "../assets/img/machao.png";
import soundsafe from "../assets/img/SoundSafe.jpeg";
import React from "react";

const Experience = () => {
  // Your experience data remains the same
  const experiences = [
    {
      title: "Web Developer Intern",
      company: "SoundSafe.ai | Remote",
      date: "Feb 2025 - Present",
      imageUrl: soundsafe,
      descriptionPoints: [
        "Architected and optimized full-stack features, contributing to enhanced platform functionality.",
        "Collaborated in an Agile environment to build new UI components using <b>React</b>.",
        "Collaborated closely with founders to build and launch an MVP for an AI-driven platform.",
        "Developed end-to-end features using <b>Next.js</b>",
        "Integrated chatbot assistance with a custom NLP-based fallback.",
        "Integrated NLP based intent classifier."
      ],
    },
    {
      title: "Freelance Frontend Developer",
      company: "Self-Employed | Remote",
      date: "Jan 2025 - Present",
      descriptionPoints: [
        "Engineered a responsive author portfolio using <b>React</b> and <b>Tailwind CSS</b>",
        "Resulting in a <b>30% increase in user engagement</b>.",
        "Managed end-to-end project lifecycle, from client consultation and UI/UX design to final deployment.",
        "Implemented web performance optimization techniques, including image compression and code splitting"
      ],
    },
    {
      title: "JEE Exam Mentor",
      company: "Machao Mentorship Program",
      date: "Dec 2023 - May 2024",
      imageUrl: machao,
      descriptionPoints: [
        "Mentored a cohort of <b>60 students</b> for the JEE Advanced Exam, developing personalized study plans.",
        "Demonstrated leadership and communication by coordinating with IIT mentors for academic guidance.",
      ],
    },
  ];

  return (
    <section className="experience" id="experience">
      <Container>
        <Row>
          <Col xs={12}>
                  <h2>Experience</h2>
                  <p>My professional journey and key accomplishments.</p>
                  
                  {/* The new responsive grid starts here */}
                  <Row className="experience-grid">
                    {experiences.map((experience, index) => (
                      // Each experience gets its own column
                      // md={4} means it takes up 1/3 of the width on medium screens and larger
                      // On small screens, they will stack automatically
                      <Col key={index} md={4} sm={6} xs={12} className="mb-4">
                        <ExperienceCard {...experience} />
                      </Col>
                    ))}
                  </Row>

              
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section>
  );
};

export default Experience;