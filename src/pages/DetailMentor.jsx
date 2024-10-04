import { useDispatch, useSelector } from "react-redux";
import { getDetailMentors } from "../redux/detailSlice";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import MentorInformation from "../components/MentorInformation";
import ProfileCard from "../components/ProfileCard";
import { Col, Container, Row } from "react-bootstrap";
import MentorSchedule from "../components/MentorSchedule";


const DetailMentor = () => {
  let { id } = useParams()
  const dispatch = useDispatch();
  const { isLoading, details } = useSelector((state) => state.detail);

  useEffect(() => {
    dispatch(getDetailMentors(id));
  }, []);



  return (
    <>
      <Container className="d-flex mt-5 pt-5">
        <div>
          <MentorInformation details={details} />
          <MentorSchedule details={details} />
        </div>
        <div className="d-none d-md-block ms-5">
          <ProfileCard details={details} />
        </div>
      </Container>
    </>

  )
}

export default DetailMentor
