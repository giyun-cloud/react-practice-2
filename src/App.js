import React, {useReducer, useMemo, createContext} from 'react'
import CreateUser from './CreateUser';
import UserList from './UserList';
import produce from 'immer'


function countActiveUsers(users) {
  return users.filter(user => user.active).length
}

const initialState = {
  users: [
    {
      id: 1,
      username: 'Amy',
      email: 'amy@naver.com',
      active: true,
    },
    {
      id: 2,
      username: 'Bang',
      email: 'bang@naver.com',
      active: false,
    },
    {
      id: 3,
      username: 'Coo',
      email: 'coo@naver.com',
      active: false,
    },
  ],
}

function reducer(state, action) {
  switch(action.type) {

    case 'CREATE_USER':
      return {
        users: state.users.concat(action.user)
      }
    case 'TOGGLE_USER':
      return {
        ...state,
        users: state.users.map(user => user.id === action.id 
          ? {...user, active: !user.active}
          : user
        )
      }
    case 'REMOVE_USER':
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.id)
      }
    default:
      throw new Error('Unhandled action')
  }
}

export const UserDispatch = createContext(null)

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  const {users} = state

  const count = useMemo(() => countActiveUsers(users), [users])

  return (
    <UserDispatch.Provider value={dispatch}>
      <CreateUser />
      <UserList users={users} />
      <div>활성 사용자수 : {count}</div>
    </UserDispatch.Provider>
  );
}

export default App;
