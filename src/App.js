import React, {useState} from "react";
import Form from './components/forms';
import ToDoList from './components/ToDoList';
import './App.css';

function App() {
  const [inputText, setInputText] = useState("");
  const [toDos, setToDos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>Your To-Do List</h1>
      </header>
      <Form toDos = {toDos} setToDos = {setToDos} inputText = {inputText} setInputText = {setInputText}/>
      <ToDoList toDos = {toDos} setToDos = {setToDos} />
    </div>
  );
}

export default App;
