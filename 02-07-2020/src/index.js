import './assets/css/style'
import { getText } from './assets/js/config'

// Variáveis
const content = document.querySelector('#content')

function composicao(...fns) {
  return valor => {
    return fns.reduce(async (acc, fn) => {
      if (Promise.resolve(acc) === acc) {
        return fn(await acc, valor)
      } else {
        return fn(acc, valor)
      }
    }, valor)
  }
}

const debounce = (fn, delay = 200) => {
  let timer
  return (...args) => {
    if (timer) clearTimeout(timer)
    timer = timer = setTimeout(() => {
      fn(...args)
      timer = null
    }, delay)
  }
}

const removeSpaces = texto => texto.trim()
const getLength = texto => texto.length
const isMobile = () => window.matchMedia('(max-width:768px)').matches
const isMaxThan = max => valor => valor > max
const sliceText = boolean => slice => texto => {
  return boolean ? `${texto.slice(0, (slice || texto.length))}...` : texto
}


const insertText = texto => {
  content.insertAdjacentHTML('afterbegin', texto)
}

const repeatText = vezes => texto => Array(vezes).fill(`${texto} + '<br>'`).join('')

const createBar = () => {
  const bar = document.createElement('div')
  bar.id = 'progressbar'
  bar.style.cssText = `
    height: 3px;
    width: 0;
    background: #7a04ab;
    position: fixed;
    top: 0;
    left: 0;
    transition: 0.2s;
  `
  document.body.append(bar)
}

const addEventWindow = () => {
  const bar = document.querySelector('#progressbar')
  window.addEventListener('scroll', debounce(handleScroll(bar)))
}

const handleScroll = barElement => event => {
  const scrollY = window.pageYOffset
  const contentHeight = content.offsetHeight
  const progress = scrollY * 100 / contentHeight
  barElement.style.width = `${progress}%`
}

composicao(
  removeSpaces,
  repeatText(15)
)(getText())
  .then(texto => {
    insertText(texto)
    createBar()
    addEventWindow()
  })
