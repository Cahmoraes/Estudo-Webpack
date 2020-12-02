import { Init, ConfigElements, BindEvents } from '../interfaces/';
import { domInject } from '../helpers/decorators';
import { debounce } from '../helpers/functions';

export class WindowSmooth implements Init<WindowSmooth>, BindEvents {

  @domInject('[data-scroll]', true)
  private _elements: NodeListOf<HTMLElement>
  private _configElements: ConfigElements[]
  private _activeClass = 'ativo'

  constructor() { }

  private getConfigElements() {
    this._configElements = [...this._elements].map(element => ({
      element,
      offset: Math.floor(element.offsetTop - window.innerHeight * 0.4)
    })
    )
  }

  private addEventSmoothScroll() {
    window.addEventListener('scroll', this.smoothScroll)
  }

  smoothScroll() {
    this._configElements.forEach(reference => {
      if (reference.offset < window.pageYOffset) {
        reference.element.classList.add(this._activeClass)
      } else if (reference.element.classList.contains(this._activeClass)) {
        reference.element.classList.remove(this._activeClass)
      }
    })
  }

  bindEvent(): void {
    this.smoothScroll = debounce(this.smoothScroll.bind(this), 500)
  }

  init(): this {
    this.bindEvent()
    this.getConfigElements()
    this.addEventSmoothScroll()
    return this
  }
}