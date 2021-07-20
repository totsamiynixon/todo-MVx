import Storage from "./Storage.js";

class LocalStorage extends Storage {
  constructor(key) {
    super();
    this._key = key;
  }

  getAll() {
    return JSON.parse(localStorage.getItem(this._key));
  }

  update(todoItems) {
    localStorage.setItem(this._key, JSON.stringify(todoItems));
  }
}

export default LocalStorage;
