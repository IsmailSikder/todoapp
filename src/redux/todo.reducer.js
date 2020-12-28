
import {taskActionType} from './todo.type.js'


const INITIAL_STATE ={
    task:[]
}

const taskReducer = (state =INITIAL_STATE, action)=>{

    switch(action.type){
        case taskActionType.SET_TASK: 
            return {
                ...state,
                task : [...state.task,action.payload]
            }
        default:
            return state
    }
}

export default taskReducer