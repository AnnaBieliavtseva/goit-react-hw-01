import css from '../FriendList/FriendList.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
return <div className={css.friend_item}>
  <img src={avatar} alt={name} width="48" />
    <p className={css.friend_name}>{name}</p>
    {isOnline ? (<p className={css.is_online}>Online</p>) : (<p className={css.is_offline}>Offline</p>)}
 </div>
}