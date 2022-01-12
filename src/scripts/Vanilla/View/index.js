import View from "../../Core/View";

class VanillaView extends View {
  constructor(selector, model) {
    super(selector, model);

    this._rootEl = document.querySelector(this._selector);
  }

  init() {
    this._modelChangeListener = this._render.bind(this);
    this._model.on("change", this._modelChangeListener);
    this._render();
  }

  destroy() {
    this._rootEl.innerHTML = "";
    this._model.removeListener("change", this._modelChangeListener);
  }

  _render() {
    this._rootEl.innerHTML = "";

    const h1El = document.createElement("h1");
    h1El.innerHTML = "Vanilla: " + this._model.getAll().length;

    this._rootEl.append(h1El);
  }
}

export default VanillaView;
