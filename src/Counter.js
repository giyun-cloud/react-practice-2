import React, {useReducer} from 'react'

// 우선 reducer을 만들어준다. 이런식으로 action.type을 기준으로 switch를 만든다
function reducer(state, action) {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      throw new Error('Unhandled action')
      // case로 설정한것외에 type을 넣으면 호출하는것이 default
  }
}

function Counter() {
  const [number, dispatch] = useReducer(reducer, 0)
  // useReducer(함수이름, 초기값) dispatch가 type을 넣는 함수가된다
  const onIncrease = () => {
    dispatch({
      type: 'INCREMENT'
    })
  }
  const onDecrease = () => {
    dispatch({
      type: 'DECREMENT'
    })
  }
  // 이런식으로 사용해주면된다.
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  )
}
export default Counter