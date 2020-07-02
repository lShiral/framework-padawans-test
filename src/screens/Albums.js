import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Albums = () => {

  const [albums, setAlbums] = useState([])
  useEffect(() => {

    axios.get("https://jsonplaceholder.typicode.com/albums").then((data) => {

      console.log(data)
      setAlbums(data.data)

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
          </tr>
        </thead>

        <tbody>
          {albums.map((album) => {
            return (
              <tr>
                <td>{album.userId}</td>
                <td>{album.id}</td>
                <td>{album.title}</td>
              </tr>)
          })}

        </tbody>
      </table>
    </div>
  )
}

export default Albums