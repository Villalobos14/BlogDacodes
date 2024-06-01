import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect,useState } from 'react'
function ShowDataPost({blog,setEliminar}) {
    const [bandera, setBandera] = useState(false)
    useEffect(()=> {
        if(localStorage && localStorage.getItem("id") == blog?.user.id){
            setBandera(true)
            console.log("entro")
        }else{
            setBandera(false)
        }
    },[blog])
  return (
    <div>
        <h2><Link to={`/posts/${blog.id}`}>{blog.title}</Link></h2>
          <p>{blog.author}</p>
          <p>{blog.body}</p>
        {bandera && <button onClick={()=>{
            setEliminar({eliminar:true,id:blog.id})
        }}>Eliminar</button>}
    </div>
  )
}

export default ShowDataPost