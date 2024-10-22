import React, { useEffect, useState } from 'react'

export default function Blogs() {
    const [blogs,setBlogs] = useState([])
    
    useEffect(()=>{
        fetch('blogs.json')
        .then(response => response.json())
        .then(data => setBlogs(data))
    },[])
  return (
    <div className='md:w-2/3'>
      <h1 className='text-4xl'>
        Blogs :{blogs.length}
      </h1>
    </div>
  )
}

