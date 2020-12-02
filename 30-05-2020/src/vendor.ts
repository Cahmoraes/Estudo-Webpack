import './style/style'


import logo from './assets/images/brafe.png'
import cafe1 from './assets/images/cafe-1.jpg'
import cafe2 from './assets/images/cafe-2.jpg'

document.querySelectorAll('.logo-brafe').forEach(item => item.setAttribute('src', logo))
document.querySelector('#cafe1')?.setAttribute('src', cafe1)
document.querySelector('#cafe2')?.setAttribute('src', cafe2)