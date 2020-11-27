const initialState = {
    userInfo: [],
};

const authenticationReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SIGNUP_REQUEST':
            console.log("signup requested at reducer");
            return state;
        default:
            return state;
    }
};

export default authenticationReducer;