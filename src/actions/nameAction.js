

// const nameAction = (name) =>{
//     return ({
//         type:"CHANGE_NAME",
//         payload: name
//     })
// }
const nameAction = () => {
    return (dispatch) => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(res2=>dispatch({ type:"CHANGE_NAME", payload: res2[1].name }))
    }
    
}
export default nameAction;