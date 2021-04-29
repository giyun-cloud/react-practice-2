import {useCallback, useReducer} from 'react'

//reduecer 함수만들기
function reducer(state, action) {
  switch(action.type) {
    case 'CHANGE_FORM':
      return {
        ...state,
        [action.name]: action.value
      }
    case 'RESET_FORM':
      return Object.keys(state).reduce((acc, current,a,b) => {
        acc[current] = ''
        return acc
      } , {});
      //Object.keys(state) = ['username','email']이됨.
      //이배열에 acc에 초기값 {}객체를 넣고, acc['username'] = ''을 한뒤 acc에넣고
      //acc['email']=''을 한뒤 acc에 넣으면
      //acc는 {username: '', email: ''} 이렇게됨.
    default:
      throw new Error('Unhandled action')
  }
}

function useInputs(initialForm) {
  // useState에 넣을 초기값 initialForm
  const [form, dispatch] = useReducer(reducer, initialForm)

  const onChange = useCallback(e => {
    const {name, value} = e.target
    dispatch({
      type: 'CHANGE_FORM',
      name,
      value
    })
  },[])

  const reset = useCallback(() => {
    dispatch({
      type: 'RESET_FORM',
    })
  }, [])

  return [form, onChange, reset]
}

export default useInputs