import App from "../Core/App.js";
import Model from "../Core/Model";
import View from "./View";
import { LocalStorage } from "../Core/Storage";

class VanillaApp extends App {
  constructor(elemId) {
    const model = new Model();
    const view = new View(elemId, model);
    const database = new LocalStorage("vanilla-key");

    super(model, view, database);
  }
}

export default VanillaApp;
