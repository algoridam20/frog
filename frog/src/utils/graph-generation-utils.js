export const generateUndirectedUnweightedGraph = (numberOfNodes, density) => {
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
  graph.adjacencyList = generateNodesWithEdges(numberOfNodes, density);
  return graph;
};

/*
Generates a random graph with N nodes.
Creates a new node and a new edge in each iteration.
The edge connects the new node with a random node from previously seen nodes.
*/
const generateNodesWithEdges = (numberOfNodes, density) => {
  let adjacencyList = [];
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
    
    let j;
    for(j= 1; j <= numberOfNodes; j++) {
      let probabilityOfEdge = Math.random();
      if(i == j || probabilityOfEdge < density) // No self loops or the probabilty of edge 
        continue;                               // between i - 1 and j - 1 is less than density
      
      node.edges.push(createEdge(listOfIds[j - 1]));
    }
    adjacencyList.push(node);
  }
  return adjacencyList;
};

const createEdge = (toNode) => {
  const edge = {
    toId: toNode,
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
