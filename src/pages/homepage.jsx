import CustomButton from "../components/custom-button.component";
import FormInput from "../components/form-input.component";
import {connect,useDispatch} from 'react-redux'
import addTask from '../redux/todo.action'
import React, { useState } from 'react'

const HomePage = ({addTask})=>{
  const dispatch = useDispatch()

const [todo, newTodo] = useState();

const handleChange=(event)=>{
  newTodo(event.target.todo)
}

const handleSubmit =()=>dispatch({
  type:'ADD_TODO',
  payload: todo
})

// const handleSubmit =(event)=>{
//   event.preventDefault()
//   newTodo('')
//   addTask(todo)
// }

console.log(todo)
    return(
      <div className='home-page'>
      <FormInput
          name ='text'
          type='text'
          value={todo}
         onChange={handleChange}
      />
       <CustomButton onClick={handleSubmit}/>
  </div>
  )
            
}

const mapDispatchToProps=(dispatch)=>(
    {
      addTask:task => dispatch(addTask(task))
    }
  )
  export default connect(null, mapDispatchToProps)(HomePage)
