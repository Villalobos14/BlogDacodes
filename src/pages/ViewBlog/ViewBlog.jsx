import React from 'react'
import { useParams } from 'react-router-dom'

function ViewBlog({ blogs }) {
  const { id } = useParams()
  const blog = blogs.find((blog) => blog?.id === parseInt(id))

  if (!blog) {
    return <div className="text-center text-gray-600">Post no encontrado</div>
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl">
        <h2 className="text-3xl font-bold mb-4">Título: {blog.title}</h2>
        <p className="text-xl text-gray-700 mb-2">Autor: {blog.author}</p>
        <p className="text-gray-600 leading-relaxed">Contenido: {blog.body}</p>
      </div>
    </div>
  )
}

export default ViewBlog
