import { domInject } from '../helpers/decorators'
import { Init } from '../interfaces'

export class TabMenu implements Init<TabMenu> {

  @domInject('[data-tab="menu"] li', true)
  private _tabMenuItens: NodeListOf<HTMLElement>

  @domInject('[data-tab="content"] section', true)
  private _tabMenuContent: NodeListOf<HTMLElement>

  private activeClass = 'ativo'

  constructor() { }

  private changeMenu(...args: any[]) {
    if (event) event.preventDefault()
    this.changeItem(args[0])
  }

  private changeItem(index: number) {
    this._tabMenuContent.forEach(content => content.classList.remove(this.activeClass))
    this._tabMenuContent[index].classList.add(this.activeClass)
  }

  private addEventTabMenu(): void {
    this._tabMenuItens.forEach((item, index) => {
      item.addEventListener('click', this.changeMenu.bind(this, index))
    })
  }

  init(): this {
    this.addEventTabMenu()
    this.changeItem(0)
    return this
  }

}