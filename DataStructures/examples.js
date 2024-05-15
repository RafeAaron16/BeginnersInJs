const { Node } = require("./Node.js")
const {SingleLinkedList} = require("./list.js")

first = new Node();

first.value = 5;

list = new SingleLinkedList();

list.add(first)

node = new Node();
node.value = 6;

list.search(node)

list.showNodes()