const porta = 3004
const app = require('express')()
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/produtos', cors(), (req, res, next) => {
  console.log(req)
  res.send({ message: 'sucesso' })
})

app.listen(porta, () => {
  console.log(`Servidor ouvindo na porta ${porta}`)
})