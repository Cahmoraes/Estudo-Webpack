class Header {

  private _heading: string

  constructor() {
    this._heading = `Header Initialized`
  }

  getMyFirstHeading() {
    return this._heading
  }
}

export { Header }