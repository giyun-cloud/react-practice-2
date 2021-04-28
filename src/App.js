import React, {useRef, useState, useMemo} from 'react'
import CreateUser from './CreateUser';
import UserList from './UserList';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...')
  return users.filter(user => user.active).length
}
// useMemo 효과 체험을 위한 함수를 만들어줌 active가 트루인 개수를 반환해주는 함수

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  })
  const {username, email} = inputs

  const onChange = e => {
    const {name, value} = e.target
    setInputs({
      ...inputs,
      [name]: value
    })
  }

  const [users,setUsers] = useState([
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
  ])

  const nextId = useRef(4)

  const onCreate = () => {
    const user = {
      id: nextId.current,
      ...inputs
    }
    setUsers([...users, user])
    // setUsers(users.concat(user))
    setInputs({
      username: '',
      email: '',
    })
    nextId.current += 1
  }

  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id))
  }

  const onToggle = id => {
    setUsers(users.map(user => user.id === id ? {...user, active: !user.active} : user))
  }

  const count = useMemo(() => countActiveUsers(users), [users])
  // 첫번째 인자로는 함수를 넣어야함, 그다음 인자는 deps임
  // 그러므로 users안의 값이 바뀔때만 함수가 호출됨
  // useMemo를 안하면 users의 값이 바뀌지 않을때도 호출됨.

  return (
    <>
      <CreateUser 
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList 
        users={users} 
        onRemove={onRemove} 
        onToggle={onToggle} 
        />
      <div>활성 사용자수 : {count}</div>
    </>
  );
}

export default App;
