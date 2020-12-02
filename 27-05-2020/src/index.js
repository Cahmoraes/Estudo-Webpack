import './style/dragdrop/style'

// help
function log(message) {
  console.log('> ' + message)
}


const cards = document.querySelectorAll('.card')
const dropzones = document.querySelectorAll('.dropzone')

cards.forEach(card => {
  card.addEventListener('dragstart', dragstart)
  card.addEventListener('drag', drag)
  card.addEventListener('dragend', dragend)
})

function dragstart() {
  // log('Card: start dragging')
  dropzones.forEach(dropzone => dropzone.classList.add('highlight'))

  this.classList.add('is-dragging')
}

function drag() {
  // log('Card: is dragging')
}

function dragend() {
  // log('Card: stop dragging')
  dropzones.forEach(dropzone => dropzone.classList.remove('highlight'))
  this.classList.remove('is-dragging')
}

// dropzones

dropzones.forEach(dropzone => {
  dropzone.addEventListener('dragenter', dragenter)
  dropzone.addEventListener('dragover', dragover)
  dropzone.addEventListener('dragleave', dragleave)
  dropzone.addEventListener('drop', drop)
})

function dragenter() {
  log('Dropzone: Enter in dropzone')
}

function dragover() {
  // this equals dropzone
  this.classList.add('over')
  // get dragging card
  const cardBeingDragged = document.querySelector('.is-dragging')

  this.appendChild(cardBeingDragged)
}

function dragleave() {
  this.classList.remove('over')
}

function drop() {
  log('Dropzone: Dropped')
  this.classList.remove('over')
}
