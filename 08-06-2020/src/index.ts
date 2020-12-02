import './style/css-style'
import './style/scss-style'
import './helpers/custom'

import { RouterService } from './routes'
import { HomeComponent } from './components/Home/HomeComponent'

new RouterService([
  {
    path: 'home',
    component: HomeComponent
  }
])