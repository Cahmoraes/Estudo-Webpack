import './helpers/definitions/custom'
import './style/style'
import imgTest from './assets/images/image.jpg'


document.querySelector('#imgTest')?.setAttribute('src', imgTest)

const inputMenu = document.querySelector('#inputMenu') as HTMLInputElement
const areaMenu = document.querySelector('nav ul') as HTMLElement


inputMenu.addEventListener('click', event => {
  const html = document.documentElement
  const outside = 'data-outside'

  if (!inputMenu.hasAttribute(outside)) {
    html.addEventListener('click', clickOutside)
    inputMenu.setAttribute(outside, '')
  }

  function clickOutside() {
    console.log('aqui')
    if (!areaMenu.contains(event.target as HTMLElement)) {
      inputMenu.removeAttribute(outside)
      inputMenu.checked = false
      html.removeEventListener('click', clickOutside)
    }
  }
})