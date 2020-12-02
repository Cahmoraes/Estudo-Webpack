import template from './formularioComponent.html'
import { Init } from '../../interfaces/Init'
import { domInject } from '../../helpers/decorators/domInject'
import { Body } from './body.interface'
import { FormularioService } from './forumalarioService'

export class FormularioComponent implements Init<FormularioComponent> {

  private _id: string
  private _formName = 'form'
  private _body = {} as Body
  private _formService: FormularioService

  @domInject('[form-component="submit"]')
  private _btnSubmit: HTMLElement

  @domInject('[form-component="form"]')
  private _formElement: HTMLFormElement

  constructor(id: string) {
    this._id = id
    this._formService = new FormularioService()
  }

  render() {
    document.querySelector(this._id)?.insertAdjacentHTML('afterbegin', template({
      formName: this._formName
    }))
  }

  addEventForm() {
    this._formElement.addEventListener('submit', this.handleSubmit)
  }

  handleSubmit(event: Event) {
    event.preventDefault()
    const formElements = this._formElement.elements as any
    const nome = formElements[0].value
    console.log(nome)
    this._body.nome = nome
    console.log(this._body)
    this._formService.getProdutos()
      .then(response => response.json())
      .then(console.log)
  }



  bindMethods() {
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  init() {
    this.bindMethods()
    this.render()
    this.addEventForm()
    return this
  }

}