import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../actions/actions";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import type { Todo } from "../../interfaces/interfacesObjets";
import "./TodoDetail.css";

export function TodoDetail() {
  const todoList = useSelector((state: Todo[]): Todo[] => state);
  const dispatch = useDispatch();
  let detailItem: Todo | undefined;
  const [todoDetail, setTodoDetail] = useState(detailItem);
  const { id }: { id: string } = useParams();

  useEffect(() => {
    detailItem = todoList.find(
      (todo: Todo): boolean =>
        typeof todo.id === "number" && todo.id.toString() === id
    );
    setTodoDetail(detailItem);
  });

  const remove = (id: number | undefined): void => {
    let auxTodo: Todo = { id };
    dispatch(actions.removeTodo(auxTodo));
  };

  const progress = (id: number | undefined): void => {
    let auxTodo: Todo = { id };
    dispatch(actions.todoInProgress(auxTodo));
  };

  const done = (id: number | undefined): void => {
    let auxTodo: Todo = { id };
    dispatch(actions.todoDone(auxTodo));
  };

  return (
    <div className="divDetail">
      <div className="divText">
        <label className="detalle">ToDo: </label>
        <span className="textos">{todoDetail?.title}</span>
      </div>

      <div className="divText">
        <label className="detalle">Description:</label>
        <span className="textos">{todoDetail?.description}</span>
      </div>

      <div className="divText">
        <label className="detalle">Place:</label>
        <span className="textos">{todoDetail?.place}</span>
      </div>

      <div className="divText">
        <label className="detalle">Date:</label>
        <span className="textos">{todoDetail?.date}</span>
      </div>

      <div className="btns">
        <Link to="/">
          <button onClick={() => done(todoDetail?.id)} className="detalleBtn">
            DONE
          </button>
        </Link>

        <Link to="/">
          <button
            onClick={() => progress(todoDetail?.id)}
            className="detalleBtn"
          >
            IN PROGRESS
          </button>
        </Link>

        <Link to="/">
          <button onClick={() => remove(todoDetail?.id)} className="detalleBtn">
            DELETE
          </button>
        </Link>
      </div>
    </div>
  );
}

export default TodoDetail;
