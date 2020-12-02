export interface Pessoa {
  nome: string,
  idade: number,
  sexo: string,
  caracteristicas: {
    altura?: number,
    biotipo: string,
    peso: number
  },
  cor: string
}