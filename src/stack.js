const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.elements = [];
    // инициализир. массив элементов стека
  }

  push(element) {
    this.elements.push(element);
    // в массив доб-ся нов. элемент
  }

  pop() {
    return this.elements.pop();
    // удаляем и возвращаем послед. эл-т стека
  }

  peek() {
    return this.elements[this.elements.length - 1];
    // получаем значение верхнего эл-та стека
  }

}

module.exports = {
  Stack
};
