import './assets/css/style'
import Config from './config/inforamcoes'

function ErrorExceptionResponse(message) {
  this.message = message
  this.name = 'ErrorExceptionResponse'
  this.getMessage = function () {
    return `
      Message: ${this.message}
      Name: ${this.name}
    `
  }
}

const url = './src/config/informacoes.json'

// const getInformations = async () => {
//   try {
//     const response = await (await fetch(url)).json()
//     console.log(response)
//   } catch (e) {
//     console.error(new ErrorExceptionResponse(e).getMessage())
//   }
// }

// getInformations()

function getItems(url) {
  return fetch(url)
}

const checkStatus = response => {
  if (response.ok === true) return response
  else throw new ErrorExceptionResponse(response.statusText)
}

const parseJson = response => response.json()


const container = document.querySelector('.container')
const render = obj => {
  container.children[0].innerHTML = ''
  const mapItems = obj => obj.map(item => `nome: ${item.nome} idade: ${item.idade}<br>`).join('')

  container.insertAdjacentHTML('afterbegin', `${mapItems(obj)}`)


}

// getItems(url)
//   .then(checkStatus)
//   .then(parseJson)
//   .then(render)
//   .catch(console.error)

console.log(Config)

render(Config)