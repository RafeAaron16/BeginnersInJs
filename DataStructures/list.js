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
            currentNode = this.firstNode

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
            currentNode = this.firstNode;

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
}