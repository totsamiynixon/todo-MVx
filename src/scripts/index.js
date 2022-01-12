import "../styles/index.scss";

import Model from "./Core/Model";
import LocalStorage from "./Core/Storage/LocalStorage.js";
import VanillaView from "./Vanilla/View";
import ReactView from "./React/View";
import App from "./Core/App";

if (process.env.NODE_ENV === "development") {
  require("../index.html");
}

const vanillaAppContainerId = "vanillaApp";
const reactAppContainerId = "reactApp";

const vanillaAppContainer = document.createElement("div");
vanillaAppContainer.id = vanillaAppContainerId;
document.body.appendChild(vanillaAppContainer);

const reactAppContainer = document.createElement("div");
reactAppContainer.id = reactAppContainerId;
document.body.appendChild(reactAppContainer);

const storage = new LocalStorage("app");
const model = new Model(storage.getAll());

const vanillaView = new VanillaView(`#${vanillaAppContainerId}`, model);
const reactView = new ReactView(`#${reactAppContainerId}`, model);

const vanillaApp = new App(model, vanillaView, storage);
const reactApp = new App(model, reactView, storage);

window.vanillaApp = vanillaApp;
window.reactApp = reactApp;

vanillaApp.init();
reactApp.init();
