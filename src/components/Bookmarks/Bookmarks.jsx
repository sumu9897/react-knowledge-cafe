import React from 'react'
import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark'

const Bookmarks = ({bookmarks,readingTime}) => {
  return (
    <div className="md:w-1/3 ml-4 mt-2 pt-4">
        <div className='text-3xl text-center font-semibold bg-purple-200 text-blue-600 p-4 rounded-xl mb-4'>
            Spent time on read : {readingTime} min
        </div>
        <div className='bg-gray-200 pt-8  pl-4 pr-4  pb-6 rounded-xl' >

        <h2 className="text-3xl font-semibold">BookMarked Blogs : {bookmarks.length}</h2>
      {
        bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}/>)
      }
        </div>
      
    </div>
  )
}

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime :PropTypes.number
}

export default Bookmarks
