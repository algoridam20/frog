export const generateUndirectedUnweightedGraph = (numberOfNodes) => {
  let graph = {
    properties: {
      isDirected: false,
      isWeighted: false,
      title: "weighted undirected graph",
      isVisited: false,
      isVisiting: false,
    },
    adjacencyList: [],
  };
  graph.adjacencyList = generateNodesWithEdges(numberOfNodes);
  return graph;
};

/*
Generates a random graph with N nodes.
Creates a new node and a new edge in each iteration.
The edge connects the new node with a random node from previously seen nodes.
*/
const generateNodesWithEdges = (numberOfNodes) => {
  let adjacencyList = [];
  let nodeIds = [];
  const listOfIds = getListOfIds(numberOfNodes);
  const listOfNames = getListOfNodeNames(numberOfNodes);
  let i;
  for (i = 1; i <= numberOfNodes; i++) {
    let node = {
      node: {
        name: listOfNames[i - 1],
        id: listOfIds[i - 1],
        size: 1,
        color: "red",
        isVisited: 0,
        isVisiting: false,
      },
      edges: [],
    };
    node.edges.push(createEdge(nodeIds));
    nodeIds.push(listOfIds[i - 1]);
    adjacencyList.push(node);
  }
  return adjacencyList;
};

const createEdge = (nodeIds) => {
  const edge = {
    toId: nodeIds[Math.floor(Math.random() * nodeIds.length)],
    weight: "0",
    isVisited: false,
    isVisiting: false,
    styleOption: 0,
  };
  return edge;
};

const getListOfNodeNames = (N) => {
  let names = [];
  let namesMap = new Map();
  while (names.length < N) {
    let first = Math.floor(Math.random() * 40);
    let second = Math.floor(Math.random() * 26);
    let random =
      first > 26
        ? String.fromCharCode(65 + second)
        : String.fromCharCode(65 + first) + String.fromCharCode(65 + second);
    if (!namesMap.has(random)) {
      namesMap.set(random, true);
      names.push(random);
    }
  }
  return names;
};

const getListOfIds = (N, totalNodes = 104) => {
  let ids = [];
  let idMap = new Map();
  while (ids.length < N) {
    let random = Math.floor(Math.random() * totalNodes) + 1;
    if (!idMap.has(random)) {
      idMap.set(random, true);
      ids.push(random);
    }
  }
  return ids;
};
