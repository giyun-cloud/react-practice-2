import React, {useState} from 'react'

function Counter() {
  const [number, setNumber] = useState(0)
  // 배열 분해 할당으로 첫번째것 number에 두번째것 setNumber에 받아옴 number의 초기값은 ()안에 값임
  
  const onIncrease = () => {
    // setNumber(number+1)
    setNumber(n => n + 1)
    // 화살표 함수를 넣는 방법은 기존의값(현재의값)을 가져와서 업데이트 하는 방법을 정하는것이고
    // 최적화할때 props를 바꾸지않으면서 할때 필요하다.
  }
  const onDecrease = () => {
    setNumber(number - 1)
    // 이것은 업데이트 될값을 넣었다고 할 수 있다.
    // setNumber(n => n -1)
  }
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  )
}
export default Counter