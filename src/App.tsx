import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoDetail from "./components/TodoDetail/TodoDetail";

// En este componente deberias cargar tus rutas.
export function App() {
  return (
    <div className="App">
      <Nav />

      <Route exact path="/TodoAppTypescript/" render={() => <Home />} />

      <Route path="/TodoAppTypescript/add" render={() => <AddTodo />} />

      <Route path="/TodoAppTypescript/edit/:id" render={() => <TodoDetail />} />
    </div>
  );
}

export default App;
