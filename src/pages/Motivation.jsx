import Typewriter from 'typewriter-effect';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMotivationAI } from '../redux/motivationSlice';
import { Container } from 'react-bootstrap';
import Swal from 'sweetalert2';

const Motivation = () => {
  const [input, setInput] = useState('')
  const dispatch = useDispatch();
  const { isLoading, isFill, motivations } = useSelector((state) => state.motivation);

  const handleInput = (e) => {
    e.preventDefault();
    if (input === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Something went wrong! Type your name and city first`,
      });
    } else {
      dispatch(getMotivationAI(input));
    }
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
        {isFill ?
          < h4 className='text-primary'>
            <Typewriter
              options={{
                strings: isLoading ? `Generate Motivations for ${input}✨` : motivations,
                autoStart: true,
                delay: 1,
                cursor: "",
              }}
            />
          </h4>
          :
          <h5 className='text-center'>
            <Typewriter
              options={{
                strings: "Hello! Welcome to SheMentorAI, your personal companion on the journey to achieving your scholarship dreams. We're here to inspire, guide, and empower you every step of the way with personalized motivation tailored just for you🎀",
                autoStart: true,
                delay: 20,
                // cursor: "",
              }} />
          </h5>

        }
      </Container>
    </div>
  )
}

export default Motivation
