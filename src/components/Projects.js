
import React from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const webProjects = [       //webinar
    {
      title: "Preperation Mantra",
      description: "Webinar Event",
      imgUrl: "https://ik.imagekit.io/7lzd57wvb/Aivolutions/WEBINAR%202.jpeg?updatedAt=1758033819638",
    },
    {
      title: "Orientation 2024",
      description: "Webinar Event",
      imgUrl: "https://ik.imagekit.io/7lzd57wvb/Aivolutions/WEBINAR%201.jpeg?updatedAt=1758033819547",
    },
    {
      title: "Enterprises Application Suite",
      description: "Webinar Event",
      imgUrl: "https://ik.imagekit.io/7lzd57wvb/Aivolutions/WEBINAR%203.jpeg?updatedAt=1758033819463",
    },
  ];

  const mobileProjects = [ // Competitions
    {
      title: "Codex Hackathon",
      description: "Competition Event",
      imgUrl: "https://ik.imagekit.io/7lzd57wvb/Aivolutions/Competiton%201.jpeg?updatedAt=1758033819552",
    },
  ];



  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col xs={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Events</h2>
                <p>Explore AIvolution's AI-focused events and initiatives!</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-4 mb-md-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first" className="webinar-tab">
                        <span className="tab-icon">📺</span>
                        <span className="tab-text">Webinars</span>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second" className="competition-tab">
                        <span className="tab-icon">🏆</span>
                        <span className="tab-text">Competitions</span>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row className="g-3">
                        {webProjects.map((project, index) => (
                          <Col xs={12} sm={6} lg={4} key={index}>
                            <ProjectCard {...project} />
                          </Col>
                        ))}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row className="g-3">
                        {mobileProjects.map((project, index) => (
                          <Col xs={12} sm={6} lg={4} key={index}>
                            <ProjectCard {...project} />
                          </Col>
                        ))}
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
};
