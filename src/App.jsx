import './App.css'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import PostBlog from './pages/PostBlog/PostBlog'
import ViewBlog from './pages/ViewBlog/ViewBlog'
import Home from './pages/Home/Home'

function App() {
  const [blogs, setBlogs] = useState(() => {
    const savedBlogs = localStorage.getItem('blogs')
    return savedBlogs ? JSON.parse(savedBlogs) : [
      { title: "titulo", author: "autor", body: "cuerpo", id: 1, user: { name: "usuario1", id: 1 } },
      { title: "titulo2", author: "autor2", body: "cuerpo", id: 2, user: { name: "usuario2", id: 2 } },
      { title: "titulo3", author: "autor3", body: "cuerpo", id: 3, user: { name: "usuario3", id: 3 } },
    ]
  })
  
  useEffect(() => {
    localStorage.setItem('blogs', JSON.stringify(blogs))
  }, [blogs])

  const addBlog = (newBlog) => {
    setBlogs([...blogs, { ...newBlog, id: blogs.length + 1 }])
  }
  
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-blue-600 text-white p-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-3xl font-bold">Mi Blog</h1>
            <input
              type="text"
              placeholder="Buscar..."
              value={searchTerm}
              onChange={handleSearch}
              className="px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
            />
            <nav className="space-x-4">
              <Link to="/" className="hover:underline">Inicio</Link>
              <Link to="/new-post" className="hover:underline">Nuevo Post</Link>
            </nav>
          </div>
        </header>
        <main className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home blogs={blogs} searchTerm={searchTerm} setBlogs={setBlogs} />} />
            <Route path="/posts/:id" element={<ViewBlog blogs={blogs} />} />
            <Route path="/new-post" element={<PostBlog addBlog={addBlog} />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
