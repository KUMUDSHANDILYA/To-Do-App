import React, {useState, useEffect} from "react";
import Form from './components/forms';
import ToDoList from './components/ToDoList';
import './App.css';

function App() {

  const [inputText, setInputText] = useState("");
  const [toDos, setToDos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredToDos, setFilteredToDos] = useState([]);

  useEffect(() => {
    getLocalToDos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalToDos();
  }, [toDos, status]);

  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredToDos(toDos.filter((toDo) => toDo.completed === true));
        break;
      case 'uncompleted':
        setFilteredToDos(toDos.filter((toDo) => toDo.completed === false));
        break;
      default:
        setFilteredToDos(toDos);
    }
  }
  const saveLocalToDos = () => {
     localStorage.setItem("toDos", JSON.stringify(toDos));
  }

  const getLocalToDos = () => {
    if(localStorage.getItem("toDos") === null)
    {
      localStorage.setItem("toDos", JSON.stringify([]));
    }
    else {
      let toDosLocal = JSON.parse(localStorage.getItem("toDos"));
      //console.log(toDosLocal);
      setToDos(toDosLocal);
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Your To-Do List</h1>
      </header>
      <Form toDos = {toDos} setToDos = {setToDos} inputText = {inputText} setInputText = {setInputText} setStatus = {setStatus}/>
      <ToDoList toDos = {toDos} setToDos = {setToDos} filteredToDos = {filteredToDos}/>
    </div>
  );
}

export default App;
