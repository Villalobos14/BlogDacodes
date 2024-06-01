import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function PostBlog({ addBlog }) {
    const navigate = useNavigate()
    const [newBlog, setNewBlog] = useState({title:"",author:"",body:"",user:{id:localStorage.getItem("id")}})
    const handleSubmit = (e) => {
        e.preventDefault()
        addBlog(newBlog);
        navigate('/');
    }
    const handleChange = (e) => {
        setNewBlog({
            ...newBlog,
            [e.target.name]: e.target.value
        })
    }
  return (
    <>
    <h1>PostBlog</h1>
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" name="title"  onChange={handleChange}/>
        <input type="text" placeholder="Author" name="author" onChange={handleChange} />
        <textarea placeholder="Body" name="body" onChange={handleChange} ></textarea>
        <button type="submit">Post</button>
    </form>
    </>
  )
}

export default PostBlog