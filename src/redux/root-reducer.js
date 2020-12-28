import taskReducer from "./todo.reducer"
import {combineReducers} from 'redux'
const rootReducer = combineReducers ({
    task : taskReducer,
}
)

export default rootReducer