import React, { useState, useEffect } from 'react'
/*useState Serve para armazenar e alterar estados do componente*/
/*useEffect define e configura o ciclo de vida do componente*/
import axios from 'axios'

const Posts = () => {

  const [posts, setPosts] = useState([])
  useEffect(() => {

    axios.get("https://jsonplaceholder.typicode.com/posts").then((data) => {

      console.log(data)
      setPosts(data.data)

    })

  }, [])

  return (

    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>ID do usuário</th>
            <th>ID</th>
            <th>Título</th>
            <th>Conteúdo</th>
          </tr>
        </thead>

        <tbody>
          {/* percorre todas as postagens na variável posts */}
          {posts.map((post) => {
            return (
              <tr>
                <td>{post.userId}</td>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
              </tr>)
          })}

        </tbody>
      </table>
    </div>
  )
}

export default Posts