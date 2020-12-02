import './assets/css/style'
console.log('hello')
const porta = 3003
const url = `http://localhost:${porta}`

// fetch(`${url}/produtos`)
//   .then(res => res.text())
//   .then(console.log)

fetch(`${url}/produtos`, {
  method: 'POST',
  headers: {
    'content-type': 'application/json; charset=utf-8;'
  },
  body: 'Caique'
})
  .then(res => res.text())
  .then(console.log)
