import {connect} from 'react-redux'
const ToDoList =({Task})=>(
    <div className='to-do-list'>
       <ul>
       {
            Task.map(task=>
                <li>{task}</li>
            )
        }
       </ul>
       
    </div>
)

const mapStateToProps=({Task})=>({
    Task
})

export default connect(mapStateToProps, null)(ToDoList)