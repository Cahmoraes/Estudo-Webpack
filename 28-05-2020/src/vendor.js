import './style/menu'
import debounce from './app/debounce'

const menu = document.querySelector('header')

const handleEvent = () => {
  console.log('window.pageYOffset: ', window.pageYOffset)
  console.log('menu.offsetHeight: ', menu.offsetHeight)
  console.log('menu.offsetTop: ', menu.offsetTop)

  if (window.pageYOffset > menu.offsetHeight) {
    menu.classList.add('small')
  } else {
    menu.classList.remove('small')
  }
}

window.addEventListener('scroll', debounce(handleEvent))
