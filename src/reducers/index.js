import { combineReducers } from 'redux'
import authenticationReducer from "./authReducer";


const reducer = combineReducers({
    authenticationRed: authenticationReducer,
});


export default reducer;