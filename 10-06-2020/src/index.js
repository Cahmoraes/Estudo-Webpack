import './style/style'
import { Produto } from './app/Produto'

const produtos = new Array(
  new Produto('lamboguini', 1000000),
  new Produto('Jipe', 46000),
  new Produto('Brasilia', 16000),
  new Produto('Smart', 46000),
  new Produto('Fusca', 17000)
)

function maisBarato(produtos) {
  let maisBarato = 0
  for (let atual = 0; atual < produtos.length; atual++) {
    if (produtos[atual].preco < produtos[maisBarato].preco) {
      maisBarato = atual
    }
  }
  return maisBarato
}

const produtoMaisBarato = maisBarato(produtos)

console.log(produtos[produtoMaisBarato].nome, produtos[produtoMaisBarato].preco)
