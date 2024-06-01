import React from 'react'
import { useParams } from 'react-router-dom';
function ViewBlog({blogs }) {
    const { id } = useParams();
  const blog = blogs.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return <div>Post no encontrado</div>;
  }
  return (
    <div>
      <h2>Titulo: {blog.title}</h2>
      <p>Autor: {blog.author}</p>
      <p>Contenido: {blog.body}</p>
    </div>
  )
}

export default ViewBlog