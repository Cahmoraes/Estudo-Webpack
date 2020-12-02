
const API = 'http://localhost:3004/'

export class FormularioService {
  constructor() { }

  getProdutos() {
    return fetch(API + 'produtos')
  }
}