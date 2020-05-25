import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "./assets/Roboto/Roboto-Regular.ttf";
import { PageNotFound } from "./components/404-page";
import { KnowledgeGraph } from "./components/knowledge-graph-page";
import GraphVisualizer from "./components/graph-visualizer-page";
import { HomePage } from "./components/home-page";
import { lightTheme } from "./theme";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { DoNext } from "./components/do-next";
import { configureStore } from "./state/store";
import rootSaga from "./state/root-saga";

function App() {
  const store = configureStore({});
  store.runSaga(rootSaga);
  return (
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={lightTheme}>
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/graph-visualizer" component={GraphVisualizer} exact />
            <Route
              path="/knowledge-graph/:graphId"
              component={KnowledgeGraph}
              exact
            />
            <Route path="/do-next/:taskId?" component={DoNext} exact />
            <Route component={PageNotFound} />
          </Switch>
        </ThemeProvider>
      </Router>
    </Provider>
  );
}

export default App;
