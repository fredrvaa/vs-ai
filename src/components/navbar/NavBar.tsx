import { AppBar, Button, Toolbar } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./navbar.css";
import React, { FC } from "react";

const NavBar: FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button component={Link} to="/tetris">
          Tetris
        </Button>
        <Button component={Link} to="/minesweeper">
          Minesweeper
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
