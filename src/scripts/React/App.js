import App from "../Core/App.js";
import Model from "../Core/Model";
import View from "./View";
import { SessionStorage } from "../Core/Storage";

class ReactApp extends App {
  constructor(selector, storageKey = ReactApp.name) {
    const database = new SessionStorage(storageKey);
    const model = new Model(database.getAll());
    const view = new View(selector, model);

    super(model, view, database);
  }
}

export default ReactApp;
