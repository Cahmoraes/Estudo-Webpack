class Header {

  private _textHeading: string = `Header Initialized`

  constructor() { }

  getMyHeading() {
    return this._textHeading
  }
}

export { Header }