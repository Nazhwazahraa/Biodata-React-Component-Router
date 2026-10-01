import { Link } from 'react-router-dom'

function HeaderComponen() {
  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        ♡ Profil Nazhwa
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/documentation">Documentation</Link>
        <Link to="/contact">Contact</Link>
      </div>

    </nav>
  )
}

export default HeaderComponen