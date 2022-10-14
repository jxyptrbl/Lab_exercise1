class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.back = null;
    }

    isEmpty() {
        return !this.front
    }

    enqueue(value) {
        // create a new node with value
        let node =new Node(value);

        // if queue is empty
        if (this.isEmpty()) {
            this.front = this.back = node;
        }
        //point front and back to new node
        
        //else the queue is not empty
        //push node to back of the queue
        else {
            this.back.next = node;
        }
        //by pointing the last node to the newly created node

        //move back pointer to new node
    }
}