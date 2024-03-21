const graph = [
  // a b c d e // End node
  [0, 4, 2, 0, 0], // a // Start node
  [0, 0, 3, 2, 3], // b
  [0, 1, 0, 4, 5], // c
  [0, 0, 0, 0, 0], // d
  [0, 0, 0, 1, 0], // e
];

console.log(findShortestPath(graph, 0));

function findShortestPath(graph, startNode) {
  const seen = {}; // empty
  const paths = {};
  const size = graph[0].length;
  for (let i = 0; i < size; i++) {
    paths[i] = 100;
  }
  const edges = [];

  let currentNode = startNode;
  paths[currentNode] = 0;

  while (Object.keys(seen).length < size) {
    console.log("CurrentNode", currentNode);
    seen[currentNode] = true;

    for (let i = 0; i < size; i++) {
      const nextEdge = graph[currentNode][i];

      if (nextEdge <= 0) {
        continue;
      }

      const newPath = paths[currentNode] + nextEdge;

      if (newPath < paths[i]) {
        paths[i] = newPath;
      }

      if (!seen[i]) {
        edges.push([i, nextEdge]); // [toNode, edgeSize]
      }
    }

    edges.sort((a, b) => a[1] - b[1]);
    console.log("edges", edges);

    const minEdge = edges.shift();

    currentNode = minEdge[0];
  }

  return paths;
}
