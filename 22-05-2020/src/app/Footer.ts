class Footer {

  private _footerText: string = `My Footer Text`

  constructor() { }

  getMyFooterTexting() {
    return `${this._footerText}`
  }
}

export { Footer }