import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import projImg1 from "../assets/img/social-img.png";
import projImg2 from "../assets/img/ecommerce-img.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackMind from "../assets/img/TrackMind.jpg";
import DailyTip from "../assets/img/DailyTip.jpg";
import FinanceFlow from "../assets/img/FinanceFlow.jpg";
import droid from "../assets/img/24-droid.jpg";
import Maze from "../assets/img/Maze.jpg";
import VibeSync from "../assets/img/VibeSync.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import React from "react";

const Projects = () => {
  const featuredProjects = [
    {
      title: "VibeSync AI",
      description: "MERN Stack · Gemini AI · iTunes API",
      imgUrl: VibeSync,
      projectUrl: "https://github.com/24-droid/VibeSync",
      tags: ["MERN", "Gemini AI", "Node.js", "MongoDB"],
    },
    {
      title: "TrackMind",
      description: "MERN Stack · AI/NLP · Tailwind CSS",
      imgUrl: TrackMind,
      projectUrl: "https://trackmind.vercel.app/",
      tags: ["MERN", "AI/NLP", "Tailwind"],
    },
    {
      title: "FinanceFlow",
      description: "MERN Stack · Google Gemini AI · Chart.js",
      imgUrl: FinanceFlow,
      projectUrl: "https://financeflow24.vercel.app/",
      tags: ["MERN", "Gemini AI", "Chart.js"],
    },
  ];

  const fullStackProjects = [
    {
      title: "AI-Wrapper",
      description: "React · Node.js · AI API Integration",
      imgUrl: droid,
      projectUrl: "https://24-droid.vercel.app/",
      tags: ["React", "Node.js", "AI"],
    },
    {
      title: "DailyTips",
      description: "MERN Stack · Dev.to API · Email Integration",
      imgUrl: DailyTip,
      projectUrl: "https://dailytips.vercel.app",
      tags: ["MERN", "Dev.to API", "Email"],
    },
    {
      title: "Social Media Website",
      description: "React · Node.js · MongoDB",
      imgUrl: projImg1,
      projectUrl: "https://github.com/24-droid/social-media-website",
      tags: ["React", "Node.js", "MongoDB"],
    },
  ];

  const otherProjects = [
    {
      title: "E-commerce Website",
      description: "HTML · CSS · JavaScript",
      imgUrl: projImg2,
      projectUrl: "https://24-droid.github.io/E-commerce-Website/",
      tags: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Maze Generator",
      description: "DSA · Canvas API · JavaScript",
      imgUrl: Maze,
      projectUrl: "https://24-droid.github.io/dsa-mini-project/",
      tags: ["DSA", "Canvas API", "JavaScript"],
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>Browse some of my recent projects.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">⭐ Featured</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">🛠 Full-Stack</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">💡 Other</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {featuredProjects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {fullStackProjects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {otherProjects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background"></img>
    </section>
  );
};

export default Projects;
