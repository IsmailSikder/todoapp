import CustomButton from "../components/custom-button.component";
import FormInput from "../components/form-input.component";
import {connect} from 'react-redux'
import addTask from '../redux/todo.action'
import React from 'react'
import Count from "../components/counter.component";
import FetchApi from "../components/fetch-api.component";
class HomePage extends React.Component{

  constructor(props){
    super(props)
    this.state ={
      todo :'',
      todo1:'',
    }
  }

  handleChange = event => {
   const {name,value} =event.target
    this.setState({[name]:value})
}

handleSubmit =()=>{
  const {todo,todo1} = this.state
  const todos = {todo,todo1}
  this.props.addTask(todos)
  this.setState({todo:'',todo1:''})
}


  render(){
    const {todo,todo1} = this.state
   
    return(
      <div className='home-page'>
      <FormInput
          name ='todo'
          type='text'
          value={todo}
         onChange={this.handleChange}
      />
       <FormInput
          name ='todo1'
          type='text'
          value={todo1}
         onChange={this.handleChange}
      />
       <CustomButton onClick={this.handleSubmit}>Submit</CustomButton>
       <Count/>
       <FetchApi/>

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
