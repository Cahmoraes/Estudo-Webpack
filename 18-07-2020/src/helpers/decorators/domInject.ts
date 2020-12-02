type el = NodeListOf<HTMLElement> | HTMLElement | null
export function domInject(selector: string, list: boolean = false) {
  return function (target: any, key: PropertyKey) {
    let element: el
    const getter = () => {
      if (!element && !list) element = document.querySelector(selector) as HTMLElement
      else if (!element && list) element = document.querySelectorAll(selector)
      return element
    }
    return Object.defineProperty(target, key, {
      get() {
        return getter()
      }
    })
  }
}