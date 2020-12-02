export default (callback, delay = 200) => {
  let timer
  return (...args) => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      callback(...args)
      timer = null
    }, delay)
  }
}