type elementType = HTMLElement | NodeListOf<HTMLElement>

export function DomInject(selector: string, list: boolean = false) {

  return function (target: any, propertyKey: PropertyKey) {
    let element: elementType
    const getter = function () {
      if (!element && !list) element = document.querySelector(selector) as HTMLElement
      else if (!element && list) element = document.querySelectorAll(selector)
      return element
    }
    return Object.defineProperty(target, propertyKey, {
      get: getter
    })
  }
}