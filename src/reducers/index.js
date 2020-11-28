import { combineReducers } from 'redux'
import authenticationReducer from "./authReducer";
import serviceRequestReducer from "./serviceRequestReducer";
import userManagementReducer from "./userManagementReducer";

const reducer = combineReducers({
    authenticationRed: authenticationReducer,
    serviceRequestRed: serviceRequestReducer,
    userManagementRed: userManagementReducer
});


export default reducer;