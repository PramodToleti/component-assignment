import { Link } from "react-router-dom"

import "./index.css"

const Header = () => (
  <nav className="nav-bar">
    <ul className="nav-list-container">
      <Link to="/" className="nav-link">
        <li className="nav-item">Home</li>
      </Link>
      <Link to="/about" className="nav-link">
        <li className="nav-item">About</li>
      </Link>
    </ul>
  </nav>
)

export default Header
