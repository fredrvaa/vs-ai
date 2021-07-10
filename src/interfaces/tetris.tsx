export type TShape = (string | number)[][];
export type TStage = (string | number)[][];

export interface ITetromino {
  code: string;
  shape: TShape;
  color: string;
}

export interface IPosition {
  row: number;
  col: number;
}

export interface IPlayer {
  tetromino: ITetromino;
  position: IPosition;
}
