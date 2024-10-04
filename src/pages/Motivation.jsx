import Typewriter from 'typewriter-effect';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMotivationAI } from '../redux/motivationSlice';
import { Container } from 'react-bootstrap';

const Motivation = () => {
  const [input, setInput] = useState('')
  const dispatch = useDispatch();
  const { isLoading, motivations } = useSelector((state) => state.motivation);

  const handleInput = (e) => {
    e.preventDefault();
    dispatch(getMotivationAI(input));
  }

  return (
    <div className='mt-5 pt-5 min-vh-100'>
      <h2 className='text-center'>AI Motivation 🙌</h2>
      <div className='w-75 mx-auto'>
        <Form className="mt-5 pt-5 d-flex" onSubmit={handleInput}>
          <Form.Control
            placeholder="insert your name and city"
            aria-label="insert your name and city"
            aria-describedby="basic-addon2"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button type="submit" variant="outline-primary" id="button-addon2">
            Generate
          </Button>
        </Form>
        <small className='text-muted my-0'>e.g: Diana - Papua</small>
      </div>

      <Container className="mt-5 w-75 mx-auto">
        <div>
          {
            <h4 className='text-primary'>
              <Typewriter
                options={{
                  strings: isLoading ? `Generate Motivations for ${input}` : motivations,
                  autoStart: true,
                  delay: 1,
                  cursor: "",
                }}
              /></h4>
          }
        </div>
      </Container>

    </div>
  )
}

export default Motivation
