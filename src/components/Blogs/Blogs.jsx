import React, { useEffect, useState } from 'react'
import Blog from '../Blog/Blog'

export default function Blogs({handleAddToBookmark }) {
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
      {
        blogs.map(blog => <Blog 
          key={blog.id} 
          blog={blog}
          handleAddToBookmark={() =>handleAddToBookmark(blog)} 
          ></Blog> )
      }
    </div>
  )
}

