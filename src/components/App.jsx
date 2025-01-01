import './App.css'
import userData from '../userData.json'
import friends from '../friends.json'
import Profile from './Profile'
import FriendList from './FriendsList'

function App() {

  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends}></FriendList>
    </>
  )
}

export default App
