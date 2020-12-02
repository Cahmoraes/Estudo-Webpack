import './style'
import './app/style/scss/main'
import { Module } from 'webpack'
import { Controller } from './app/controllers/Controller'

// Images Import
const img_1 = require('./app/assets/images/imagem1.jpg')
const img_2 = require('./app/assets/images/imagem2.jpg')
const img_3 = require('./app/assets/images/imagem3.jpg')
const img_4 = require('./app/assets/images/imagem4.jpg')
const img_5 = require('./app/assets/images/imagem5.jpg')
const img_6 = require('./app/assets/images/imagem6.jpg')
const mapa = require('./app/assets/images/mapa.png')

// Add images on document
document.querySelector('#img_1')?.setAttribute('src', img_1.default)
document.querySelector('#img_2')?.setAttribute('src', img_2.default)
document.querySelector('#img_3')?.setAttribute('src', img_3.default)
document.querySelector('#img_4')?.setAttribute('src', img_4.default)
document.querySelector('#img_5')?.setAttribute('src', img_5.default)
document.querySelector('#mapa')?.setAttribute('src', mapa.default)


// Initialize controller

const controller = new Controller()
controller.initWindowSmooth()
controller.initTabMenu()
controller.iniAccordion()
controller.initSmoothScroll()


