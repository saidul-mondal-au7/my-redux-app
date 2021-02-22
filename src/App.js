import './App.css';

import { connect } from "react-redux";

function App(props) {
  console.log(props)
  return (
    <div className="App">
     <h1>My Redux App</h1>
     <h2>My Name is {props.myName}</h2>
     <button onClick={()=>{props.changeName("Saidul")}} >Change this name</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myName : state.name
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeName : (name) => { dispatch({ type:"CHANGE_NAME", payload:name }) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
