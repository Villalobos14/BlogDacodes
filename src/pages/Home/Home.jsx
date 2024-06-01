import React from 'react'
import { Link } from 'react-router-dom'
import ShowDataPost from '../../components/ShowDataPost'
import { useState,useEffect } from 'react'
function Home({ blogs, searchTerm }) {
    const [eliminar, setEliminar] = useState({eliminar:false,id:0})
    if(eliminar.eliminar){
        console.log(eliminar)
        delete blogs[eliminar.id-1];
    }
  return (
    <div>
      {blogs.filter(blog =>
          blog.title.toLowerCase().includes(searchTerm.toLowerCase())
        ).map((blog, index) => (
          <div key={index}>
            <ShowDataPost blog={blog} setEliminar={setEliminar} />
          </div>
        ))}
    </div>
  )
}

export default Home