class Produto {
  constructor(nome, preco) {
    this._nome = nome
    this._preco = preco
  }

  get nome() {
    return this._nome
  }

  get preco() {
    return this._preco
  }
}

export { Produto }