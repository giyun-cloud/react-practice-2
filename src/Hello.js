import React from 'react'

function Hellow({color, name, isSpecial}) { 
  return (
    <>
      <div style={{color}}>Hello React~~! {name}</div>
      {/* 객체 데이터에 a='red'라는 변수를 {a}라고 넣으면 알아서 {a:'red'}로 바뀜 */}
      {/* 그 특성을 이용해 객체 분해 할당으로 받아온 color = 'red'라는 변수를 {color} -> {color:'red'}로 사용가능 */}
      <div>{isSpecial? <b>*</b>: null}isSpecial use~!! true=*, false=none {name}</div>
      {/* 삼향연산자를 이용해 사용할 수도 있음, null,falsy값들은 그냥 아무것도 없게하겠다는것임 */}
      <div>{isSpecial && <b>*</b>}isSpecial use~!! true=*, false=none {name}</div>
      {/* 논리연산을 이용해서 위와 같은 효과를 더 간단히 줄 수 있음 다만, 이것을 이용하면 반대의경우 빈값을 반환함 */}
    </>
  )
}

Hellow.defaultProps = {
  nam: '이름없음'
}
// 함수바깥에다가 선언 해당키값의 기본값을 설정가능 키를 지정안해도 알아서 키와 값이생겨남.
export default Hellow