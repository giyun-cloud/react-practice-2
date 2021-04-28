import React, {useState, useRef} from 'react'
//useRef - 특정DOM 지정하고 싶을때 사용 or 렌더링없이 변수관리 하고 싶을때
function InputSample() {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: '',
  })
  const {name, nickname} = inputs 
  const onChange = e => {
    const {name, value} = e.target 
    setInputs({
      ...inputs,
      [name] : value,
    })    
  }

  const nameInput = useRef()

  const onReset = () => {
    setInputs({
      name: '',
      nickname: '',
    })
    nameInput.current.focus()
    //nameInput이 설정된곳을 포커스하겠다라는뜻
  }

  return (
    <>
      <input 
        name="name" 
        placeholder="이름"  
        onChange={onChange}
        value={name}
        ref={nameInput}
        // ref는 nameInput 여기에 설정이라는 뜻
        /> 
      <input 
        name="nickname" 
        placeholder="닉네임"  
        onChange={onChange}
        value={nickname}
        /> 
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값 : </b>
        {name} ({nickname})
      </div>
    </>
  )
}

export default InputSample