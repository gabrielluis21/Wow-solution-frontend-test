const initState = {
    cities: []
};

const cityReducer = (state = initState, action) => {
    switch(action.type){
        case 'FETCHED_ALL':
            console.log('getted all cities');
            return {
                cities: action.payload
            }
        case 'ADDED_CITY': 
         console.log('added a new city', action.payload);
          return {...state, cities: action.payload };
        case 'DELETED_CITY':
            return state.filtter(city => city.id !== action.payload);
        default:
          return state;
    }
}

export default cityReducer

