import type { Todo, Action } from "../interfaces/interfacesObjets";

let todoId: number = 1;

const ADD_TODO: string = "ADD_TODO";
const REMOVE_TODO: string = "REMOVE_TODO";
const TODO_PROGRESS: string = "TODO_PROGRESS";
const TODO_DONE: string = "TODO_DONE";

function addTodo({
  title,
  id = todoId,
  status = "Todo",
  date,
  place,
  description,
}: Todo): Action {
  return {
    type: ADD_TODO,
    payload: {
      title,
      id,
      status,
      date,
      place,
      description,
    },
  };
}

function removeTodo({ id }: Todo): Action {
  return {
    type: REMOVE_TODO,
    payload: {
      id,
    },
  };
}

function todoInProgress({ id }: Todo): Action {
  return {
    type: TODO_PROGRESS,
    payload: {
      id,
    },
  };
}

function todoDone({ id }: Todo): Action {
  return {
    type: TODO_DONE,
    payload: {
      id,
    },
  };
}

export default {
  addTodo,
  ADD_TODO,
  removeTodo,
  REMOVE_TODO,
  todoInProgress,
  TODO_PROGRESS,
  todoDone,
  TODO_DONE,
};
