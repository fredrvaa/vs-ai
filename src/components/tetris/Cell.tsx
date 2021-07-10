import React from "react";
import "./tetris.css";
import { TETROMINOS } from "../../configs/tetris";

interface IProps {
  keyId: number;
  value: string | number;
}

const Cell = (props: IProps) => {
  return (
    <div
      className="cell"
      key={props.keyId}
      style={{
        backgroundColor:
          props.value === 0 ? "rgb(30,30,30)" : TETROMINOS[props.value].color,
      }}
    ></div>
  );
};

export default Cell;
