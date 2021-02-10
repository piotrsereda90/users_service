import React from 'react'

import {connect} from 'react-redux'
import {fetchUsers} from '../containers/reducer/reducer_users'

const Users = ({users,fetchUsers}) => {

  !users&&fetchUsers()

  return (
  <div className='usersContainer'>
    {users.map((user)=> (
      <div key={user.login.uuid}>
        {user.name.first}
        {user.name.second}
        {<img src={ user.picture.large} alt="user_picture"/>}
      </div>
    ))}
  </div>
  );
}

const mapStateToProps =(state)=> ({
  users: state.users.users
})
const mapDispatchToProps =(dispatch)=> ({
  fetchUsers: ()=> dispatch(fetchUsers())
})
// const mapDispatchToProps ={
//   fetchUsers
// }

export default connect(mapStateToProps, mapDispatchToProps)(Users);