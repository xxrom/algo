const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

depthFirstPrint(graph, "a");

function depthFirstPrint(graph, start) {
  console.log("DFS");
  const stack = [start];

  while (stack.length > 0) {
    const current = stack.pop();
    console.log(current);
    const nextNodes = graph[current];
    stack.push(...nextNodes);
  }
}
