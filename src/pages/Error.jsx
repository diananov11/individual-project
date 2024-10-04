import { NavLink } from "react-router-dom"


const Error = () => {
  return (
    <>
      <div className="error min-vh-100 text-white text-center align-content-center" >
        <h1> OOOPSS!! this file doesn't exist </h1>
        <h3>404 - Page Not Found..</h3>
        <NavLink to='/' className="text-white">Back to home</NavLink>
      </div>
    </>
  )
}

export default Error
