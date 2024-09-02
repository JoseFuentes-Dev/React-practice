import {useState} from 'react'

export function Like(){
    const [likes, setLikes]=useState(0);
    const handleClick = () => setLikes(likes + 1);

    const dislikeClick = () => {
        if (likes > 0) {
            setLikes(likes - 1);
        }
    };
    

    return(
        <>
        <button
        onClick={handleClick}
        className='like-btn'>
    </button>
    <span
      className='span-cont'>
        {likes}
      </span>
     <span 
     className='span-likes'>
        {likes <= 1 ? 'Like' : 'Likes'}
     </span>
     <button
        onClick={dislikeClick}
        className='dislike-btn'>
    </button>
     </>
    )
}