import Storage from "./Storage.js";

class SessionStorage extends Storage {
  constructor(key) {
    super();
    this._key = key;
  }

  getAll() {
    return JSON.parse(sessionStorage.getItem(this._key));
  }

  update(todoItems) {
    sessionStorage.setItem(this._key, JSON.stringify(todoItems));
  }
}

export default SessionStorage;
