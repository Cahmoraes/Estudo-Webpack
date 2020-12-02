import './assets/styles/style'


const url = 'https://ranekapi.origamid.dev/json/api/produto'
const urlImage = './assets/images/image.jpg'

// const fetchProducts = url => fetch(url)
// const handleResponse = response => {
//   if (response.ok) {
//     return response
//   } else {
//     throw new Error(`Arquivo não encontrado`)
//   }
// }

const handleResult = response => {
  return response.blob()
}

const createURL = blob => {
  const newUrl = URL.createObjectURL(blob)
  return newUrl
}

const insertImage = url => {
  const img = new Image()
  img.src = url
  const divBlob = document.querySelector('#imgBlob')
  divBlob.insertAdjacentElement('afterbegin', img)
}

// fetchProducts(urlImage)
//   .then(handleResponse)
//   .then(handleResult)
//   .then(createURL)
//   .then(insertImage)
//   .catch(console.log)

const doTheJob = async () => {
  try {
    const response = await fetch(urlImage)
    if (!response.ok) {
      throw new Error('Imagem não encontrada')
    } else {
      const imageBlob = await handleResult(response)
      const urlBlob = createURL(imageBlob)
      insertImage(urlBlob)
      return `Conseguimos!`
    }
  } catch (erro) {
    console.log(erro)
  }
}

const thejobResult = doTheJob()
thejobResult.then(console.log)