/*
 * This is the simplest data structure that contains just a value and pointers to other values
 */

class Node{
    value = 0;
    pointer = null;

    setValue(value){
        this.value = value;
    }

    getValue(){
        return this.value;
    }

    setPointer(pointer){
        this.pointer = pointer;
    }

    getValue(){
        return this.pointer;
    }
}

module.exports = {Node};