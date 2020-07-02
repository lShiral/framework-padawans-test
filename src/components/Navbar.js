import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navBar">

      <Link to="/">Home </Link> {/*colocando to="/" aqui e no App.js assim que abrir a página ela já vai estar em Home, sem precisar clicar no Menu */}

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