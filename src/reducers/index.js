import { combineReducers } from 'redux'
import authenticationReducer from "./authReducer";
import serviceRequestReducer from "./serviceRequestReducer";


const reducer = combineReducers({
    authenticationRed: authenticationReducer,
    serviceRequestRed: serviceRequestReducer
});


export default reducer;