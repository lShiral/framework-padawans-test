import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DataTable from "../components/DataTable";

const Todos = () => {

  const [todos, setTodos] = useState([])
  useEffect(() => {

    axios.get("https://jsonplaceholder.typicode.com/todos").then((data) => {

      setTodos(data.data)

    })

  }, [])

  const headers = ["ID do usuário", "ID", "Título", "Conteúdo"]

  return (
    <div className="table-container">
      <DataTable headers={headers} data={todos}></DataTable>
    </div>
  );
};

export default Todos