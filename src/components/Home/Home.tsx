import React from "react";
import Todos from "../Todos/Todos";
import type { todoStatus } from "../../interfaces/interfacesObjets";
import "./Home.css";

let statusList: todoStatus[] = [
  { status: "Todo" },
  { status: "InProgress" },
  { status: "Done" },
];

export function Home(): JSX.Element {
  return (
    <div className="TodoCards">
      {statusList.map(({ status }: todoStatus, i: number) => {
        return <Todos status={status} key={i} />;
      })}
    </div>
  );
}

export default Home;
