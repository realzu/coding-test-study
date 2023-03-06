// Array

const array = [1, 1, 5, 124, 400, 599, 1004, 5435, 8734];

function binarySearch(array, findValue) {
    let left = 0;
    let right = array.length - 1;
    let mid = Math.floor((left + right) / 2);

    while (left < right) {
        if (array[mid] === findValue) return mid;

        if (array[mid] < findValue) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }

        mid = Math.floor((left + right) / 2);
    }

    return -1; // 없음
}


// Tree

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;        
    }
    
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return;
        }

        let currentNode = this.root;

        while (currentNode !== null) {
            if (currentNode.value < value) {
                if (currentNode.right === null) {
                    currentNode.right = newNode;
                    break;
                }
                currentNode = currentNode.right;
            } else {
                if (currentNode.left === null) {
                    currentNode.left = newNode;
                    break;
                }
                currentNode = currentNode.left;
            }
        }
    }

    has(value) {
        let currentNode = this.root;
        while (currentNode !== null) {
            if (currentNode.value === value) return true;

            if (currentNode.value < value) {
                currentNode = currentNode.right;
            } else {
                currentNode = currentNode.left;
            }
        }

        return false;
    }
}