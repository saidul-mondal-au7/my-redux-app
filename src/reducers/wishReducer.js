const wishReducer = (state= ["eat", "sleep"], action) => {
    if(action.type === "WISH_ACTION"){
        return [...state, "code"]
    }
    return state
}

export default wishReducer;