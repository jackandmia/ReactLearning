const userReducer = (state=defaultUser, action ) => {
    switch(action.type) {
        case "USER_LOGIN": {
            state = {...state, username: action.payload.username, password: action.payload.password}
            break;
        }
        case "USER_LOGOUT": {
            state = {...state, username: "", password: ""}
            break;
        }
    }
    return state;
}
