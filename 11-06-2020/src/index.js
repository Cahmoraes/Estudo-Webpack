import './style/style'



const fields = document.querySelectorAll('[required]')
console.log(fields)

function customValidation(event) {
  // eliminar bubble
  event.preventDefault()



  const field = event.target
  // lógica para verificar se existem erros
  function verifyErrors() {
    let foundError = false

    for (const error in field.validity) {
      console.log(error)
      if (field.validity[error]) {
        foundError = erro
      }
    }

    return foundError
  }
  const error = verifyErrors()
  console.log("Error Exist: " + error)

  // if (error) {
  //   // trocar mensagem de invalid
  //   field.setCustomValidity("Esse campo é obrigatório")
  // } else {
  //   field.setCustomValidity("")
  // }

}

for (const field of fields) {
  field.addEventListener('invalid', customValidation)
}









document.querySelector("form")
  .addEventListener("submit", event => {
    event.preventDefault()
    console.log("pode enviar o formulário")
  })