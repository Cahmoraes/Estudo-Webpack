import { Header } from './app/Header'
import './style/css-style'
import imageText from './assets/images/image.jpg'

const header = new Header()
console.log(header.getMyFirstHeading())

document.querySelector('#imageText').setAttribute('src', imageText)