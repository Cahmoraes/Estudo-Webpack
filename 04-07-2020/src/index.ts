import './assets/css/style'
import { ListInformations } from './components/list-informations/list-informations.component'

const url = '../src/config/config.json'

new ListInformations(url).init()