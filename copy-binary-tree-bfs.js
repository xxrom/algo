class Node {
  constructor(value = null, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

const getCopyTree = (root) => {
  let newRoot = new Node();
  const queue = [[newRoot, root]];

  while (queue.length > 0) {
    let [parent, currentNode] = queue.shift();
    parent.value = currentNode.value;
    parent.left = new Node();
    parent.right = new Node();

    //console.log("CurrentNode", currentNode.value);

    if (typeof currentNode.left?.value === "number") {
      queue.push([parent.left, currentNode.left]);
    }
    if (typeof currentNode.right?.value === "number") {
      queue.push([parent.right, currentNode.right]);
    }
  }

  return newRoot;
};

const binaryTree = new Node(
  0,
  new Node(1, new Node(3, new Node(7)), new Node(4)),
  new Node(2, new Node(5, new Node(8)), new Node(6, new Node(9)))
);

const copyTree = getCopyTree(binaryTree);

console.log("Validation of the copy:");
getCopyTree(copyTree); // validation of new tree
