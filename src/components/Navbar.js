import React from 'react'
import {Link} from 'react-router-dom';


const Navbar = () => {
    return(
      <nav>
          <ul>
            <li>
              <Link to="/postagens">Postagens</Link>
            </li>
            <li>
              <Link to="/albums">Albuns</Link>
            </li>
            <li>
              <Link to="/todos">To-dos</Link>
            </li>
            <li>
              <Link to="/home">Home</Link>
            </li>
          </ul>
        </nav>
  
    )
}

export default Navbar