import React, {useContext} from 'react'
import {UserDispatch} from './App'

const User = React.memo(function User({user}) {
  const {username, email, id, active} = user 
  const dispatch = useContext(UserDispatch)
  return (
    <div>
      <b 
        style={{
          color: active ? '#81C147' : 'black',  
          cursor: 'pointer'
        }} 
        onClick={() => dispatch({
          type: 'TOGGLE_USER',
          id
        })}
      >{username}</b> <span>({email})</span>
      <button onClick={() => dispatch({
        type: 'REMOVE_USER',
        id
      })}>삭제</button>
    </div>
  )
})

function UserList({users}) {
  
  return (
    <>
      {
        users.map(
          user => (
            <User 
              user={user} 
              key={user.id} 
              />
          )
        )
      }
    </>
  )
}

export default React.memo(UserList,
  (prevProps, nextProps) => nextProps.users === prevProps.users)