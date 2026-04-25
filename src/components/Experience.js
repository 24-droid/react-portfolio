import { Container, Row, Col } from "react-bootstrap";
import ExperienceCard from "./ExperienceCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import machao from "../assets/img/machao.png";
import soundsafe from "../assets/img/SoundSafe.jpeg";
import React from "react";

const Experience = () => {
  const experiences = [
    {
      title: "Backend App Developer Intern",
      company: "The Siblings Corp | Remote",
      date: "Sep 2025 - Dec 2025",
      descriptionPoints: [
        "Contributed to the development of a hybrid mobile application by building <b>scalable backend services</b>.",
        "Developed RESTful APIs using <b>Node.js</b> and integrated MongoDB for secure data management.",
        "Collaborated with frontend teams using <b>Git/GitHub workflow</b> to ensure smooth integration.",
      ],
    },
    {
      title: "Web Developer Intern",
      company: "SoundSafe.ai | Remote",
      date: "Feb 2025 - Aug 2025",
      imageUrl: soundsafe,
      descriptionPoints: [
        "Developed and optimized web applications for <b>SoundSafe.ai</b>, enhancing user experience.",
        "Collaborated directly with founders to design and deliver <b>BookGalena</b>, an AI-powered MVP.",
        "Built core features including itinerary generation, local insights, and <b>real-time mapping</b>.",
        "Integrated <b> NLP-based chatbot</b> assistance and itinerary updates.",
      ],
    },
    {
      title: "Freelance Full Stack Developer",
      company: "Self-Employed | Remote",
      date: "Jan 2025 - Present",
      descriptionPoints: [
        "Developed and maintained a website for an author using <b>React</b>, improving user engagement by <b>30%</b>.",
        "Built a full-stack marketplace web application for a US-based client.",
        "Collaborated with clients to design and implement custom web solutions with <b>responsive interfaces</b>.",
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

            <Row className="experience-grid">
              {experiences.map((experience, index) => (
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