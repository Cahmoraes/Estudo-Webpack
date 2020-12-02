import './style/style'
const imgLogo = require('./assets/images/brafe.png')
const cafe1 = require('./assets/images/cafe-1.jpg')
const cafe2 = require('./assets/images/cafe-2.jpg')
const imgIguatemi = require('./assets/images/iguatemi.jpg')


document.querySelectorAll('.brafe-logo')?.forEach(item => item.setAttribute('src', imgLogo.default))
document.querySelector('#cafe1')?.setAttribute('src', cafe1.default)
document.querySelector('#cafe2')?.setAttribute('src', cafe2.default)
document.querySelectorAll('.imgIguatemi')
  ?.forEach(item => item.setAttribute('src', imgIguatemi.default))