import App from "../Core/App.js";
import Model from "../Core/Model";
import View from "./View";
import { LocalStorage } from "../Core/Storage";

class VanillaApp extends App {
  constructor(selector, storageKey = VanillaApp.name) {
    const database = new LocalStorage(storageKey);
    const model = new Model(database.getAll());
    const view = new View(selector, model);

    super(model, view, database);
  }
}

export default VanillaApp;
