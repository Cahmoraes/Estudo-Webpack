type el = HTMLElement | NodeListOf<HTMLElement> | null

export default function (selector: string, list: boolean = false) {
  return (target: any, propertyKey: PropertyKey) => {
    let element: el
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