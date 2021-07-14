import { combineReducers } from 'redux'
import BurgurReducer from './reducer/BurgurReducer'
const RootReducer = combineReducers({
    BurgurReducer,
})

export default RootReducer;