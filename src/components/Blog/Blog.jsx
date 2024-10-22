import PropTypes from 'prop-types'; // ES6
import { IoBookmarksOutline } from "react-icons/io5";



const Blog = ({blog ,handleAddToBookmark}) => {
    const {title,cover, author, author_img,posted_date, reading_time,hashtags} = blog;
    return (
        <div className='mb-20'>
            <img className='w-full mb-8' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between mb-4'>
                <div className='flex'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='items-center'>
                    <span>{reading_time} min read</span>
                    <button 
                    onClick={handleAddToBookmark}
                    className='ml-2 text-2xl'><IoBookmarksOutline />
                    </button>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>
                {
                    hashtags.map((hash , index) => <span><a href=''>#{hash}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.protoTypes ={
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired
} 
export default Blog;