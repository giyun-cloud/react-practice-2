import React from 'react'

function User({user, onRemove, onToggle}) {
  const {username, email, id, active} = user 
  return (
    <div>
      <b 
        style={{
          color: active ? '#81C147' : 'black',  
          cursor: 'pointer'
        }} 
        onClick={() => onToggle(id)}
      >{username}</b> <span>({email})</span>
      <button onClick={() => onRemove(id)}>삭제</button>
    </div>
  )
}

function UserList({users, onRemove, onToggle}) {
  
  return (
    <>
      {
        users.map(
          user => (
            <User 
              user={user} 
              key={user.id} 
              onRemove={onRemove}
              onToggle={onToggle}
              />
          )
        )
      }
    </>
  )
}

export default UserList