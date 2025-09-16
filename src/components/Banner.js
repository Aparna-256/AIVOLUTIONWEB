import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/cropped_circle_image.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Society", "Family" ];
  const period = 200;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7} className="order-2 order-md-1">
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                {/* <span className="tagline">Welcome to StartupSphere!</span> */}
                <h1>{`Welcome to AIvolution`} <span className="txt-rotate" dataPeriod="200" data-rotate='[ "a Society", "a Community" ]'><span className="wrap">{text}</span></span></h1>
                  <p>AIvolution is the official Artificial Intelligence Society of MAIT, Delhi - a vibrant community of curious, creative, and ambitious minds passionate about the world of AI and beyond.</p>
                  <a href="https://chat.whatsapp.com/IAwNmxi4lyG8z52Zh3QTbU?mode=ems_copy_t" target="_blank" rel="noopener noreferrer">
                  <button>Let’s Connect <ArrowRightCircle size={25} /></button>
                  </a>

              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5} className="order-1 order-md-2">
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img" className="rounded-circle"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
