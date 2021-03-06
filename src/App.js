import React, {useState} from "react";
import Form from './components/forms';
import ToDoList from './components/ToDoList';
import './App.css';

function App() {
  const [inputText, setInputText] = useState("");
  return (
    <div className="App">
      <header>
        <h1>Your To-Do List</h1>
      </header>
      <Form setInputText = {setInputText}/>
      <ToDoList />
    </div>
  );
}

export default App;
