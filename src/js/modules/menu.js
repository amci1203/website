import $ from 'jquery'
import { throttle } from 'lodash'

export default function Menu () {
  const icon = $('.menu-toggle').first()
  const buttons = $('.nav--mobile')
  const content = $('.nav--primary')
  const interval = 80
  const required = 2
  // const links = content.find('a')
  const smButtons = $('#social-media-buttons')
  
  let prevScroll = 0
  let consecutives = 0
  let prevDirection = 'down';

  const toggleEvent = new Event('mobile-bar-toggled')

  function toggleMenu () {
    $('html').toggleClass('scroll-lock')
    icon.toggleClass('close')
    content.toggleClass('nav--primary--open')
    buttons.toggleClass('menu-open')
  }

  function closeMenu () {
    const targetClass = 'nav--primary--open'
    const isAnchor = $(this).attr('href').charAt('0') == '#'
    if (content.hasClass(targetClass) && isAnchor) toggleMenu()
  }

  function handleScroll (event) {
    const scroll = $(window).scrollTop()
    const direction = scroll > prevScroll ? 'down' : 'up'

    consecutives = direction === prevDirection ? consecutives + 1 : 0

    if (consecutives === required) {
      if (direction === 'up' && !buttons.hasClass('visible')) {
        buttons.addClass('visible')
        window.dispatchEvent(toggleEvent)
      } else if (direction === 'down' && buttons.hasClass('visible')) {
        buttons.removeClass('visible')
        window.dispatchEvent(toggleEvent)
        // smButtons.removeClass('visible')
      }
    } else prevDirection = direction;

    prevScroll = scroll;
  }

  function selectActiveLink () {
    const { pathname } = window.location

    if (pathname === '/' || pathname === '/index.html') {
      $('._home').addClass('active')
      return
    }

    const isBasePath = pathname.indexOf('/', 1)
    const section = pathname.substring(1, (
      isBasePath + 1
      ? isBasePath
      : pathname.indexOf('.')
    ))

    $('._' + section).addClass('active')
  }

  return (function () {
    selectActiveLink()
    icon.click(toggleMenu)
    $(window).scroll(throttle(handleScroll, interval))
  })()
}