import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components/common/header";
import { PageNotFound } from "./components/404-page";
import { KnowledgeGraph } from "./components/knowledge-graph-page";
import { GraphVisualizer } from "./components/graph-visualizer-page";
import { SideNav } from "./components/common/side-nav";
import { HomePage } from "./components/home-page";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <SideNav />
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/graph-visualizer" component={GraphVisualizer} exact />
          <Route
            path="/knowledge-graph/:graphId"
            component={KnowledgeGraph}
            exact
          />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
