const { ListNode } = require('../extensions/list-node.js');
const { NotImplementedError } = require('../extensions/index.js');

function removeKFromList(l, k) {
     if (!l) return null;
    if (l.value === k) {
        return removeKFromList(l.next, k);
    } else {
        const nextList = new ListNode(l.value);
        nextList.next = removeKFromList(l.next, k);
        return nextList;
    }
} 
 
module.exports = {
    removeKFromList
};
