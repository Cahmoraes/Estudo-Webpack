const privates = new WeakMap

class Queue {
  constructor() {
    const me = new Object({
      tail: 0,
      first: 0,
      items: {}
    })
    privates.set(this, me)
  }

  size() {
    const p = privates.get(this)
    return p.tail - p.first
  }

  isEmpty() {
    this.size() === 0
  }

  enqueue(elemento) {
    const p = privates.get(this)
    p.items[p.tail] = elemento
    p.tail++
    return this.size()
  }

  dequeue() {
    if (this.isEmpty()) return undefined
    const p = privates.get(this)
    const first = p.items[p.first]
    delete p.items[p.first]
    p.first++
    return first
  }

  clear() {
    const p = privates.get(this)
    p.first = 0
    p.tail = 0
    p.items = {}
  }

  toString() {
    if (this.isEmpty()) return ''
    const p = privates.get(this)
    let queue = p.items[p.first]
    for (let i = p.first + 1; i < p.tail; i++) {
      queue = `${queue}, ${p.items[i]}`
    }
    return queue
  }
}