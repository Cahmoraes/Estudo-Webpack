export function debounce(callback: Function, delay: number = 200) {
  let timer: any
  return (...args: any[]) => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      callback(...args)
      timer = null
    }, delay)
  }
}