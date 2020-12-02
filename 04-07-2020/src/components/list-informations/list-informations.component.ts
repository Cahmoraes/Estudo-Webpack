import './list-information.component.scss'
import template from './list-information.component.html'
import { domInject } from '../../helpers/decorators/domInject'
import { ListInformationsService } from './list-informations.service'
import { Pessoa } from '../../interfaces/Pessoa.interface'

export class ListInformations {

  @domInject('#divList')
  divList: HTMLElement
  private listInformationsService = new ListInformationsService()

  constructor(
    private url: string,
  ) { }

  requestInformations() {
    this.listInformationsService
      .getListInformation(this.url)
      .then(this.handleResponse)
      .then(this.parseJson)
      .then(this.handleInformations)
      .catch(console.error)
  }

  handleInformations(pessoas: Pessoa[]) {
    console.log(pessoas)
    this.render(pessoas)
  }

  handleResponse(response: Response): Response {
    if (!response.ok) throw new Error(response.statusText)
    else return response
  }

  parseJson(response: Response): Promise<Pessoa[]> {
    return response.json()
  }

  render(pessoas: Pessoa[]): void {
    this.divList.insertAdjacentHTML('afterbegin', template({
      pessoas: pessoas
    }))
  }

  bindEvents() {
    this.handleInformations = this.handleInformations.bind(this)
  }

  init() {
    this.bindEvents()
    this.requestInformations()
    return this
  }
}