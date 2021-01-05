
import {connect} from 'react-redux'

const ToDoList =({task})=>{
console.log(task)
  
return(
    <div className='to-do-list'>
        <p>Your To-Do</p>
       <ul>
       {
            task.map(task=>{
                const {todo,todo1} = task    
               return(
                   <div>
                       <li>{todo}</li>
                        <li>{todo1}</li>
                   </div>
               )
                
            
            }
            )
        }
       </ul>
      
    </div>
)
}
const mapStateToProps=({task:{task}})=>({
    task
})

export default connect(mapStateToProps, null)(ToDoList)