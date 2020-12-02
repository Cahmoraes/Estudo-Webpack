import './style/css-style'
import './style/scss-style'
import imgTest from './assets/images/image.jpg'
import template from './templates/template.html'

console.log('aqui')

document.querySelector('#imgTest').setAttribute('src', imgTest)
document.querySelector('#template').insertAdjacentHTML('afterbegin', template({
  nome: 'Caique Moraes'
}))