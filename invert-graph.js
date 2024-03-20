const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

/*

  a -> c -> e
  \
   -> b -> d -> f

*/

const invGraph = invertGraph(graph);
console.log(invGraph);

function invertGraph(graph) {
  const newGraph = {};
  const nodes = Object.keys(graph);

  nodes.forEach((current) => {
    const nextNodes = graph[current];

    nextNodes.forEach((node) => {
      if (!newGraph[node]) {
        newGraph[node] = [];
      }

      newGraph[node].push(current);
    });
  });

  return newGraph;
}
