const { Node } = require("./Node.js")
const {SingleLinkedList, Array} = require("./list.js")

first = new Node();

first.value = 5;

second = new Node();

second.value = 6;

fourth = new Node();

fourth.value = 8;

fifth = new Node();

fifth.value = 6;

sixth = new Node();

sixth.value = 6;

list = new SingleLinkedList();

list.add(first)
list.add(second)
list.add(fourth)
list.add(fifth)
list.add(sixth)

node = new Node();
node.value = 5;

list.search(node)

list.showNodes()

array = new Array();

third = new Node();

for(let i = 0; i < 7; i++){
    var nodei = new Node();
    nodei.value = i;

    array.add(nodei);
}

array.showNodes();
array.getElementAtIndex(5)
