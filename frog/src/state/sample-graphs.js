import { generateUndirectedUnweightedGraph } from "../utils/graph-generation-utils";

export const graph2 = generateUndirectedUnweightedGraph(10,0.5);

export const graph1 = {
  properties: {
    title: "tree 1",
    isDirected: false,
    isWeighted: false,
    isVisited: true,
    isVisiting: false,
  },
  adjacencyList: [
    {
      node: {
        name: "A",
        id: 20,
        size: 1,
        color: "red",
        isVisited: 0,
        isVisiting: false,
      },
      edges: [
        {
          toId: "45",
          weight: "0",
          isVisited: false,
          isVisiting: false,
        },
        {
          toId: "48",
          weight: "0",
          isVisited: false,
          isVisiting: false,
        },
      ],
    },
    {
      node: {
        name: "B",
        id: 45,
        size: 1,
        color: "red",
        isVisited: 0,
        isVisiting: false,
      },
      edges: [
        {
          toId: "68",
          weight: "0",
          isVisited: false,
          isVisiting: false,
        },
        {
          toId: "72",
          weight: "0",
          isVisited: false,
          isVisiting: false,
        },
      ],
    },
    {
      node: {
        name: "C",
        id: 48,
        size: 1,
        color: "red",
        isVisited: 0,
        isVisiting: false,
      },
      edges: [
        {
          toId: "73",
          weight: "0",
          isVisited: false,
          isVisiting: false,
        },
        {
          toId: "77",
          weight: "0",
          isVisited: false,
          isVisiting: false,
        },
      ],
    },
    {
      node: {
        name: "D",
        id: 68,
        size: 1,
        color: "red",
        isVisited: 0,
        isVisiting: false,
      },
      edges: [
        {
          toId: "92",
          weight: "0",
          isVisited: false,
          isVisiting: false,
        },
        {
          toId: "96",
          weight: "0",
          isVisited: false,
          isVisiting: false,
        },
      ],
    },
    {
      node: {
        name: "E",
        id: 72,
        size: 1,
        color: "red",
        isVisited: 0,
        isVisiting: false,
      },
      edges: [],
    },
    {
      node: {
        name: "F",
        id: 73,
        size: 1,
        color: "red",
        isVisited: 0,
        isVisiting: false,
      },
      edges: [],
    },
    {
      node: {
        name: "G",
        id: 77,
        size: 1,
        color: "red",
        isVisited: 0,
        isVisiting: false,
      },
      edges: [],
    },
    {
      node: {
        name: "H",
        id: 92,
        size: 1,
        color: "red",
        isVisited: 0,
        isVisiting: false,
      },
      edges: [],
    },
    {
      node: {
        name: "I",
        id: 96,
        size: 1,
        color: "red",
        isVisited: 0,
        isVisiting: false,
      },
      edges: [],
    },
  ],
};

export const graph4 = {
  properties: {
    isDirected: true,
    isWeighted: true,
    title: "very simple graph",
    isVisited: false,
    isVisiting: false,
  },
  adjacencyList: [
    {
      node: {
        name: "C",
        id: 62,
        size: 1,
        color: "red",
        isVisited: 0,
        isVisiting: false, 
      },
      edges: [
        {
          toId: "71",
          weight: "0",
          isVisited: false,
          isVisiting: false,
          styleOption: 1,
        },
      ],
    },
    {
      node: {
        name: "D",
        id: 71,
        size: 1,
        color: "red",
        isVisited: 0,
        isVisiting: false,
      },
      edges: [
        {
          toId: "71",
          weight: "0",
          isVisited: false,
          isVisiting: false,
          styleOption: 0,
        },
      ],
    },
    {
      node: {
        name: "X",
        id: 80,
        size: 1,
        color: "red",
        isVisited: 0,
        isVisiting: false,
      },
      edges: [
        {
          toId: "62",
          weight: 12,
          isVisited: false,
          isVisiting: false,
          styleOption: -1,
        },
      ],
    },
  ],
};
