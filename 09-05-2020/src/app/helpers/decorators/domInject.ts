export function domInject(selector: string, list: boolean = false) {

  return (target: any, propertKey: PropertyKey) => {
    let element: HTMLElement | NodeListOf<HTMLElement>
    const getter = () => {
      if (!element && !list) element = document.querySelector(selector) as HTMLElement
      else if (!element && list) element = document.querySelectorAll(selector)
      return element
    }
    return Object.defineProperty(target, propertKey, {
      get: getter
    })
  }
}