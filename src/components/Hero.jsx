import { Button, Col, Container, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
  const navigate = useNavigate()
  return (
    <>
      <Container fluid className="pt-5 mt-2 px-0">
        <Row>
          <Col >
            <div className=" px-3 d-flex flex-column justify-content-center align-items-center vh-100 text-center">
              <h1>Mentorship and Motivation at Your Fingertips</h1>
              <p className="text-muted">Get matched with a mentor who understands your journey, or generate personalized motivation with a simple click. Your success starts here.</p>
              <div>
                <a href="#mentor" className="btn btn-outline-primary mx-2">Find Mentors</a>
                <Button onClick={() => navigate('/motivation')} className="btn-primary">Get Motivated Now <FaArrowRightLong /></Button>
              </div>
            </div>
          </Col>
          <Col className="d-none d-md-block">
            <div className="hero  fluid">
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Hero
