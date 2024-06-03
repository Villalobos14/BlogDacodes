import React from 'react'
import { Link } from 'react-router-dom'
import ShowDataPost from '../../components/ShowDataPost'
import { useState, useEffect } from 'react'

function Home({ blogs, searchTerm, setBlogs }) {
  const [eliminar, setEliminar] = useState({ eliminar: false, id: 0 })

  useEffect(() => {
    if (eliminar.eliminar) {
      const updatedBlogs = blogs.filter(blog => blog?.id !== eliminar.id)
      setBlogs(updatedBlogs)
      localStorage.setItem('blogs', JSON.stringify(updatedBlogs))
      setEliminar({ eliminar: false, id: 0 })
    }
  }, [eliminar, blogs, setBlogs])

  const filteredBlogs = blogs.filter(blog =>
    blog &&
    blog.title &&
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog, index) => (
            <div key={index} className="mb-6">
              <ShowDataPost blog={blog} setEliminar={setEliminar} />
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">No posts found.</p>
        )}
      </div>
    </div>
  )
}

export default Home
