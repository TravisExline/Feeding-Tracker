export const ADD_REPTILE = "ADD_REPTILE"
export const CREATE_REPTILE = "CREATE_REPTILE"
export const SET_REPTILES = "SET_REPTILES"

export const setReptiles = reptiles => {
    return {type: SET_REPTILES, reptiles}
}

export const addReptile = reptile => {
    return {type: ADD_REPTILE, reptile}
}

export const fetchReptiles = () => {
    return dispatch => 
        fetch("http://localhost:3001/reptiles")
        .then(res => res.json())
        .then(data => {
            dispatch(setReptiles(data))
        })
}

export const createReptile = reptile => {
    return dispatch =>
        fetch("http://localhost:3001/reptiles", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({reptile})
        })
        .then(res => res.json())
        .then(reptile => {
            dispatch(addReptile(reptile))
        })
}