import React, { useState, useEffect } from 'react'
/*useState Serve para armazenar e alterar estados do componente*/
/*useEffect define e configura o ciclo de vida do componente*/
import axios from 'axios'
import DataTable from "../components/DataTable";

const Posts = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {

    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((data) => {
      setPosts(data.data);

    })

  }, [])

  const headers = ["ID do usuário", "ID", "Título", "Conteúdo"]

  return (
    <div className="table-container">
      <DataTable headers={headers} data={posts}></DataTable>
    </div>
  );
};

export default Posts