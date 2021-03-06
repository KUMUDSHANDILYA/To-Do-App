import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({toDos, setToDos}) => {
  console.log(toDos);
  return(
    <div className="todo-container">
          <ul className="todo-list">
            {toDos.map(toDo =>
              (
                <ToDo
                text = {toDo.text} key = {toDo.id}
                toDos = {toDos}
                setToDos = {setToDos}
                toDo = {toDo}
                />
              )
            )}
          </ul>
    </div>
  );
}

export default ToDoList;
