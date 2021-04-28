import React from 'react'

function CreateUser({username, email, onChange, onCreate}) {
  // onCreate는 버튼클릭시 실행할 함수임
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

export default CreateUser