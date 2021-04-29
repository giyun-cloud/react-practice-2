import React, {createContext, useContext} from 'react'

const MyContext = createContext('defaultValue')

function Child() {
  const text = useContext(MyContext)
  return <div>안녕하세요 {text}</div>
}

function Parent() {
  return <Child />
}

function GrandParent() {
  return <Parent />
}

function ContextSample() {
  const text = 'Good'
  return (
    <MyContext.Provider value={text}>
      <GrandParent />
    </MyContext.Provider>
  )
}

export default ContextSample