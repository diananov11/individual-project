import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const CardMentor = ({ item }) => {

  const navigate = useNavigate()
  return (
    <>
      <Col md={3} sm={6}>
        <Card style={{ width: '15rem' }} className="d-block mx-auto my-3">
          <Card.Img variant="top" src={item.avatar} />
          <Card.Body className="text-center">
            <Card.Title className="my-1"> {item.name}</Card.Title>
            <p className="my-1">{item.universitas}</p>
            <small className="d-block my-0">{item.asalDaerah}</small>
            <Button variant="primary" className="m-2 w-75" onClick={() => navigate(`/detail/${item.id}`)} >Info</Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  )
}

export default CardMentor
