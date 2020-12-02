const privates = new WeakMap

function Queue2() {
  const me = new Object({
    first: 0,
    tail: 0,
    items: {}
  })
  privates.set(this, me)
}

Queue2.prototype.size = function () {
  return privates.get(this).tail - privates.get(this).first
}

Queue2.prototype.isEmpty = function () {
  return this.size() === 0
}

Queue2.prototype.enqueue = function (elemento) {
  const p = privates.get(this)
  p.items[p.tail] = elemento
  p.tail++
  return this.size()
}

Queue2.prototype.dequeue = function () {
  if (this.isEmpty()) return undefined
  const p = privates.get(this)
  const elemento = p.items[p.first]
  delete p.items[p.first]
  p.first++
  return elemento
}

Queue2.prototype.peek = function () {
  const p = privates.get(this)
  return p.items[p.first]
}

Queue2.prototype.clear = function () {
  const p = privates.get(this)
  p.items = {}
  p.first = 0
  p.tail = 0
}

Queue2.prototype.toString = function () {
  if (this.isEmpty()) return ''
  const p = privates.get(this)
  let queue = p.items[p.first]
  for (let i = p.first + 1; i < this.size(); i++) {
    queue = `${queue}, ${p.items[i]}`
  }
  return queue
}

const q = new Queue2
q.enqueue('caique')
q.enqueue('thomas')
q.enqueue('isabella')
console.log(q.dequeue())