import React, { FC } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./navbar/NavBar";
import Tetris from "./tetris/Tetris";
import TetrisPage from "./tetris/TetrisPage";

const Home: FC = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/tetris" component={TetrisPage} />
      </Switch>
    </>
  );
};

export default Home;
