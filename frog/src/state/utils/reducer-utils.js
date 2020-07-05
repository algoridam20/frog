export const updateObject = (oldObject, newValues) => {
  return Object.assign({}, oldObject, newValues);
};

export const visitNodeHelper = ({ id, graph }) => {
  const updatedAdjacencyList = graph.adjacencyList.map((row) => {
    const updatedNode =
      Number(row.node.id) === Number(id)
        ? updateObject(row.node, { isVisited: true })
        : row.node;
    return updateObject(row, { node: updatedNode });
  });
  return updateObject(graph, { adjacencyList: updatedAdjacencyList });
};

export const visitEdgeHelper = ({ fromId, toId, graph }) => {
  const updatedAdjacencyList = graph.adjacencyList.map((row) => {
    if (Number(row.node.id) === Number(fromId)) {
      const updatedEdges = row.edges.map((edge) => {
        return Number(edge.toId) === Number(toId)
          ? updateObject(edge, { isVisited: true })
          : edge;
      });

      return updateObject(row, { edges: updatedEdges });
    }
    return row;
  });

  return updateObject(graph, { adjacencyList: updatedAdjacencyList });
};
