import template from './templates/image-template.html'

document.body.insertAdjacentHTML('beforeend', template({
  nome: 'caique'
}))

const valores = [1, 2, 3, 4]

const resultados = (valores) => {
  return () => {
    console.log(valores)
  }
}

const res = resultados(valores)
console.log(res())