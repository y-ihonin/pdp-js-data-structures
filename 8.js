
class Graph {
  constructor() {
    this.graphItem = [];
  }

  createNewNode(value) {
    return {
      value,
      edges: [],
    }
  }

  addNode(node) {
    const newNode = this.createNewNode(node);
    this.graphItem.push(newNode);
  }

  addEdge(node1, node2) {
    const firstNode = this.graphItem.find((node) => {
      return node.value === node1;
    })

    const secondNode = this.graphItem.find((node) => {
      return node.value === node2;
    })

    if (firstNode && secondNode) {
      firstNode.edges.push(secondNode);
      secondNode.edges.push(firstNode);
    }
  }
}

const newGraph = new Graph();

newGraph.addNode("A");
newGraph.addNode("B");
newGraph.addNode("C");

newGraph.addEdge("A", "B");
newGraph.addEdge("A", "C");

newGraph.createNewNode("P")

console.log(newGraph)
