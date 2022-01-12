import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import View from "../../Core/View";

function ReactViewEngine({ model }) {
  const [items, setItems] = useState(model.getAll());

  useEffect(() => {
    const modelChangeListener = (model) => {
      setItems(model.getAll());
    };
    model.on("change", modelChangeListener);

    return () => {
      model.removeListener("change", modelChangeListener);
    };
  });

  return React.createElement(
    "h1",
    {
      onClick: () => model.addTodoItem({}),
      onContextMenu: (e) => {
        e.preventDefault();
        model.removeTodoItem(0);
      },
    },
    `React: ${items.length}`
  );
}

class ReactView extends View {
  constructor(selector, model) {
    super(selector, model);

    this._rootEl = document.querySelector(this._selector);
  }

  init() {
    ReactDOM.render(
      React.createElement(ReactViewEngine, { model: this._model }, null),
      this._rootEl
    );
  }

  destroy() {
    ReactDOM.unmountComponentAtNode(this._rootEl);
  }
}

export default ReactView;
