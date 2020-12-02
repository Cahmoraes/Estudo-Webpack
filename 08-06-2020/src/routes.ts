import Route from './interfaces/Route'

class RouterService {

  private container: HTMLElement

  constructor(private routes: Route[], selector: string = '#app') {
    this.container = document.querySelector(selector) as HTMLElement
    this.initRouter()
  }

  initRouter(): void {
    window.addEventListener('hashchange', this.handleRouterChange.bind(this))
  }

  handleRouterChange(event: HashChangeEvent) {
    const newURL = event.newURL
    const path = newURL.split('#/')[1]
    console.log('path ', path)
    const Component = this.routes.find(route => route.path === path)?.component
    new Component('#app').init()
  }
}


export { RouterService }