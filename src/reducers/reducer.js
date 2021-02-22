const initialState = {
    name : "Babai",
    wishes : [ "Travelling", "Coding" ]
}

const reducer = (state = initialState, action) => {
    console.log(action)
    if(action.type === "CHANGE_NAME"){
        return {
            ...state,
            name : action.payload
        }
    }
    return state
}

export default reducer;