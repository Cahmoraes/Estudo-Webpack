import { Init } from '../interfaces';
import { domInject } from '../helpers/decorators';

export class Accordion implements Init<Accordion> {

  @domInject('[data-accordion] dt', true)
  private _accordionElements: NodeListOf<HTMLLIElement>
  private _activeClass = 'ativo'

  constructor() { }

  private handleClick(event: Event) {
    this.toggleAccordion(event.currentTarget as HTMLElement)
  }

  private toggleAccordion(element: HTMLElement) {
    element.classList.toggle(this._activeClass)
    element.nextElementSibling?.classList.toggle(this._activeClass)
  }

  private addEventAccordion(): void {
    this._accordionElements.forEach(dt => {
      dt.addEventListener('click', this.handleClick.bind(this))
    })
  }

  init(): this {
    this.addEventAccordion()
    return this
  }
}