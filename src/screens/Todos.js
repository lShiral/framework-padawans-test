import React, {useState,useEffect}  from 'react' 
import axios from 'axios'

const Todos = () => {

  const [todos, setTodos]  = useState([])
  useEffect(() => { 

    axios.get("https://jsonplaceholder.typicode.com/todos").then((data) => {

    console.log(data)
    setTodos(data.data)

    } )

  },[]) 

  return (
   <table>
     <thead>
       <tr>
       <th>ID do usuário</th>
       <th>ID</th>
       <th>Título</th>
       <th>Completo?</th>
       </tr>  
     </thead>

     <tbody>
       {todos.map((todo) => {
         return(
          <tr>
          <td>{todo.userId}</td>
          <td>{todo.id}</td>
          <td>{todo.title}</td>
          <td>{todo.completed ? 'Sim' : 'Não' }</td>
          </tr>)
       } )} 
       
     </tbody>

   
   </table>
  )
}

export default Todos