const app = require('express')()
const bodyParser = require('body-parser')
const cors = require('cors')
const porta = 3003

const issue2options = {
  origin: true,
  methods: ["POST"],
  credentials: true,
  maxAge: 3600
}

app.use(bodyParser.urlencoded({ 'extended': true }))
app.use(bodyParser.json())

// app.get('/produtos', cors(), (req, res, next) => {
//   res.send('get recebido')
// })

app.options("/produtos", cors(issue2options));
app.post('/produtos', cors(issue2options), (req, res, next) => {
  console.log(req.body)
  res.send('post recebido')
})


app.listen(porta, () => {
  console.log(`Servidor escutando na porta: ${porta}`)
})
