import {connect} from 'react-redux'
const ToDoList =({task})=>(
    <div className='to-do-list'>
        <p>Your To-Do</p>
       <ul>
       {
            task.map(task=>
                <li>{task}</li>
            )
        }
       </ul>
       
    </div>
)

const mapStateToProps=({task:{task}})=>({
    task
})

export default connect(mapStateToProps, null)(ToDoList)