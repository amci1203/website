import q from '../utils/query'

const containerSelector = '.tagged-items'
const tagsContainerSelector = '.tags'
const itemsListSelector = '.items > *'
const tagActiveClass = 'selected'

export default function TaggedItems () {
  let containers = q.findAll(containerSelector)
  const numContainers = containers.length
  if (!numContainers) return

  q.ready(e => {
    for (let i = numContainers;i--;) {
      const curr = containers[i]
      const tagsContainer = q.find(tagsContainerSelector, curr)
      const items = q.findAll(itemsListSelector, curr)

      generateTags(items, tagsContainer)
      const match = initMatcher(items)

      q.click(tagsContainer, function (e) {
        const tag = e.target
        const val = q.attr(tag)
        if (tag.includes(selected)) {
          q.cls.remove(tag, tagActiveClass)
          selected.splice(
            selected.findIndex(str => str === val),
            1
          )
        } else {
          q.cls.add(tag, tagActiveClass)
          selected.push(val)
        }

        match(selected)
      })
    }
  })

  function initMatcher (_list) {
    const list = _list.map(el => q.attr(el, 'data-tags').split(', '))
    return function (tags) {
      return list.map(arr => tags.every(t => arr.includes(t)))
    }
  }

  function generateTags (list, tagsContainer) {
    const tags = new Set(list.reduce((str, el) => `${str}, ${q.attr(el, 'data-tags')}`, 'All').split(', '))
    tags.forEach(tag => {
      const el = q.create('span')
      el.innerText = tag
      tagsContainer.appendChild(el)
    })
  }
}

function normalize (str) {
  return str.trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-zA-Z0-9 -]/g, '')
}