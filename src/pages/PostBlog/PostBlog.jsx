import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function PostBlog({ addBlog }) {
  const navigate = useNavigate()
  const [newBlog, setNewBlog] = useState({
    title: "",
    author: "",
    body: "",
    user: { id: localStorage.getItem("id") }
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    addBlog(newBlog)
    navigate('/')
  }

  const handleChange = (e) => {
    setNewBlog({
      ...newBlog,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Post Blog</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            name="title"
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <input
            type="text"
            placeholder="Author"
            name="author"
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <textarea
            placeholder="Body"
            name="body"
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            Post
          </button>
        </form>
      </div>
    </div>
  )
}

export default PostBlog
