import Logo from "./Logo"
import CartWidget from "./CartWidget"
import "./navbar.css"

function Navbar() {
  return (
    <div className="navbar">
        <Logo/>
            <ul className="navbar-links">
                <li className="navbar-item">
                    <a href="">Mujeres</a> 
                </li>
                <li className="navbar-item">
                    <a href="">Hombres</a> 
                </li>
                <li className="navbar-item">
                    <a href="">Niños</a> 
                </li>
            </ul>
    <CartWidget/>
    </div>
  )
}

export default Navbar