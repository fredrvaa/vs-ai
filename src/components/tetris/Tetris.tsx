import React, { FC, useState } from "react";
import Cell from "./Cell";
import { STAGE, TETROMINOS } from "../../configs/tetris";
import "./tetris.css";
import useInterval from "../../hooks/useInterval";
import { ITetromino, TStage, IPlayer, TShape } from "../../interfaces/tetris";

const TETROMINO_KEYS = Object.keys(TETROMINOS);

const generatePlayerTetromino = (): IPlayer => {
  const randomTetromino: ITetromino =
    TETROMINOS[TETROMINO_KEYS[(TETROMINO_KEYS.length * Math.random()) << 0]];
  return {
    tetromino: randomTetromino,
    position: {
      row: 0,
      col: Math.floor(STAGE.WIDTH / 2) - 2,
    },
  };
};

const Tetris: FC = () => {
  const [player, setPlayer] = useState<IPlayer>(generatePlayerTetromino());

  const [stage, setStage] = useState<TStage>(
    Array.from(Array(STAGE.HEIGHT), () => Array(STAGE.WIDTH).fill(0))
  );

  const cellContainsCurrentTetromino = (row: number, col: number): boolean => {
    let rowDiff = row - player.position.row;
    let colDiff = col - player.position.col;

    if (rowDiff >= 0 && rowDiff < 4 && colDiff >= 0 && colDiff < 4) {
      if (player.tetromino.shape[rowDiff][colDiff] !== 0) {
        return true;
      }
    }
    return false;
  };

  const isPlayerCollision = (player: IPlayer, stage: TStage): boolean => {
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {
        if (
          player.tetromino.shape[row][col] !== 0 &&
          (row + player.position.row === STAGE.HEIGHT ||
            stage[row + player.position.row][col + player.position.col] !== 0)
        ) {
          return true;
        }
      }
    }
    return false;
  };

  const rotateShape = (shape: TShape, direction: number): TShape => {
    let n = shape.length - 1;
    let newShape = Array.from(Array(4), () => Array(4).fill(0));

    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {
        let newRow: number;
        let newCol: number;
        if (direction === 1) {
          newCol = row;
          newRow = n - col;
        } else {
          newCol = n - row;
          newRow = n - col;
        }

        newShape[newRow][newCol] = shape[row][col];
      }
    }
    return newShape;
  };

  const addPlayerTetrominoToStage = (
    player: IPlayer,
    stage: TStage
  ): TStage => {
    let copyStage = [...stage];
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {
        if (player.tetromino.shape[row][col] !== 0) {
          copyStage[row + player.position.row][col + player.position.col] =
            player.tetromino.shape[row][col];
        }
      }
    }
    return copyStage;
  };

  const update = (): void => {
    const updatedPlayer = {
      ...player,
      tetromino: {
        ...player.tetromino,
        shape: rotateShape(player.tetromino.shape, 1),
      },
      position: { ...player.position, row: player.position.row + 1 },
    };
    if (isPlayerCollision(updatedPlayer, stage)) {
      setStage(addPlayerTetrominoToStage(player, stage));
      setPlayer(generatePlayerTetromino());
    } else {
      setPlayer(updatedPlayer);
    }
  };

  useInterval(() => {
    update();
  }, 300);

  return (
    <div className="stage">
      {stage.map((row, rowId: number) => {
        return (
          <div key={rowId}>
            {row.map((value: string | number, colId: number) => {
              return (
                <Cell
                  keyId={colId}
                  value={
                    cellContainsCurrentTetromino(rowId, colId)
                      ? player.tetromino.code
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
