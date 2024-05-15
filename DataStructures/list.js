const Node = require("./Node.js")

//A list is a continuous container that adapts to hold values
/*There are two types of lists
 *  Single Linked list
 *  Double Linked list
 *  
 * Use GeeksforGeeks to understand
 *  
 * Single Linked List
 * Elemets are arranged as follows
 * 1->2->3->4->5
 * 
 * Double Linked List
 * 1 <-> 2 <-> 3 <-> 4 <-> 5
 * 
 * Single linked lists are used to create arrays
 * Double linked lists are used to create trees
 * 
 * Properties of a single linked list
 * 1. One value is associated to one other value
 * 2. Traversal is one way
 * 3. Deletion takes o(n)
 * 4. Insertion takes O(n)
 * 5. FirstNode must always be present
 * 
 * Deletion of an element at the end of a list takes O(n) time because
 * You have to traverse all n-1 items to delete the last item.
 * 
 * Insertion at the end of a list also takes o(n) for the same reason as deletion
 * 
 * Insertion at the beginning of a list takes O(1) since you don't traverse the whole list
 * 
 * Deletion at the beginning of a list takes O(1) for the same reason as deletion
 */

class SingleLinkedList{

    firstNode = null;
    length = 0;

    add(node){
        if(this.firstNode == null){
            this.firstNode = node;
        }

        else{
            var currentNode = this.firstNode;

            while(currentNode.pointer != null){
                currentNode = currentNode.pointer
            }

            currentNode.pointer = node
        }
    }

    delete(node){
        //Deleting an element at the beginning
        if(this.firstNode.value == node.value){

            //If the first value doesn't point to anything
            if(this.firstNode.pointer == null){
                this.firstNode = null;
            }
            else{
                intermediate = this.firstNode.pointer
                this.firstNode.pointer = null;
                this.firstNode = intermediate;
            }
        }
        else{
            var currentNode = this.firstNode;

            while(currentNode.pointer.value != node.value && currentNode.pointer.pointer != null){
                currentNode = currentNode.pointer;
            }

            if(currentNode.pointer == null){
                console.log("The element doesn't exist in the list")
                return false;
            }

            if(currentNode.pointer.value == node.value){
                currentNode.pointer = currentNode.pointer.pointer
            }
        }
    }

    search(node){
        
        var currentNode = this.firstNode;

        while(currentNode.value != node.value && currentNode.pointer != null){
            currentNode = currentNode.pointer
        }

        if(currentNode.value == node.value){
            console.log("Node found")
            return currentNode
        }
        else{
            console.log("Node not found")
            return null;
        }
    }

    showNodes(){
        var mylist = "";
        
        var currentNode = this.firstNode;

        if(currentNode == null){
            console.log("The list is empty");
            return
        }

        while(currentNode != null){
            mylist += currentNode.value + " -> ";
            currentNode = currentNode.pointer;
        }

        console.log(mylist);
    }
}

class Array{

    firstNode = null;
    length = 0;

    add(node){
        if(this.firstNode == null){
            this.firstNode = node;
        }

        else{
            var currentNode = this.firstNode

            while(currentNode.pointer != null){
                currentNode = currentNode.pointer
            }

            currentNode.pointer = node
        }

        this.length++;
    }

    delete(node){
        //Deleting an element at the beginning
        if(this.firstNode.value == node.value){

            //If the first value doesn't point to anything
            if(this.firstNode.pointer == null){
                this.firstNode = null;
            }
            else{
                intermediate = this.firstNode.pointer
                this.firstNode.pointer = null;
                this.firstNode = intermediate;
            }

            this.length--;
            return
        }
        else{
            var currentNode = this.firstNode;

            while(currentNode.pointer.value != node.value && currentNode.pointer.pointer != null){
                currentNode = currentNode.pointer;
            }

            if(currentNode.pointer == null){
                console.log("The element doesn't exist in the list")
                return false;
            }

            if(currentNode.pointer.value == node.value){
                currentNode.pointer = currentNode.pointer.pointer
            }
        }

        this.length--;
    }

    search(node){
        
        var currentNode = this.firstNode;

        while(currentNode.value != node.value && currentNode.pointer != null){
            currentNode = currentNode.pointer
        }

        if(currentNode.value == node.value){
            console.log("Node found")
            return currentNode
        }
        else{
            console.log("Node not found")
            return null;
        }
    }

    getElementAtIndex(number){
        if(number >= this.length){
            console.log("Index provided is out of range");
            return -1
        }else{

            var position = 0;
            var currentNode = this.firstNode;

            while(position < number){
                currentNode = currentNode.pointer;
                position++;
            }

            console.log(currentNode.value)
            return currentNode;
        }
    }

    showNodes(){
        var mylist = "";
        
        var currentNode = this.firstNode;

        if(currentNode == null){
            console.log("The list is empty");
            return
        }

        while(currentNode != null){
            mylist += currentNode.value + " -> ";
            currentNode = currentNode.pointer;
        }

        console.log(mylist);
    }
}

module.exports = {SingleLinkedList, Array}