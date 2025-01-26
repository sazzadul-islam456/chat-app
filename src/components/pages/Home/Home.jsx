import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import SearchBar from '../SearchBar/SearchBar'
import GroupList from '../GroupList/GroupList'
import FriendRequest from '../FriendRequest/FriendRequest'
import Friends from '../Friends/Friends'
import MyGroups from '../MyGroups/MyGroups'
import UserList from '../UserList/UserList'
import BlockedUsers from '../BlockedUsers/BlockedUsers'

const Home = () => {
  return (
    <div>
      <div className=" flex overflow-hidden ">
      <Sidebar />
      <div className="">
      <SearchBar />
      <GroupList />
      <FriendRequest /> 
      </div>
      <div className="">
      <Friends />
      <MyGroups />
      </div>
      
      <div className="">
      <UserList />
      <BlockedUsers />
      </div>
      </div>
      
    </div>
    
  )
}

export default Home