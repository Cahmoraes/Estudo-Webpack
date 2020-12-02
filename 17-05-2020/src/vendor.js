import './style/css-style'

const tecnicasAprendizagem = [
  {
    tecnica: 'Prática Espaçada',
    eficiencia: 'Alta'
  },
  {
    tecnica: 'Estudo Intercalado',
    eficiencia: 'Alta'
  },
  {
    tecnica: 'Reflexão',
    eficiencia: 'Alta'
  },
  {
    tecnica: 'Elaboração',
    eficiencia: 'Alta'
  },
  {
    tecnica: 'Geração',
    eficiencia: 'Alta'
  },
  {
    tecnica: 'Calibração',
    eficiencia: 'Alta'
  }
]

const divTecnicas = document.querySelector('#tecnicas')

divTecnicas.insertAdjacentHTML('afterbegin', tecnicasAprendizagem.reduce((acc, item, index, array) =>
  acc += `
    ${
  index === 0 ?
    `
        <thead>
          <th>Técnica / Estratégia</th>
          <th>Eficiência</th>
        </thead>
      `
    : ''
  }
    <tr>
      <td>${ item.tecnica}</td>
      <td>${ item.eficiencia}</td>
    </tr>
    ${ index === (array.length - 1) ? '</table>' : ''}
  `
  , `<table border="1" cellpadding="5" cellspacing="2">`))

// console.log(tecnicasAprendizagem.length - 1)


// const doTheJob = async () => {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
//       method: 'post',
//       headers: {
//         'Content-type': 'application/json; charset=utf-8'
//       },
//       body: JSON.stringify({ title: 'Estudos', body: 'API Fetch' })
//     })
//     console.log(response)
//   } catch (e) {
//     console.log(e)
//   }
// }

// // doTheJob()

// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'post',
//   headers: {
//     'Content-Type': 'application/json charset=uft-8'
//   },
//   body: JSON.stringify({ title: 'Estudos', body: 'API Fetch' })
// })
//   .then(res => res.json())
//   .then(res => {
//     console.log('res')
//     console.log(res)
//   })

const myPromise = (param) => new Promise((resolve, reject) => {
  if (param === true) {
    resolve('resolvida')
  } else {
    reject('Rejeitado')
  }
})

const pross = async () => {
  try {
    const response = await myPromise(true)
    console.log(response)
  } catch (e) {
    //console.log(e)
  }
}
pross()