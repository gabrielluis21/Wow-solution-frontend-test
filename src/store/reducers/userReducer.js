const initiState = {
    users: []
}

const userReducer = (state = initiState, action) => {
    switch(action.type){
        case 'FETCHED_ALL':
            console.log('getted all users');
            return {
                users: action.payload
            }
        case 'ADDED_USER': 
         console.log('added a new user', action.payload);
          return {...state, users: action.payload };
        case 'USER_DELETED':
            return state.filter(user => user.id !== action.payload);
        default:
          return state;
    }
}

export default userReducer