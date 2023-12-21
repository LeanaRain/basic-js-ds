//const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class Queue {
  constructor() {
    // инициализируем этот список как пустой массив
    this.list = [];
  }
  
  getUnderlyingList() {
    let currentItem = {value: this.list[0], next: null};
    // созд. объект с 2 св-вами
    // где value уст-ся как значение 1-го эл-та массива лист
    // а next null указ. что тек. эл-т последний в списке
    let first = currentItem;
    // ссылка, кот. указ. на тот же объект 
    for (let i = 1; i < this.list.length; i++) {
      // кажд. итер-ия цикла созд. нов. объект
      currentItem.next = {value: this.list[i], next: null};
      // созд. новый эл-т связ-го списка и каждый следующий за ним в цикле
      currentItem = currentItem.next;
      // позволяет перейти к след. эл-ту обновляя тек. эл-т в списке
    }
    return first;
    // возвращает уже созд-ую (головную) часть списка
  }
  
  enqueue(value) {
    // новый элемент доб-ся в конец массива
    this.list.push(value);
  }

  dequeue() {
    if (this.list.length === 0) {
      // провер-ся пуст ли массив
      return undefined; 
      // если да то извлекать нечего
    } else {
      // если не пуст
      return this.list.shift();
      // извлекает и возвращает 1-й эл-т массива
    }
  }
}

module.exports = {
  Queue
};
