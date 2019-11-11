
const apiUrl = 'https://api-demo.daniel-avellaneda.com/';
const token = localStorage.getItem('token')

export const addUserPost = newUser => {
    return dispatch => {
        if(token){
            const params = new URLSearchParams()
            params.append('name', newUser.name)
            params.append('email', newUser.email)
            params.append('password', newUser.password)
            params.append('role', newUser.role)
            params.append('phone', newUser.phone)
            params.append('city', newUser.city)
            params.append('country', newUser.country)
            
            return fetch(`${apiUrl}users`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': `${token}`
                },
                body: params
             }).then(resp => resp.json()).then(data => {
                if (data.message) {
                  // Here you should have logic to handle invalid creation of a user.
                  // This assumes your Rails API will return a JSON object with a key of
                  // 'message' if there is an error with creating the user, i.e. invalid username
                } else {
                  console.log(data)
                  dispatch(addNewUser(data))
                }
            })
        }
    }
}

const addNewUser = userObj => ({
    type: 'ADDED_USER',
    payload: userObj
})

export const fetchUsersGet = () => {
    return dispatch => {
        const token = localStorage.token;
        return fetch(`${apiUrl}users`, {
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
                  dispatch(fetchUsers(data.docs))
              }
        }).catch()
    }
}

const fetchUsers = usersObj => ({
    type: 'FETCHED_ALL',
    payload: usersObj
})

export const deletedUserDelete = _id => {
    return dispatch => {
        return fetch(`${apiUrl}users/${_id}`,{
            method: 'DELETE',
            headers: {
                'Authorization': `${token}` 
            },
        }).then(resp => resp.json()).then(data => {
            if(data.message){

            }else{
                dispatch(deletedUser(_id))
            }
        })
    }
}

const deletedUser = deletedId => ({
    type: 'USER_DELETED',
    payload: deletedId
})