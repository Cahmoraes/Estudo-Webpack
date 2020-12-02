import './helpers/custom'

import './style/css-style'
import './style/scss-style'

import imgTest from './assets/images/image.jpg'
import imgTest2 from './assets/images/image2.jpg'

console.log('aqui')

document.querySelector('#igTest')!.setAttribute('src', imgTest)
document.querySelector('#igTest2')!.setAttribute('src', imgTest2)
