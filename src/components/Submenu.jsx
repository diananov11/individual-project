import { NavLink } from "react-router-dom"

const Submenu = ({ item }) => {
  return (
    <>
      <li className="nav-item mx-2">
        <NavLink to={item.path} className={({ isActive }) =>
          isActive
            ? "text-decoration-none text-white"
            : "text-decoration-none text-body-secondary"
        }  >{item.menu}</NavLink>
      </li>
    </>
  )
}

export default Submenu
