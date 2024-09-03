import './App.css'
import { TwitterFollowCard }   from './TwitterFollowCard'
import { Like } from './Like'
import { Writing } from './Writing'

export function App(){
 
    const users=[
        {
            userName: 'Jose',
            name: 'Jose Angel Duran',
            initialisFollowing: true
        },
{        userName: 'junior',
        name: '   Junior Angel Dura',
        initialisFollowing: false
    },
    {
        userName: 'jorge',
        name: 'Jorgito el loco',
        initialisFollowing: false
    }
    ]
    return (
        <>
        <div className='div-prueba'>
     {
        users.map(({userName, name, initialisFollowing})=>(
        <TwitterFollowCard
        key={userName}
        userName={userName}
        isFollowing={initialisFollowing}
        >
            {name}
            </TwitterFollowCard>
 
       )
        )
}
        </div>


<div className="like">
    <Like />


</div>
 <div className="writing">
    <Writing/>
 </div>
</>
    )
}