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

breadthFirstPrint(graph, "a");

function breadthFirstPrint(graph, start) {
  const queue = [start];

  while (queue.length > 0) {
    const current = queue.splice(0, 1)[0]; // shift() => take the first item and remove it
    console.log(current);

    const nextNodes = graph[current];
    queue.push(...nextNodes);
  }
}
