import {taskActionType} from './todo.type'

 const addTask = (task) =>({
        type:taskActionType.ADD_TASK,
        payload: task 
} )

export default addTask