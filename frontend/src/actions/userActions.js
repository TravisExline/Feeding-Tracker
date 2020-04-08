export const ADD_USER = "ADD_USER"
export const CREATE_USER = "CREATE_USER"
export const SET_USERS = "SET_USERS"

export const addUser = user => {
    return {type: ADD_USER, user}
}

export const setUsers = users => {
    return {type: SET_USERS, users}
}

export const createUser = user => {
    return dispatch => 
        fetch(`http://localhost:3001/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({user})
        })
        .then(res => res.json())
        .then(user => {
            dispatch(addUser(user))
        })
}