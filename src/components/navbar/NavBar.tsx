import { AppBar, Button, Toolbar } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./NavBar.css";
import React from "react";

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button component={Link} to="/tetris">Tetris</Button>
        <Button component={Link} to="/minesweeper">Minesweeper</Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
