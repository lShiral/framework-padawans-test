import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <Link to="/postagens">
        <div className="box">
          <img src={require("../assets/icons/post.png")} />
          Postagens
        </div>
      </Link>

      <Link to="/albums">
        <div className="box">
          <img src={require("../assets/icons/album.png")} />
          Albuns
        </div>
      </Link>

      <Link to="/todos">
        <div className="box">
          <img src={require("../assets/icons/todo.png")} />
          To-dos
        </div>
      </Link>
    </div>
  );
};

export default Home;
