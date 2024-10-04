import { NavLink } from 'react-router-dom'

const Footer = () => {

  return (
    <>
      <div className="container-fluid bg-primary px-0 mt-5">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top text-white px-2">
          <p className="col-sm-6 col-md-4 mb-0 text-white ">&copy; 2024 SheMentors</p>
          <img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/146/154/original/graduacion.png?1727977203" className="col-md-4  mx-auto" id="logo-footer" style={{ width: "2rem" }} alt="" />
          <ul className="nav col-sm-6 col-md-4 justify-content-end ">
            <li className="nav-item mx-2">
              <NavLink to='/' className="text-decoration-none text-white" >Home</NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink to='/favorite' className="text-decoration-none text-white" >Motivation</NavLink>
            </li>
          </ul>
        </footer>
      </div>
    </>
  )
}

export default Footer
