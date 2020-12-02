const composition = (...fns) => {
  return valor => {
    return fns.reduce(async (acc, fn) => {
      if (Promise.resolve(acc) === acc) {
        return fn(await acc)
      } else {
        return fn(acc)
      }
    }, valor)
  }
}

const irmaos = Array.of(
  { nome: 'caique', idade: 26 },
  { nome: 'isabella', idade: 22 },
  { nome: 'thomas', idade: 20 },
  { nome: 'igor', idade: 14 }
)

const idadetotal = irmaos.reduce((acc, irmao) => {
  const qtd = acc.qtd + 1
  const total = acc.total + irmao.idade
  return {
    qtd,
    total,
    media: total / qtd
  }
}, { qtd: 0, total: 0, media: 0 })

console.log(idadetotal)