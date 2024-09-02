import {useState} from 'react'

export function TwitterFollowCard({userName, children, initialisFollowing}){
    const [isFollowing, setFollowing] = useState(initialisFollowing);
    const text = isFollowing ? 'following' : 'follow';
    const buttonClass = isFollowing ? 'tw-follow-button isfollowing' : 'tw-follow-button';

    const handleClick = ()=>setFollowing(!isFollowing);
      
    
    return(
        <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img 
            className='tw-followCard-avatar'
            alt="foto de una persona"
             src={`https://unavatar.io/${userName}`}/>
            <div className='tw-followCard-info'>
                <strong>{children}</strong>
                <span>{userName}</span>
            </div>
        </header>
        <aside>
            <button
            className={buttonClass} onClick={handleClick}>
               <span
               className='tw-follow-button-follow'> {text} </span>
                <span
                className='tw-follow-button-notfollowed'>
                    unfollow
                </span>
            </button>
        </aside>
    </article>
    )
}