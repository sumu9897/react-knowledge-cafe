import { useState } from 'react'

import './App.css'
import Header from './components/Header/Header';
import Blogs from './components/Blogs/Blogs';
import Bookmarks from './components/Bookmarks/Bookmarks';

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmark = blog =>{
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }


  return (
    <>
      
      <Header/>
      <div className='md:flex max-w-7xl mx-auto' >
        <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>

      <Bookmarks bookmarks={bookmarks}/>
      </div>
      
      
    </>
  )
}

export default App
