import './assets/css/style'
import Linkedlist from './helper/linkedlist/linkedlist'

const p = new Proxy({ location: location.href }, {
  get(target, propertyName) {
    target['callback']()
    return target[propertyName]
  }
})

p.callback = function () {
  console.log('callback')
}


window.addEventListener('popstate', () => {
  console.log('aqui')
  console.log(location.href)
  console.log(p.location)
})

window.history.pushState({}, '', '?page=2')
window.history.pushState({}, '', '?page=3')




console.log('hello')

const l = new Linkedlist()
console.log(l.insertElement('caique'))
l.insertElement('thomas')
l.insertElement('isabella')
console.log(l.insertElementAt('igor', 2))
console.log(l.toString())