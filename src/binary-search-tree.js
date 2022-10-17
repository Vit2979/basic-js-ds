
const {
    NotImplementedError
  } = require('../extensions/index.js');


class BinarySearchTree {
    constructor() {
        this.root1 = null;
      }
    
      root() {
        return this.root1;
      }
    
      add(data) {
        const newNode = new Node(data);
        if (!this.root1) {
          this.root1 = newNode;
          return;
        }
        let currentNode = this.root1;
        while (currentNode) {
          if (newNode.data < currentNode.data) {
            if (!currentNode.left) {
              currentNode.left = newNode;
              return;
            }
            currentNode = currentNode.left;
          } else {
            if (!currentNode.right) {
              currentNode.right = newNode;
              return;
            }
            currentNode = currentNode.right;
          }
        }
      }
    
      preOrder(node, data, mode) {
        if (!node && mode === 'has') return false;
        else if (!node && mode === 'find') return null;
        if (node.data == data && mode === 'has') return true;
        else if (node.data == data && mode === 'find') return node;
        return (data < node.data) ? this.preOrder(node.left, data, mode) : this.preOrder(node.right, data, mode);
      }
    
      has(data) {
        return this.preOrder(this.root1, data, 'has');
      }
    
      find(data) {
        return this.preOrder(this.root1, data, 'find');
      }
    
      allNode(node, data) {
        if (data > node.data) {
          node.right = this.allNode(node.right, data);
          return node;
        } else if (data < node.data) {
          node.left = this.allNode(node.left, data);
          return node;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }
        let data1 = node.right;
        while (data1.left) {
          data1 = data1.left;
        }
        node.data = data1.data;
        node.right = this.allNode(node.right, node.data);
        return node;
      }
    
      remove(data) {
        this.root1 = this.allNode(this.root1, data);
      }
    
      left(node) {
        let minData;
        while (node) {
          minData = node.data;
          node = node.left;
          this.left(node);
        }
        return minData;
      }
    
      min() {
        return this.left(this.root1);
      }
    
      right(node) {
        let maxData;
        while (node) {
          maxData = node.data;
          node = node.right;
          this.right(node);
        }
        return maxData;
      }
    
      max() {
        return this.right(this.root1);
      }
    
    }
    class Node {
      constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
      }
    }

module.exports = {
    BinarySearchTree
};
