const id = n => document.getElementById(n)
const find = (n, s = document) => s.querySelector(n)
const findAll = (n, s = document) => [...s.querySelectorAll(n)]

const on = (ev, el, fn) => {
  if (typeof fn != 'function') throw Error('fn provided is not a function')
  el.addEventListener(ev, fn)
}

const click = (all, fn) => {
  const handle = on.bind(null, 'click')
  if (Array.isArray(all)) iterate(all, el => handle(el, fn))
  else if (typeof fn == 'function') handle(all, fn)
  else all.click()
}

const dispatch = (el, name, detail) => {
  const data = { bubbles: true }
  if (detail) data.detail = detail
  el.dispatchEvent(new CustomEvent(name, data))
}

const attr = (all, prop, val) => {
  if (Array.isArray(all)) iterate(all, el => el.setAttribute(prop, val))
  else if (val) all.setAttribute(prop, val)
  else return all.getAttribute(prop)
}

const cls = {
  add    : classes.bind(null, 'add'),
  remove : classes.bind(null, 'remove'),
  toggle : classes.bind(null, 'toggle'),
  has    : (el, cls) => el.classList.contains(cls)
}

const create = (tag = '', options = {}) => {
  const { id, classes, attributes } = options
  const el = document.createElement(tag)

  if (id) el.id = id
  if (classes) cls.add(el, classes)
  if (attributes) {
    for (let prop in attributes) {
      attr(el, prop, attributes[prop])
    }
  }

  return el
}

const wrap = (el, wrapper) => {
  el.parentNode.insertBefore(wrapper, el);
  wrapper.appendChild(el);
}

const ready = fn => on('DOMContentLoaded', window, fn)

export default {
  id,
  find,
  findAll,

  ready,
  on,
  click,
  dispatch,
  attr,
  create,
  wrap,

  cls,
  class: cls,
}

function iterate (arr, fn) {
  const len = arr.length
  let i = 0
  while (i < len) {
    fn.call(this, arr[i])
    i++
  }
}

function classes (prop, all, ..._str) {
  if (!_str.length) throw Error('You need at least one class to ' + prop)
  // NOTE: Any space in the first class will mean every string after it is ignored
  const str = _str.length == 1
    ? typeof _str[0] == 'string'
      ? _str[0].split(' ')
      : _str[0]
    : _str

  if (Array.isArray(all)) {
    iterate(all, el => {
      iterate(str, s => el.classList[prop](s))
    })
  } else {
    iterate(str, s => all.classList[prop](s))
  }
}