import './style/css-style'
import './style/sass-style'
import webpackgif from './assets/images/webpack.gif'

import { Header } from './app/header/Header'

const header = new Header()
console.log(header.getMyHeader())

document.querySelector('#imgWebpack').setAttribute('src', webpackgif)