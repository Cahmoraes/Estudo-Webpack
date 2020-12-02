class Header {

  private textHeading: string = `Header Initialized`
  constructor() { }

  getMyFirstHeading() {
    return `${this.textHeading}`
  }
}

export { Header }