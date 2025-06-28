import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import projImg1 from "../assets/img/social-img.png";
import projImg2 from "../assets/img/ecommerce-img.png";
import projImg3 from "../assets/img/output_portfolioimg.png";
import projImg4 from "../assets/img/output_maze.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackMind from "../assets/img/TrackMind.jpg"
import DailyTip from "../assets/img/DailyTip.jpg"
import FinanceFlow from "../assets/img/FinanceFlow.jpg"
import droid from "../assets/img/24-droid.jpg"
import "animate.css";
import TrackVisibility from "react-on-screen";
import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "TrackMind",
      description: "Development",
      imgUrl: TrackMind,
      projectUrl: "#",
    },
    {
      title: "FinanceFlow",
      description: "Development",
      imgUrl: FinanceFlow,
      projectUrl: "https://financeflow24.vercel.app/",
      
    },
    {
      title: "DailyTips",
      description: "Development",
      imgUrl: DailyTip,
      projectUrl:"https://dailytips.vercel.app"
    },
    {
      title: "AI-Wrapper",
      description: "Development",
      imgUrl: droid,
      projectUrl: "https://24-droid.vercel.app/",
      
    },
    {
      title: "Social media website",
      description: "Development",
      imgUrl: projImg1,
      projectUrl: "https://github.com/24-droid/social-media-website",
    },
    {
      title: "E-commerce Website",
      description: "Development",
      imgUrl: projImg2,
      projectUrl: "https://24-droid.github.io/E-commerce-Website/",
    },
    {
      title: "Maze Generator",
      description: "Development",
      imgUrl: projImg4,
      projectUrl:"https://24-droid.github.io/dsa-mini-project/",
    },
    {
      title: "TrackMind",
      description: "Development",
      imgUrl: TrackMind,
      projectUrl: "#",
    },
    {
      title: "FinanceFlow",
      description: "Development",
      imgUrl: FinanceFlow,
      projectUrl: "https://financeflow24.vercel.app/",
      
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
                  <p>Browse some of my recents projects.</p>
                  <Tab.Container id="projjects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
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
                          {projects.map((project, index) => {
                            if (index < 3) {
                              return <ProjectCard key={index} {...project} />;
                            }
                            return null;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects.map((project, index) => {
                            if (index >= 3) {
                              return <ProjectCard key={index} {...project} />;
                            }
                            return null;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                      <Row>
                          {projects.map((project, index) => {
                            if (index >= 3) {
                              return <ProjectCard key={index} {...project} />;
                            }
                            return null;
                          })}
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
