import Typewriter from 'typewriter-effect';

const Motivation = () => {
  return (
    <div>
      <Typewriter
        options={{
          strings: ['Hello', 'World'],
          autoStart: true,
          delay: 1
        }}
      />
    </div>
  )
}

export default Motivation
