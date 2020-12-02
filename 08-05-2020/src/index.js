import { Header } from './app/header'
import { Footer } from './app/footer'
import './style'
import './app/style/scss/main'
import webpackgif from './assets/images/webpack.gif'

const header = new Header()
const firstHeading = header.getFirstHeading()
console.log(firstHeading)

const footer = new Footer()
const firstFooter = footer.getFooterText()
console.log(firstFooter)

document.querySelector('#webpack-gif').setAttribute('src', webpackgif)