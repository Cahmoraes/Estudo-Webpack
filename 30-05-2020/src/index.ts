import './definitons/custom'
import './style/style-1'
import debounce from './helpers/debounce/debounce'


const header = document.querySelector('.header') as HTMLElement

const handleScroll = (event: Event) => {
  console.log('aqui')
  if (window.pageYOffset > header.offsetHeight) {
    header.classList.add('minimize')
  } else {
    header.classList.remove('minimize')
  }
}

window.addEventListener('scroll', debounce(handleScroll))