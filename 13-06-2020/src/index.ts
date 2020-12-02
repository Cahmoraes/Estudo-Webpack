import './style/style'
import { Header } from './components/header/index'
import image from './assets/images/image.jpg'

class Home {

  constructor(private _id = "#app") { }

  renderHeader() {
    new Header('#header').init()
  }

  init() {
    this.renderHeader()
    return this
  }
}

new Home('#app').init()

document.querySelector('#imgTest')?.setAttribute('src', image)
// new ShowImage('#app', './assets/images/image.jpg')