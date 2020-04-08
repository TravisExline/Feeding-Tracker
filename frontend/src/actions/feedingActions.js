export const ADD_FEEDING = "ADD_FEEDING"
export const SET_FEEDINGS = "SET_FEEDINGS"
export const CREATE_FEEDING = "CREATE_FEEDING"

export const addFeeding = feeding => {
    return {type: ADD_FEEDING, feeding}
}

export const setFeedings = feedings => {
    return {type: SET_FEEDINGS, feedings}
}

export const fetchFeedings = () => {
    return dispatch =>
        fetch("http://localhost:3001/feedings")
        .then(res => res.json())
        .then(data => {
            dispatch(setFeedings(data))
        })
}

export const createFeeding = feeding => {
    return dispatch => 
        fetch("http://localhost:3001/feedings", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "applciation/json"
            },
            body: JSON.stringify({feeding})
        })
        .then(res => res.json())
        .then(feeding => {
            dispatch(addFeeding(feeding))
        })
}