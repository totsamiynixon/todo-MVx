class View {
  constructor(selector, model) {
    this._selector = selector;
    this._model = model;
  }

  init() {
    this._modelChangeListener = this._render.bind(this);
    this._model.on("change", this._modelChangeListener);
  }

  destroy() {
    this._model.removeListener("change", this._modelChangeListener);
  }

  _render() {
    throw new Error("Implement me");
  }
}

export default View;
