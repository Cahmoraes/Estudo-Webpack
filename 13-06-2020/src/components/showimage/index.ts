import dominject from '../../helpers/decorators/dominject'


export class ShowImage {

  @dominject("#app")
  private _container: HTMLElement

  constructor(container: string, image: string) {
    console.log(this)
  }

}