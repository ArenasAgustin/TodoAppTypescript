import React, { ChangeEvent, FormEvent } from "react";
import actions from "../../actions/actions";
import { useDispatch } from "react-redux";
import type { Todo } from "../../interfaces/interfacesObjets";
import "./AddTodo.css";

const { addTodo } = actions;

// Nota 1: Para utilizar el hook `useState` para el manejo de estados de los inputs, tendras que utilizarlo de la siguiente manera
//React.useState

// Nota 2: En este componente tendras que usar la funcion `connect` de react-redux para conectarte al store.
// Si usas el hook `useDispatch` no funcionaran los test.

export default function AddTodo() {
  const dispatch = useDispatch();
  const Input: Todo = {
    title: "",
    description: "",
    place: "",
    date: "",
  };

  const [input, setInput] = React.useState(Input);

  const handleSubmit = function (event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    dispatch(addTodo(input));
    setInput({
      title: "",
      description: "",
      place: "",
      date: "",
    });
  };

  const handleInputChange = function (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ): void {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <form className="form" onSubmit={(event) => handleSubmit(event)}>
      <div className="divInput">
        <label className="titulo">Title</label>
        <input
          name="title"
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange(e)}
          value={input.title}
          className="input"
        ></input>
      </div>

      <div className="divInput">
        <label className="titulo">Description</label>
        <textarea
          name="description"
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            handleInputChange(e)
          }
          value={input.description}
          className="input"
        ></textarea>
      </div>

      <div className="divInput">
        <label className="titulo">Place</label>
        <input
          name="place"
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange(e)}
          value={input.place}
          className="input"
        ></input>
      </div>

      <div className="divInput">
        <label className="titulo">Date</label>
        <input
          name="date"
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange(e)}
          value={input.date}
          className="input"
        ></input>
      </div>

      <button type="submit" className="btn">
        Add
      </button>
    </form>
  );
}
