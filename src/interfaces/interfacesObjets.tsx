import { compose } from "redux";

export interface Todo {
  id?: number;
  title?: string;
  status?: string;
  date?: string;
  place?: string;
  description?: string;
}

export interface Action {
  type: string;
  payload: Todo;
}

export interface todoStatus {
  status: string;
}

export interface propsTodo {
  title?: string;
}

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
