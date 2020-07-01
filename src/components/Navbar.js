import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navBar">

      <Link to="/home">Home </Link>

      <div className="navigationSpace">
        <Link to="/postagens">
          Postagens</Link>

        <Link to="/albums">
          Albuns</Link>

        <Link to="/todos">
          To-dos </Link>
      </div>
    </nav>
  )
}

export default Navbar