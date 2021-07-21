import View from "../../Core/View";

class VanillaView extends View {
  constructor(selector, model) {
    super(selector, model);

    this._rootEl = document.querySelector(this._selector);
  }

  init() {
    super.init();
    this._render();
  }

  destroy() {
    super.destroy();
    this._rootEl.innerHTML = "";
  }

  _render() {
    //TODO:clear previous render event bindings
    //TODO render
    //TODO: reate new render event bindings

    this._rootEl.innerHTML = "";

    const h1El = document.createElement("h1");
    h1El.innerHTML = "Vanilla: " + this._model.getAll().length;

    this._rootEl.append(h1El);
  }
}

export default VanillaView;
