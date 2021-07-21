import "../styles/index.scss";

if (process.env.NODE_ENV === "development") {
  require("../index.html");
}

import Model from "./App/Core/Model";
import VanillaApp, { VanillaExternalModelApp } from "./App/Vanilla/App.js";
import ReactApp, { ReactExternalModelApp } from "./App/React/App.js";

//TODO: implement VanillaAppFactory
//TODO: implement ReactAppFactory

const vanillaApp = new VanillaApp("#vanilla");
const reactApp = new ReactApp("#react");

const externalModel = new Model();
const vanillaExternalModelApp = new VanillaExternalModelApp(
  "#vanillaExternal",
  externalModel,
  VanillaExternalModelApp.name
);
const reactExternalModelApp = new ReactExternalModelApp(
  "#reactExternal",
  externalModel,
  ReactExternalModelApp.name
);

window.vanillaApp = vanillaApp;
window.reactApp = reactApp;

window.externalModel = externalModel;
window.vanillaExternalModelApp = vanillaExternalModelApp;
window.reactExternalModelApp = reactExternalModelApp;
