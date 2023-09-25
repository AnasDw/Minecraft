export class Item {
  constructor(name) {
    this._Prop = name;
  }
  _getProp() {
    return this._Prop;
  }
  _setProp(name) {
    this._Prop = name;
  }
}
