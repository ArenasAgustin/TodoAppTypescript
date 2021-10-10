import React from "react";
import type { propsTodo } from "../../interfaces/interfacesObjets";

export function Todo({ title }: propsTodo) {
  return <div>{title}</div>;
}

export default Todo;
