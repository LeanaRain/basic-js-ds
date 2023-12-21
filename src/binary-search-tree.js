// const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');
  class Node {
    tree(data) {
      // устанавливаем нач. знач-ия св-в конструктора tree
      this.data = data; // св-во дата для хранения данных
      this.left = null; // по умолч. узел не имеет лев. потомка
      this.right = null; // по умолч. узел не имеет прав. потомка
    }
  }
/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {


  root() {
    
  }

  // добавление данных
  add(data) {
    
  }

  // проверка наличия данных
  has(data) {
    
  }

  // поиск данных
  find(data) {
    
  }

  // удаление данных
  remove(data) {
    
  }

  // минимальное значение в дереве
  min() {
    
  }

  // максимальное значение в дереве
  max() {
    
  }
}

module.exports = {
  BinarySearchTree
};