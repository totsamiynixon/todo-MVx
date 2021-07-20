import View from "../../Core/View";

class VanillaView extends View {
  constructor(elemId, model) {
    super(elemId, model);

    this._rootEl = document.getElementById(this._elemId);
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
