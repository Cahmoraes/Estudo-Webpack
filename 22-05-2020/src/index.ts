import { Header } from './app/Header'
import { Footer } from './app/Footer'
// Importando os estilos
import './style/style'
// Declarando as imagens
const brafeLogo = require('./assets/images/brafe.png')
const cafe1 = require('./assets/images/cafe-1.jpg')
const cafe2 = require('./assets/images/cafe-2.jpg')
const imgBotafogo = require('./assets/images/botafogo.jpg')
const imgIguatemi = require('./assets/images/iguatemi.jpg')
const imgMineirao = require('./assets/images/mineirao.jpg')

console.log('hello world')

const header = new Header()
console.log(header.getMyFirstHeading())

const footer = new Footer()
console.log(footer.getMyFooterTexting())

document.querySelectorAll('.brafe-logo').forEach(element => element.setAttribute('src', brafeLogo.default))
document.querySelector('#cafe1')?.setAttribute('src', cafe1.default)
document.querySelector('#cafe2')?.setAttribute('src', cafe2.default)