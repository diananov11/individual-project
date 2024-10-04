import { Container, Row } from "react-bootstrap"
import CardMentor from "./CardMentor"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllMentors } from "../redux/mentorSlice";
import Loading from "./Loading";


const Content = () => {
  const dispatch = useDispatch();
  const { isLoading, mentors } = useSelector((state) => state.mentor);

  useEffect(() => {
    dispatch(getAllMentors());
  }, []);


  return (
    <>
      <h2 className="text-center" id="mentor">Our Mentors</h2>
      <Container>
        <Row>
          {isLoading ? <Loading /> : mentors.map((item) => <CardMentor item={item} key={item.id} />)}
        </Row>
      </Container>

    </>
  )
}

export default Content
