
const apiUrl = 'https://api-demo.daniel-avellaneda.com/';
const token = localStorage.getItem('token')

export const addCityPost = newCity => {
    return dispatch => {
        const params = new URLSearchParams();
        params.append('name', newCity)
        
        return fetch(`${apiUrl}cities`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${token}`
            },
            body: params 
        }
        ).then(resp => resp.json())
        .then(data => {
            if (data.message) {
                // Here you should have logic to handle invalid creation of a user.
                // This assumes your Rails API will return a JSON object with a key of
                // 'message' if there is an error with creating the user, i.e. invalid username
            } else {
                dispatch(addNewCity(data))
            }
        }).catch(

        );
    }
}

const addNewCity = cityObj => ({
    type: 'ADDED_CITY',
    payload: cityObj
})

export const fetchCitiesGet = () => {
    return dispatch => {
        const token = localStorage.token;
        return fetch(`${apiUrl}cities`, {
            method: 'GET',
            headers: {
                'Authorization': `${token}` 
            },
        }).then(resp => resp.json())
        .then(data => {
            if (data.message) {
                // Here you should have logic to handle invalid creation of a user.
                // This assumes your Rails API will return a JSON object with a key of
                // 'message' if there is an error with creating the user, i.e. invalid username
              } else {
                  dispatch(fetchCities(data.docs))
              }
        }).catch()
    }
}

const fetchCities = citiesObj => ({
    type: 'FETCHED_ALL',
    payload: citiesObj
})

export const deletedCityDelete = _id => {
    return dispatch => {
        return fetch(`${apiUrl}users/${_id}`,{
            method: 'DELETE',
            headers: {
                'Authorization': `${token}` 
            },
        }).then(resp => resp.json()).then(data => {
            if(data.message){

            }else{
                dispatch(deletedCity(_id))
            }
        })
    }
}

const deletedCity = deletedId => ({
    type: 'USER_DELETED',
    payload: deletedId
})