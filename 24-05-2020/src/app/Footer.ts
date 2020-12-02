import { domInject } from './helpers/decorators/domInject'

class Footer {

  @domInject('#inputText')
  private _input: HTMLElement

  constructor() {
    console.log(this)
  }
}

export { Footer }