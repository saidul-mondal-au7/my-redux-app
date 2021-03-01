import './App.css';

import { connect } from "react-redux";
import nameAction from "./actions/nameAction"
import wishAction from "./actions/wishAction"



function App(props) {

  console.log(props)

  const myWish = props.wish.map((item) => {
    return <h2 key={Math.random()}>{item}</h2>
  })
  return (
    <div className="App">
     <h1>My Redux App</h1>
     <h2>My Name is {props.myName}</h2>
     {myWish}
     <button onClick={()=>{props.changeName()}} >Change this name</button>
     <button onClick={()=>{props.changeWish()}} >Change this wish</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myName : state.name,
    wish : state.wish
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeName : () => { dispatch(nameAction()) },
    changeWish : () => {dispatch (wishAction())}

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
