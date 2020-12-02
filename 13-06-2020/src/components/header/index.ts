import template from './index.html'
import './style'
import dominject from '../../helpers/decorators/dominject'

export class Header {

  private _container: HTMLElement
  @dominject('#btnSearch') private _btnSearch: HTMLElement
  @dominject('#container-search') private _containerSearch: HTMLElement
  @dominject('#btnClose') private _btnClose: HTMLElement
  private _activeClass = 'active'

  constructor(id: string) {
    this._container = document.querySelector(id) as HTMLElement
  }

  render() {
    this._container.insertAdjacentHTML('afterbegin', template())
  }

  handleBtnSearchClick(event: Event) {
    event.preventDefault()
    this._containerSearch.classList.add(this._activeClass)
  }

  handleBtnCloseClick(event: Event) {
    event.preventDefault()
    this._containerSearch.classList.remove(this._activeClass)
  }

  addEventBtnSearch() {
    this._btnSearch.addEventListener('click', this.handleBtnSearchClick)
    this._btnClose.addEventListener('click', this.handleBtnCloseClick)
  }

  bindEvents() {
    this.handleBtnSearchClick = this.handleBtnSearchClick.bind(this)
    this.handleBtnCloseClick = this.handleBtnCloseClick.bind(this)
  }

  init() {
    this.bindEvents()
    this.render()
    this.addEventBtnSearch()
    console.log(this)
    return this
  }
}