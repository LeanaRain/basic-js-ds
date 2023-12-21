//const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

function removeKFromList(l, k) {
  if (l === null) {
    // если эл-т списка = 0, т.е. достигнут конец списка
    return l;
    // конец рекурсии и окончание обработки
  }

  l.next = removeKFromList(l.next, k);
  // вызыв. ф-ию для след. эл-та списка

  if (l.value === k) {
    // если значение эл-та к
    return l.next;
    // то он удаляется и возв-ся след. эл-т
  } else {
    // если эл-т не к
    return l;
    // возвр-ся эл-т
  }
}

module.exports = {
  removeKFromList
};
