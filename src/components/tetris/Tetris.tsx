import React, { FC, useEffect, useState } from "react";
import Cell from "./Cell";
import { STAGE, TETROMINOS } from "../../configs/tetris";
import "./tetris.css";
import useInterval from "../../hooks/useInterval";
import { ICurrentTetromino, ITetromino } from "../../interfaces/tetris";

const TETROMINO_KEYS = Object.keys(TETROMINOS);

const generateTetromino = (): ICurrentTetromino => {
  const tetromino: ITetromino =
    TETROMINOS[TETROMINO_KEYS[(TETROMINO_KEYS.length * Math.random()) << 0]];
  return { tetromino: tetromino, row: 0, col: Math.floor(STAGE.WIDTH / 2) - 2 };
};

const Tetris: FC = () => {
  const [currentTetromino, setCurrentTetromino] = useState<ICurrentTetromino>(
    generateTetromino()
  );

  const [grid, setGrid] = useState(
    Array.from(Array(STAGE.HEIGHT), () => Array(STAGE.WIDTH).fill(0))
  );

  const [counter, setCounter] = useState<number>(0);

  const cellContainsCurrentTetromino = (row: number, col: number): boolean => {
    let rowDiff = row - currentTetromino.row;
    let colDiff = col - currentTetromino.col;

    if (rowDiff >= 0 && rowDiff < 4 && colDiff >= 0 && colDiff < 4) {
      if (currentTetromino.tetromino.shape[rowDiff][colDiff] !== 0) {
        return true;
      }
    }
    return false;
  };

  const update = () => {
    if (counter > 1) {
      setCurrentTetromino(generateTetromino());
      setCounter(0);
    } else {
      setCounter(counter + 1);
    }

    setCurrentTetromino({
      ...currentTetromino,
      row: currentTetromino.row + 1,
    });

    // let copyGrid = [...grid];

    // setGrid(copyGrid);
  };

  useEffect(() => {}, []);

  useInterval(() => {
    update();
  }, 300);

  return (
    <div className="stage">
      {grid.map((row: (string | number)[], rowId: number) => {
        return (
          <div key={rowId}>
            {grid[rowId].map((value: string | number, colId: number) => {
              return (
                <Cell
                  keyId={colId}
                  value={
                    cellContainsCurrentTetromino(rowId, colId)
                      ? currentTetromino.tetromino.code
                      : value
                  }
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Tetris;
