import CustomButton from "../components/custom-button.component";
import FormInput from "../components/form-input.component";
import {connect} from 'react-redux'
import addTask from '../redux/todo.action'
import React from 'react'
class HomePage extends React.Component{

  constructor(props){
    super(props)
    this.state ={
      todo :''
    }
  }

handleChange=(event)=>{
  const {name, value} = event.target
  this.setState({[name]:value})
}

handleSubmit =(event)=>{
  const {todo} = this.state
  event.preventDefault()
  this.props.addTask({todo})
}

  render(){
    const {todo} = this.state
    return(
      <div className='home-page'>
      <FormInput
          name ='todo'
          type='text'
          value={todo}
         onChange={this.handleChange}
      />
       <CustomButton onClick={this.handleSubmit}/>
  </div>
  )
  }
       
       
    
}

const mapDispatchToProps=(dispatch)=>(
    {
      addTask:task => dispatch(addTask(task))
    }
  )
  export default connect(null, mapDispatchToProps)(HomePage)
