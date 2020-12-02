import './helpers/definitions/custom'
import './style/css-style'
import './style/scss-style'

import imgTest from './assets/images/image.jpg'

console.log('main')
document.querySelector('#imgTest')?.setAttribute('src', imgTest)

