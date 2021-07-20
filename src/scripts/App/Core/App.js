class Application {
  constructor(model, view, database) {
    this._model = model;
    this._view = view;
    this._database = database;
  }

  init() {
    this._subsribeOnModelChange();
    this._view.init();
  }

  destroy() {
    this._view.destroy();
    this._unsubscribeOnModelChange();
  }

  _subsribeOnModelChange() {
    this._modelChangeListener = (model) => {
      this._database.update(model.getAll());
    };
    this._model.on("change", this._modelChangeListener);
  }

  _unsubscribeOnModelChange() {
    this._model.removeListener("change", this._modelChangeListener);
  }
}

export default Application;
