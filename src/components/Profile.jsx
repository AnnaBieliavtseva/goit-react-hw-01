import css from './Profile.module.css';

 export default function Profile ({name:username, tag, location, image:avatar, stats: {followers, views, likes}}) {
  
   return <div className={css.profile_container}>
  <div className={css.profile_img_thumb}>
    <img className={css.profile_img}
      src={avatar}
        alt={username}
        width={80}
        height={80}
    />
    <p className={css.profile_name}>{username}</p>
       <p className={css.profile_top_text}>@{tag}</p>
    <p className={css.profile_top_text}>{location}</p>
  </div>

  <ul className={css.profile_list}>
    <li className={css.profile_list_item}>
      <span>Followers</span>
      <span className={css.profile_list_text}>{followers}</span>
    </li>
    <li className={css.profile_list_item}>
      <span>Views</span>
      <span className={css.profile_list_text}>{views}</span>
    </li>
    <li className={css.profile_list_item}>
      <span>Likes</span>
      <span className={css.profile_list_text}>{likes}</span>
    </li>
  </ul>
</div>
};

