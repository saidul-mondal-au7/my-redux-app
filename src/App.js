import './App.css';

import { connect } from "react-redux";
import nameAction from "./actions/nameAction"

function App(props) {
  console.log(props)
  return (
    <div className="App">
     <h1>My Redux App</h1>
     <h2>My Name is {props.myName}</h2>
     <button onClick={()=>{props.changeName()}} >Change this name</button>
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
    changeName : () => { dispatch(nameAction()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
