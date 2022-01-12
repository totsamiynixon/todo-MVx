class View {
  constructor(selector, model) {
    this._selector = selector;
    this._model = model;
  }

  init() {
    throw new Error("Implement me");
  }

  destroy() {
    throw new Error("Implement me");
  }
}

export default View;
