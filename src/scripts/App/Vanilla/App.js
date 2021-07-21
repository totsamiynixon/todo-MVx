import App from "../Core/App.js";
import Model from "../Core/Model";
import View from "./View";
import { LocalStorage } from "../Core/Storage";

class VanillaApp extends App {
  constructor(selector, storageKey = VanillaApp.name) {
    const model = new Model();
    const view = new View(selector, model);
    const database = new LocalStorage(storageKey);

    super(model, view, database);
  }
}

class VanillaExternalModelApp extends App {
  constructor(selector, model, storageKey = VanillaApp.name) {
    const view = new View(selector, model);
    const database = new LocalStorage(storageKey);

    super(model, view, database);
  }
}

export { VanillaExternalModelApp };

export default VanillaApp;
