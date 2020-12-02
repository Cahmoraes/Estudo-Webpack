export default (callback: Function, deleay: number = 200) => {
  let timer: any
  return (...args: any[]) => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      callback(...args)
      timer = null
    }, deleay)
  }
}