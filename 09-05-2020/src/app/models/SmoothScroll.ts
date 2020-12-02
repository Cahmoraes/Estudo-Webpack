import { Init } from '../interfaces';
import { domInject } from '../helpers/decorators';

export class SmoothScroll implements Init<SmoothScroll> {

  @domInject('[data-menu] a[href^="#"]', true)
  private elements: NodeListOf<HTMLElement>

  constructor() { }

  private scrollToSection(element: HTMLElement) {
    const id = element.getAttribute('href') as string
    const elementTo = document.querySelector(id) as HTMLElement
    window.scrollTo({
      top: elementTo.offsetTop,
      behavior: 'smooth'
    })
  }

  private handleClick(event: Event) {
    event?.preventDefault()
    this.scrollToSection(event.currentTarget as HTMLElement)
  }

  private addEventMenu() {
    this.elements.forEach(element => {
      element.addEventListener('click', this.handleClick.bind(this))
    })
  }

  init(): this {
    this.addEventMenu()
    return this
  }
}