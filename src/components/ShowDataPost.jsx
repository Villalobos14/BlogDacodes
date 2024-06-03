import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

function ShowDataPost({ blog, setEliminar }) {
  const [bandera, setBandera] = useState(false)

  useEffect(() => {
    if (localStorage && localStorage.getItem("id") == blog?.user.id) {
      setBandera(true)
      console.log("entro")
    } else {
      setBandera(false)
    }
  }, [blog])

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-blue-600 hover:text-blue-800">
        <Link to={`/posts/${blog.id}`}>{blog.title}</Link>
      </h2>
      <p className="text-gray-700 mt-2">{blog.author}</p>
      <p className="text-gray-600 mt-4">{blog.body}</p>
      {bandera && (
        <button
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
          onClick={() => {
            setEliminar({ eliminar: true, id: blog.id })
          }}
        >
          Eliminar
        </button>
      )}
    </div>
  )
}

export default ShowDataPost
