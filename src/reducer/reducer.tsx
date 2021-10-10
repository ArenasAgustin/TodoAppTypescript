import type { Todo, Action } from "../interfaces/interfacesObjets";
import actionCosnt from "../actions/actions";

const todoList: Todo[] = [];
let stateAux: Todo[] = [];

//En nuestro estado guardaremos objetos con `todos`. Cada todo tendra: title, description, place, date, id y un status;
const todos = (state = todoList, { type, payload }: Action) => {
  switch (type) {
    case actionCosnt.ADD_TODO:
      payload.id = state.length + 1;
      return (state = [...state, ...[payload]]);

    case actionCosnt.REMOVE_TODO:
      return (state = state.filter((todo) => todo.id !== payload.id));

    case actionCosnt.TODO_PROGRESS:
      stateAux = state;
      for (let i = 0; i < stateAux.length; i++) {
        if (stateAux[i].id === payload.id) stateAux[i].status = "InProgress";
      }
      return (state = stateAux);

    case actionCosnt.TODO_DONE:
      stateAux = state;
      for (let i = 0; i < stateAux.length; i++) {
        if (stateAux[i].id === payload.id) stateAux[i].status = "Done";
      }
      return (state = stateAux);

    default:
      return state;
  }
};

export default todos;
