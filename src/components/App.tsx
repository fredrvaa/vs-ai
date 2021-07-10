import React, { FC } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";

const App: FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
