import { all, take, takeLatest, call, put, select } from "redux-saga/effects";
import {
  visitEdgeGenerator,
  visitNodeGenerator,
} from "../../utils/visit-with-delay";

export const getCurrentGraph = (state) => state.graph.adjacencyList;

export const runDFS = function* (currentGraph) {
  let graph = Object.assign([], currentGraph.adjacencyList);
  let root = graph[0].node.id;
  let visited = new Set();
  yield dfs(root, graph, visited);
};

const dfs = function* (source, graph, visited) {
  let sourceRow = yield graph.find(
    (val) => Number(val.node.id) === Number(source)
  );
  yield visitNodeGenerator({ id: source });
  visited.add(source);
  for (const edge of sourceRow.edges) {
    if (!visited.has(edge.toId)) {
      const dest = yield edge.toId;
      yield visitEdgeGenerator({ fromId: source, toId: dest });
      yield dfs(dest, graph, visited);
    }
  }
};
