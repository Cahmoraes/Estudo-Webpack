import './helpers/custom'
import './style/scss-style'
import './style/css-style'
import imgTest from './assets/images/image.jpg'

console.log('hello')

document.querySelector('#imgTest')!.setAttribute('src', imgTest)

const precos = [
  1000000,
  46000,
  16000,
  46000,
  17000
]

let maisBarato = 0

for (let atual = 0; atual < precos.length; atual++) {
  if (precos[atual] < precos[maisBarato]) {
    maisBarato = atual
  }
}

console.log(precos[maisBarato])

let maisCaro = 0

for (let atual = 0; atual < precos.length; atual++) {
  if (precos[atual] > precos[maisCaro]) {
    maisCaro = atual
  }
}

console.log(precos[maisCaro])

const produtos = new Array(
  {
    nome: 'maça',
    preco: 12
  },
  {
    nome: 'banana',
    preco: 4
  },
  {
    nome: 'pera',
    preco: 15
  },
)


function fnmaisBarato() {
  let maisBarato = produtos[0];
  produtos.forEach((item) => {
    if (item.preco < maisBarato.preco) {
      maisBarato = item
    }
  })
  return maisBarato
}

console.log(fnmaisBarato())