import './style/css-style'
import './style/scss-style'
import './custom'
import imgTest from './assets/images/image.jpg'

console.log('index')

document.querySelector('#imgTest')?.setAttribute('src', imgTest)
