import css from './FriendList.module.css';
import FriendListItem from './FriendListItem'


export default function FriendList({friends}) {
    return (<ul className={css.friend_list}>
        {friends.map(friend => {
            return <li key={friend.id}>
                <FriendListItem
                    name={friend.name}
                    avatar={friend.avatar}
                    isOnline={friend.isOnline}
                />
            </li>
        })}</ul>)}
	
    

