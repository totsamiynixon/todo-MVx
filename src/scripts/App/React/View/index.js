import React from "react";
import ReactDOM from "react-dom";
import View from "../../Core/View";

function App({ model }) {
  return React.createElement("h1", null, `React: ${model.getAll().length}`);
}

class ReactView extends View {
  constructor(selector, model) {
    super(selector, model);

    this._rootEl = document.querySelector(this._selector);
  }

  init() {
    super.init();
    this._render();
  }

  destroy() {
    ReactDOM.unmountComponentAtNode(this._rootEl);
  }

  _render() {
    ReactDOM.render(
      React.createElement(App, { model: this._model }, null),
      this._rootEl
    );
  }
}

export default ReactView;
