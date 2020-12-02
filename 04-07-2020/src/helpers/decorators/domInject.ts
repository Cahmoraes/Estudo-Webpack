type element = HTMLElement | NodeListOf<HTMLElement> | null

export const domInject = (selector: string, list: boolean = false) => {
  return (target: any, propertyKey: PropertyKey) => {
    let element: element
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