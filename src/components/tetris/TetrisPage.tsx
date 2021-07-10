import React from "react";
import { FC } from "react";
import Tetris from "./Tetris";
import "./tetris.css";

const TetrisPage: FC = () => {
  return (
    <div className="page">
      <Tetris />
    </div>
  );
};

export default TetrisPage;
