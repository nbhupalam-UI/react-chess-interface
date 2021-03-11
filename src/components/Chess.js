import React from "react";

import { getHorseMoves } from "../shared/utility";
import classes from "./Chess.module.css";

const Chess = ({ rows, cols }) => {
  const rowsArr = Array.from(Array(rows), (_, i) => i + 1);
  const colArr = Array.from(Array(cols), (_, i) => i + 1);
  const board = rowsArr.map((row, i) => (
    <div className={classes.Row} key={`row_${i}`}>
      {colArr.map((col, j) => (
        <p
          className={[
            classes.Cell,
            (row % 2 === 1 && col % 2 === 0) || (row % 2 === 0 && col % 2 === 1)
              ? classes.highlight
              : ""
          ].join(" ")}
          key={`col_${j}`}
        >
          {row} {col}
        </p>
      ))}
    </div>
  ));
  return (
    <div>
      <h1>Chess App</h1>
      <div class={classes.BoardContainer}>{board}</div>
    </div>
  );
};

export default Chess;
