// const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');
      
/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(data) {
    // корневой узел отсутствует по умолчанию
    this.rootNode = null;
    // устанавливаем нач. знач-ия св-в конструктора tree
    this.data = data; // св-во дата для хранения данных
    this.left = null; // по умолч. узел не имеет лев. потомка
    this.right = null; // по умолч. узел не имеет прав. потомка
  }
  
  // доступ к корневому узлу
  root() {
    // возвращаем текущее значение корневого узла
    return this.rootNode;
  }

  // добавление данных - создание нового узла
  add(data) {
    const newNode = new Node(data);
    // проверяем существует ли корневой узел
    if(!this.rootNode) {
      // если корневого узла нет принимаем за него создаваемый
      this.rootNode = newNode;
    } else {
      // если корн. узел уже есть то вставляем созданный узел в стр-ру данных
      this.insertNode(this.rootNode, newNode);
    }
    }
  
    insertNode(node, newNode) {
      if (newNode.data < node.data) {
        // сравниваем значения нового и текущего узла
        // и если значение нового узла меньше значения тек. узла смотрим налево
        if (!node.left) {
          // если у текущего узла нет левого потомка
          node.left = newNode;
          // то ставим новый узел на место левого потомка
        } else {
          // если левый потомок у тек. узла есть
          this.insertNode(node.left, newNode);
          // вызываем функцию снова для левого потомка этого узла и проверяем его глубже
        }
      } else {
        // если значение нов. узла больше или равно знач-ию тек. узла смотрим направо
        if (!node.right) {
          // если у тек. узла нет правого потомка 
          node.right = newNode;
          // им становится новый узел
        } else {
          // есди правый потомок у тек. узла есть
          this.insertNode(node.right, newNode);
          // идем глубже вниз по правому потомку тек. узла = рекурсивный вызов ф-ии
        }
      }
    }
  
  // проверка наличия данных
  has(data) {
    // если данные не найдены возвращается false иначе true
    return this.searchNode(this.rootNode, data) !== null;
  }
  

  // поиск данных
  find(data) {
    // если данные найдены возвращает ссылку на узел, если нет, то null
    return this.searchNode(this.rootNode, data);
  }

  searchNode(node, data) {
    // передаем ф-ии 2 арг-та: узел который проверяем и искомое значение
    if (!node || node.data === data) {
      // если узел не сущ-т (= null) или значение тек. узла = искомому значению
      return node;
      // возвращаем тек. узел (или знач-ие "не найдено")
    } else if (data < node.data) {
      // иначе если искомое знач-ие меньше значения тек. узла
      return this.searchNode(node.left, data);
      // повторяем вызов функции для левого потомка тек. узла
    } else {
      // если иск. знач-ие >= знач-ия тек. узла
      return this.searchNode(node.right, data);
      // повторяем вызов функции для правого потомка тек. узла
    }
  }


  // удаление данных
  remove(data) {
    // после удаления данных обновленное значение корн. узла присваив-ся корн. узлу
    this.rootNode = this.removeNode(this.rootNode, data);
  }

  removeNode(node, data) {
    // передаем аргументами тек. узел и искомое знач
    if (node === null) {
      // если текущий узел пуст
      return null;
    } else if (data < node.data) {
      // если значение меньше значения тек. узла
      node.left = this.removeNode(node.left, data);
      // то вызываем ф-ию для левого потомка этого узла
      return node;
      // и обновляем ссылку на тек. узел в его род. узле для корр. раб. ф-ии
    } else if (data > node.data) {
      // если иск. значение больше данных текущего узла
      node.right = this.removeNode(node.right, data);
      // то рекурсивно вызываем ф-ю для правого потомка
      return node;
      // и обновляем ссылку на провер-ый узел
    } else {
      // если иск. значение совпадает со значением текущего узла
      if (!node.left && !node.right) {
        // у узла нет потомков
        node = null;
        // устанавливаем узел в null 
        return node;
        // и возвращаем его (обновляем ссылку)
      }
      if (!node.left) {
        // если у узла нет левого потомка
        node = node.right;
        // обновляем узел на правого потомка и возвращаем его
        return node;
      } else if (!node.right) {
        // если у узла нет правого потомка
        node = node.left;
        // обновляем узел на левого потомка и возвращаем его
        return node;
      }
      // Находим минимальное значение в правом поддереве
      const minRight = this.minNode(node.right);
      node.data = minRight.data;
      // заменяем данные тек узла на найденные данные
      node.right = this.removeNode(node.right, minRight.data);
      // вызываем ф-ию для правого поддерева
    }
    return node;
    // обновляем ссылку на узел
  }

  minNode(node) {
    // находим узел с минимальным значением
    // т.к. при удалении нужно удалять весь узел, а не значение
    // передаем аргументом тек. узел
    if (node.left === null) {
      // если у узла нет левого потомка
      return node;
      // то он содержит мин знач в этом поддереве
    } else {
      //если у узла есть лев. потомок
      return this.minNode(node.left);
      // проверяем рекурсивно его до тех пор пока не найдем узел без лев. потомка
    }
  }

  // минимальное значение в дереве
  min() {
    // начинаем поиск с корневого узла, присваивая его значение перем-й тек. узел
    let currentNode = this.rootNode;
    // проверяем есть ли у тек. узла левый потомок
    while(currentNode.left) {
      // если еть то перемещаемся к левому потомку и он становится текущим узлом, идем вглубь
      currentNode = currentNode.left;
    }
    // если левого потомка нет - возвращаем значение мин. узла
    return currentNode.data;
  }

  // максимальное значение в дереве
  max() {
    // начинаем поиск с корневого узла, присваивая его значение перем-й тек. узел
    let currentNode = this.rootNode;
    // проверяем есть ли у тек. узла правый потомок
    while(currentNode.right) {
      // если еть то перемещаемся к правому потомку и он становится текущим узлом, идем вглубь
      currentNode = currentNode.right;
    }
    // если левого потомка нет - возвращаем значение мин. узла
    return currentNode.data;
  }
}

module.exports = {
  BinarySearchTree
};