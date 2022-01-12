import EventEmitter from "eventemitter3";

const Mixin = (Mixin) => class extends Mixin {};

class Model extends Mixin(EventEmitter) {
  constructor(initialList) {
    super();
    this._todoList = initialList ? [...initialList] : [];
  }

  getAll() {
    return [...this._todoList];
  }

  addTodoItem(item) {
    this._todoList.push(item);
    this._onChange();
  }

  removeTodoItem(index) {
    this._todoList.splice(index, 1);
    this._onChange();
  }

  updateTodoItem(item, index) {
    this._todoList[index] = item;
    this._onChange();
  }

  deleteAll() {
    this._todoList.length = 0;
    this._onChange();
  }

  _onChange() {
    this.emit("change", this);
  }
}

export default Model;
