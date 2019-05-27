import { throttle } from 'lodash'
import smooth from 'smoothscroll'

export default function () {
  const button = document.getElementById('scroll-to-top')

  const VISIBLE = 'visible'
  const RAISED = 'raised'

  const handleScroll = throttle(e => {
    if (window.scrollY > window.innerHeight * 1.35) {
      button.classList.add(VISIBLE)
    } else {
      button.classList.remove(VISIBLE)
    }
  }, 500)

  const handleToggle = e => {
    if (button.classList.contains(RAISED)) {
      button.classList.remove(RAISED)
    } else {
      button.classList.add(RAISED)
    }
  }

  const scrollToTop = e => {
    smooth(document.body)
  }

  button.classList.add(RAISED)

  window.addEventListener('scroll', handleScroll)
  window.addEventListener('mobile-bar-toggled', handleToggle)
  button.addEventListener('click', scrollToTop)
}