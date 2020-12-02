import domInject from './helpers/Decorators/domInject'
const imageJPG = require('../assets/images/imagem.jpg')

class Header {

  @domInject('#imgText')
  private _imageText: HTMLElement

  constructor() {
    console.log(this)
  }

  setImage() {
    this._imageText.setAttribute('src', imageJPG.default)
  }
}

export { Header }