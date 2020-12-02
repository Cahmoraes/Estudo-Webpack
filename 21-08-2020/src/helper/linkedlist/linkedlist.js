import defaultEquals from './defaultEquals'
import Node from './node'

export default class Linkedlist {
  constructor(equalsFn = defaultEquals) {
    this.head = undefined
    this.count = 0
    this.equalsFn = equalsFn
  }

  size() {
    return this.count
  }

  isEmpty() {
    return this.size() === 0
  }

  insertElement(element) {
    const node = new Node(element)
    if (this.isEmpty()) {
      this.head = node
    } else {
      let current = this.head
      while (current.next !== undefined) current = current.next
      current.next = node
    }
    this.count++
    return this.size()
  }

  getElementAt(index) {
    if (index >= 0 && index < this.size()) {
      let current = this.head
      if (index === 0) {
        return current
      } else {
        let previous
        for (let i = 0; i < index; i++) {
          previous = current
          current = current.next
        }
        return current
      }
    } else {
      return undefined
    }
  }

  removeElementAt(index) {
    if (index >= 0 && index < this.size()) {
      let current = this.head
      if (index === 0) {
        this.head = current.next
      } else {
        const previous = this.getElementAt(index - 1)
        current = previous.next
        previous.next = current.next
      }
      this.count--
      return current
    } else {
      return false
    }
  }

  indexOf(element) {
    let current = this.head
    for (let i = 0; i < this.size() && current != undefined; i++) {
      if (this.equalsFn(element, current.element)) {
        return i
      }
      current = current.next
    }
    return -1
  }

  remove(element) {
    const index = this.indexOf(element)
    return !!this.removeElementAt(index)
  }

  insertElementAt(element, index) {
    if (index >= 0 && index <= this.size()) {
      const node = new Node(element)
      let current = this.head
      if (index === 0) {
        node.next = current
        this.head = node
      } else {
        const previous = this.getElementAt(index - 1)
        current = previous.next
        previous.next = node
        node.next = current
      }
      this.count++
      return this.size()
    }
    return false
  }

  toString() {
    if (this.isEmpty()) return ''
    let list = this.head.element
    let current = this.head.next
    while (current !== undefined) {
      list = `${list}, ${current.element}`
      current = current.next
    }
    return list
  }
}