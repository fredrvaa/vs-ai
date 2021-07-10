export interface ITetromino {
  code: string;
  shape: (string | number)[][];
  color: string;
}

export interface ICurrentTetromino {
  tetromino: ITetromino;
  row: number;
  col: number;
}
