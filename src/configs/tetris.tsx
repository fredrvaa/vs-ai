import { ITetromino } from "../interfaces/tetris";

export const STAGE = {
  WIDTH: 10,
  HEIGHT: 20,
};

export const TETROMINOS: { [piece: string]: ITetromino } = {
  L: {
    code: "L",
    shape: [
      [0, "L", 0, 0],
      [0, "L", 0, 0],
      [0, "L", "L", 0],
      [0, 0, 0, 0],
    ],
    color: "rgb(255, 127, 0)",
  },
  I: {
    code: "I",
    shape: [
      [0, "I", 0, 0],
      [0, "I", 0, 0],
      [0, "I", 0, 0],
      [0, "I", 0, 0],
    ],
    color: "rgb(0, 255, 255)",
  },
  J: {
    code: "J",
    shape: [
      [0, 0, "J", 0],
      [0, 0, "J", 0],
      [0, "J", "J", 0],
      [0, 0, 0, 0],
    ],
    color: "	rgb(0, 0, 255)",
  },
  O: {
    code: "O",
    shape: [
      [0, 0, 0, 0],
      [0, "O", "O", 0],
      [0, "O", "O", 0],
      [0, 0, 0, 0],
    ],
    color: "rgb(255, 255, 0)",
  },
  T: {
    code: "T",
    shape: [
      [0, 0, "T", 0],
      [0, "T", "T", 0],
      [0, 0, "T", 0],
      [0, 0, 0, 0],
    ],
    color: "rgb(128, 0, 128)",
  },
};
