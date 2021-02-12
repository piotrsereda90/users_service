import React from 'react'

const UsersNumber = ({users}) => {
  return (
    <div className='usersNumber'><p>Users number:{users.length}</p></div>
   );
}

export default UsersNumber;