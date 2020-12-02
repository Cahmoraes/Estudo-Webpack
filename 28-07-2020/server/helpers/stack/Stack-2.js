const privates = new WeakMap

class Stack {
  constructor() {
    const me = new Object({
      count: 0,
      frames: {}
    })
    privates.set(this, me)
  }

  size() {
    return privates.get(this).count
  }

  isEmpty() {
    return this.size() === 0
  }

  push(element) {
    const p = privates.get(this)
    p.frames[p.count] = element
    p.count++
    return this.size()
  }

  pop() {
    if (this.isEmpty()) return undefined
    const p = privates.get(this)
    const frame = p.frames[p.count - 1]
    p.count--
    return frame
  }

  peek() {
    if (this.isEmpty()) return undefined
    return privates.get(this).frames[privates.get(this).count - 1]
  }

  clear() {
    const p = privates.get(this)
    p.count = 0
    p.frames = {}
  }

  toString() {
    if (this.isEmpty()) return ''
    const p = privates.get(this)
    let frames = p.frames[0]
    for (let i = 1; i < this.size(); i++)
      frames = `${frames}, ${p.frames[i]}`
    return frames
  }
}

const s = new Stack
s.push('caique')
s.push('thomas')
console.log(s.toString())