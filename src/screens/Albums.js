import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DataTable from "../components/DataTable";

const Albums = () => {

  const [albums, setAlbums] = useState([])
  useEffect(() => {

    axios.get("https://jsonplaceholder.typicode.com/albums").then((data) => {

      console.log(data)
      setAlbums(data.data)

    })

  }, [])

  const headers = ["ID do usuário", "ID", "Título"];

  return (
    <div className="table-container">
      <DataTable headers={headers} data={albums}></DataTable>
    </div>
  );
};


export default Albums