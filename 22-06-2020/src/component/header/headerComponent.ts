import { DomInject } from '../../helpers/decorators/domInject'

class HeaderComponent {

  @DomInject('#header')
  private containerHeader: HTMLElement

  constructor() {
    console.log(this)
  }
}

export { HeaderComponent }