function domInject(selector: string, list: boolean = false) {

  return (target: any, propertyKey: PropertyKey) => {
    let element: HTMLElement | NodeListOf<HTMLLIElement>
    const getter = () => {
      if (!element && !list) element = document.querySelector(selector) as HTMLElement
      else if (!element && list) element = document.querySelectorAll(selector)
      return element
    }
    return Object.defineProperty(target, propertyKey, {
      get: getter
    })
  }
}

export { domInject }