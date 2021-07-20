import App from "../Core/App.js";
import Model from "../Core/Model";
import View from "./View";
import { SessionStorage } from "../Core/Storage";

class ReactApp extends App {
  constructor(elemId) {
    const model = new Model();
    const view = new View(elemId, model);
    const database = new SessionStorage('react-key');

    super(model, view, database);
  }
}

export default ReactApp;
