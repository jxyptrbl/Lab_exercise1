class Queue {
    constructor() {
        this.queue = [];
    }
   
    enqueue(person) { // add person
        return this.queue.push(person);
    }
    
    dequeue() { 
        if(this.queue.length > 0) {
            return this.queue.shift();   // remove first element
        }
    }
    
    peek() {
        return this.queue[this.queue.length - 1];
    }
      
    size(){
        return this.queue.length;
    }

    isEmpty() {
       return this.queue.length === 0;
    }
}

let counter =  new Queue();

// add
counter.enqueue(1);
counter.enqueue(2);
counter.enqueue(3);

// get last element 
console.log(counter.peek()); // 3

// remove
console.log(counter.dequeue()); // 1
console.log(counter.dequeue()); // 2

console.log(counter.isEmpty()); // false
console.log(counter.size()); // 1

console.log(counter.size()); // 0



