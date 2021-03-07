import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({toDos, setToDos, filteredToDos}) => {
  console.log(toDos);
  return(
    <div className="todo-container">
          <ul className="todo-list">
            {filteredToDos.map(toDo =>
              (
                <ToDo
                text = {toDo.text} key = {toDo.id}
                toDos = {toDos}
                setToDos = {setToDos}
                toDo = {toDo}
                filteredToDos = {filteredToDos}
                />
              )
            )}
          </ul>
    </div>
  );
}

export default ToDoList;
