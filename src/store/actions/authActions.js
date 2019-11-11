const apiUrl = 'https://api-demo.daniel-avellaneda.com/';

export const userSignUpFetch = user => {
    return dispatch => {
      return fetch(`${apiUrl}/register`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({user})
      }).then(resp => resp.json())
      .then(data => {
        if (data.message) {
          // Here you should have logic to handle invalid creation of a user.
          // This assumes your Rails API will return a JSON object with a key of
          // 'message' if there is an error with creating the user, i.e. invalid username
        } else {
        localStorage.setItem("token", data.jwt)
        dispatch(loginUser(data.user))
        }
      })
    }
}
  
const loginUser = userObj => ({
    type: 'LOGIN_SUCCESS',
    payload: userObj
})

export const logoutUser = () => ({
  type: 'SIGNOUT_SUCCESS'
})

export const userLoginFetch = user => {
  const params = new URLSearchParams();
  params.append('email', user.email);
  params.append('password', user.password);
  return dispatch => {
    return fetch(`${apiUrl}login`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
       body: params
     })
     .then(resp => resp.json())
     .then(data => {
     if (data.message) {
            // Here you should have logic to handle invalid login credentials.
            // This assumes your Rails API will return a JSON object with a key of
            // 'message' if there is an error
     } else {
      localStorage.setItem("token", data.token)
      dispatch(loginUser(data))
     }
   })
 }
}