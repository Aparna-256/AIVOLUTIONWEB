import { Container, Row, Col } from "react-bootstrap";
import EM from "../assets/icons/Event.png";
import Tech from "../assets/icons/tech.png";
import SM from "../assets/icons/social-media.png";
import photo from "../assets/icons/photo.png";
import content from "../assets/icons/Content.png";
import pr from "../assets/icons/pr.png";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  return (
    <section className="skill" id="skills">
        <Container>
            <Row>
                <Col size={12}>
                    <div className="skill-bx wow zoomIn">
                        <h2>Departments</h2>
                        <p>AIvolution's departments focus on AI research, machine learning, neural networks, project development, and industry collaboration, working together to drive AI innovation and education.</p>
                        <Row className="departments-grid">
                            <Col xs={12} md={4} className="mb-4">
                                <div className="department-item">
                                    <div className="icon-wrapper">
                                        <img src={Tech} alt="Tech & Development" />
                                    </div>
                                    <h5>Tech &<br />Development</h5>
                                </div>
                            </Col>
                            <Col xs={12} md={4} className="mb-4">
                                <div className="department-item">
                                    <div className="icon-wrapper">
                                        <img src={SM} alt="Social Media Management" />
                                    </div>
                                    <h5>Social Media<br />Management</h5>
                                </div>
                            </Col>
                            <Col xs={12} md={4} className="mb-4">
                                <div className="department-item">
                                    <div className="icon-wrapper">
                                        <img src={photo} alt="Photography & Videography" />
                                    </div>
                                    <h5>Photography &<br />Videography</h5>
                                </div>
                            </Col>
                            <Col xs={12} md={4} className="mb-4">
                                <div className="department-item">
                                    <div className="icon-wrapper">
                                        <img src={EM} alt="Event Management" />
                                    </div>
                                    <h5>Event<br />Management</h5>
                                </div>
                            </Col>
                            <Col xs={12} md={4} className="mb-4">
                                <div className="department-item">
                                    <div className="icon-wrapper">
                                        <img src={content} alt="Design & Creative" />
                                    </div>
                                    <h5>Design &<br />Creative</h5>
                                </div>
                            </Col>
                            <Col xs={12} md={4} className="mb-4">
                                <div className="department-item">
                                    <div className="icon-wrapper">
                                        <img src={pr} alt="Public Relations" />
                                    </div>
                                    <h5>Public<br />Relations</h5>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
