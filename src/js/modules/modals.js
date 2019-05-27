import q from '../utils/query'

export default function Modal () {
  const triggers   = q.findAll('[data-open], [data-close]')
  const openClass  = 'open'
  let modals       = q.findAll('.modal')
  let currentModal = null
  
  q.ready(e => {
    for (let i = modals.length;i--;) {
      document.body.insertBefore(modals[i], null)
      wrapModal(modals[i])
      q.class.add(modals[i], 'body')
    }

    q.click(q.findAll('.modal.overlay'), e => {
      q.class.has(e.target, 'overlay') && closeCurrentModal()
    })
    
    modals = modals.reduce((obj, curr) => ({
      ...obj,
      [curr.id]: curr.parentElement
    }), {})

    q.click(triggers, handleTriggerPress)
    q.on('keyup', window, handleKeyPress)
  })

  function handleTriggerPress (e) {
    e.preventDefault()
    return q.attr(this, 'data-open')
      ? openModal(q.attr(this, 'data-open'))
      : closeCurrentModal()
  }

  function handleKeyPress (e) {
    const key = e.which || e.keyCode
    if (key == 27) {
      closeCurrentModal()
    }
  }

  function wrapModal (body) {
    q.wrap(body, q.create('div', {
      classes: 'modal overlay'
    }))
  }

  function closeCurrentModal () {
    q.class.remove(modals[currentModal], 'open')
    currentModal = null
  }

  function openModal (id) {
    q.class.add(modals[id], 'open')
    currentModal = id
  }
}