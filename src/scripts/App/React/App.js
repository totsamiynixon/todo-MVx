import App from "../Core/App.js";
import Model from "../Core/Model";
import View from "./View";
import { SessionStorage } from "../Core/Storage";

class ReactApp extends App {
  constructor(selector, storageKey = ReactApp.name) {
    const model = new Model();
    const view = new View(selector, model);
    const database = new SessionStorage(storageKey);

    super(model, view, database);
  }
}

class ReactExternalModelApp extends App {
  constructor(selector, model, storageKey = ReactApp.name) {
    const view = new View(selector, model);
    const database = new SessionStorage(storageKey);

    super(model, view, database);
  }
}

export { ReactExternalModelApp };

export default ReactApp;
