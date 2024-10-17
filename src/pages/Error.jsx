import { NavLink } from "react-router-dom"


const Error = () => {
  return (
    <div className="bg-[url('assets/error.jpg')] bg-center bg-cover bg-no-repeat h-screen content-center text-center" >
      <h1 className="text-4xl fw-bold">Error 404 Not Found</h1>
      <NavLink to="/" className="underline"> Back to todo apps</NavLink>
    </div>
  )
}

export default Error
