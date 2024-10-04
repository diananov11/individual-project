import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardMentor = ({ item }) => {
  return (
    <>
      <Col md={3} sm={6}>
        <Card style={{ width: '15rem' }} className="d-block mx-auto my-3">
          <Card.Img variant="top" src={item.avatar} />
          <Card.Body className="text-center">
            <Card.Title className="my-1"> {item.name}</Card.Title>
            <p className="my-1">{item.universitas}</p>
            <small className="d-block my-0">{item.asalDaerah}</small>
            <div className="m-2">
              <Button variant="primary" className="mx-2" >Info</Button>
              <Button variant="primary">Daftar</Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </>
  )
}

export default CardMentor
