const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

breadthFirstPrint(graph, "a");

function breadthFirstPrint(graph, start) {
  const queue = [start];

  while (queue.length > 0) {
    const current = queue.splice(0, 1)[0];
    console.log(current);

    const nextNodes = graph[current];
    queue.push(...nextNodes);
  }
}