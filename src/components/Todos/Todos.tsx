import React from "react";
import TodoCard from "../Todo/Todo";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import type { Todo, todoStatus } from "../../interfaces/interfacesObjets";
import "./Todos.css";

export function Todos({ status }: todoStatus) {
  const todoList = useSelector((state: Todo[]): Todo[] => state);
  let auxTodoList = todoList.filter((todo) => todo.status === status);

  return (
    <div className="carTodos">
      <span className="titulos">{status}</span>
      {auxTodoList.map((tD: Todo) => (
        <Link className="tarea" to={`/edit/${tD.id}`} key={tD.id}>
          <TodoCard title={tD.title} />
        </Link>
      ))}
    </div>
  );
}

export default Todos;
