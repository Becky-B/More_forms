import React, {useState} from 'react';
import './App.css';
import UserForm from "./components/UserForm";
import UserResults from "./components/UserResults";

function App() {

  const [state, setState] =  useState({
    firstname : "",
    lastname : "",
    email : "",
    password : "",
    confirm : "",
    
  })

  return (
    <div className="App">
      <UserForm inputs = {state} setInputs = {setState}/>
      <UserResults data = {state} />
    </div>
  );
}

export default App;
