import React, {useContext, useRef} from 'react'
import useInputs from './useInputs'
import {UserDispatch} from './App'

function CreateUser() {
  const dispatch = useContext(UserDispatch)
  const [{username, email} , onChange, reset] = useInputs({
    usename: '',
    email: ''
  })
  const nextId = useRef(4)

  const onCreate = () => {
    dispatch({
      type: "CREATE_USER",
      user: {
        id:nextId.current,
        username,
        email
      }
    })
    reset()
    nextId.current += 1
  }
  return (
    <div>
      <input 
        name="username" 
        placeholder="계정명" 
        value={username} 
        onChange={onChange}
        />
      <input 
        name="email" 
        placeholder="이메일" 
        value={email} 
        onChange={onChange}
      />
      <button onClick={onCreate}>등록</button>
    </div>
  )
}

export default React.memo(CreateUser)