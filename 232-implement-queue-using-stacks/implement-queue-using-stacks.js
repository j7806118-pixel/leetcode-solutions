
var MyQueue = function() {
    this.inputStack = [];
    this.outputStack = [];
};

MyQueue.prototype.push = function(x) {
    this.inputStack.push(x);
};

MyQueue.prototype.pop = function() {
    if (this.outputStack.length === 0) {
        while (this.inputStack.length > 0) {
            this.outputStack.push(this.inputStack.pop());
        }
    }

    return this.outputStack.pop();
};

MyQueue.prototype.peek = function() {
    if (this.outputStack.length === 0) {
        while (this.inputStack.length > 0) {
            this.outputStack.push(this.inputStack.pop());
        }
    }

    return this.outputStack[this.outputStack.length - 1];
};

MyQueue.prototype.empty = function() {
    return (
        this.inputStack.length === 0 &&
        this.outputStack.length === 0
    );
};
