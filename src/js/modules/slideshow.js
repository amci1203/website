import $ from 'jquery'

export default function Slideshow (
  containerSelector = '',
  options = {
    interval: 10,
    pausable: false,
    auto: true,
    height: 400
  }
) {
  function init () {
    container.height(height)
    container.addClass('gallery')
    slides.addClass('gallery__slide')
    slides.eq(currentSlide).addClass('active')

    if (pausable) generatePlayButton()
    generateSlideButtons()
    generateJumpButtons()
    if (autoplay) togglePlayState()
    
    return {
      play,
      pause,
      togglePlayState,
      next,
      jump,
      setTimerInterval,
      getCurrentSlide,
      setSlideshowHeight,
      addListenersToSlideButtons
    }
  }

  const container = $(containerSelector).first()
  const slides = container.children()
  const numSlides = slides.length

  let {
    interval = 10,
    pausable = false,
    auto = true,
    height = 400
  } = options
  let currentSlide = 0
  let playing = false // start palying when init() is called
  let delay = false

  let timer
  let jumpButtons

  function play () {
    timer = setInterval(autoplay, interval * 1000)
    playing = true
  }
  function pause () {
    clearInterval(timer)
    playing = false
  }
  function restart () {
    pause()
    if (auto) play()
  }
  function togglePlayState () {
    const btn = this || container.find('.gallery__toggle-play')
    if (btn) btn.innerHTML = playing ? '&#9208;' : '&#9654;'
    playing ? pause() : play()
  }
  function autoplay () {
    if (delay) {
      delay = false
      return
    }
    next()
  }
  function next (dir = 'auto') {
    const n = numSlides
    const c = currentSlide
    if (dir) delay = true

    const next = dir === 'left'
    // is left
    ? c === 0 // is the last
      ? n - 1 // to the end
      : c - 1
    // is right
    : c === n - 1 // is the end
      ? 0 // to the beginning
      : c + 1
    selectActiveSlide(c, next)
  }
  function jump (index = 0) {
    console.log('Jumping to slide ' + index)
    if (index >= numSlides) {
      console.error(`Index Out Of Bounds: Slide ${index} does not exist in gallery (${container.selector})`)
      return
    }
    selectActiveSlide(currentSlide, index)
  }
  function setTimerInterval (_interval = 10) {
    interval = _interval
    restart()
  }
  function getCurrentSlide () {
    return currentSlide
  }
  function setSlideshowHeight (height = 400) {
    container.height(height)
  }

  function generateJumpButtons () {
    const buttons = document.createElement('aside')
    buttons.classList.add('gallery__jump-buttons')
    for (let i = 0; i < numSlides; i++) {
      const btn = document.createElement('button')

      btn.classList.add('j' + i)
      if (i === currentSlide) btn.classList.add('active')
      btn.addEventListener('click', e => jump(i))

      buttons.appendChild(btn)
    }
    container.append(buttons)

    jumpButtons = container.find('.gallery__jump-buttons').children()
  }

  function generateSlideButtons () {
    const left = document.createElement('button')
    const right = 

    ['left', 'right'].forEach((dir, i) => {
      const btn = document.createElement('button')

      btn.setAttribute('data-icon', 'ei-arrow-' + dir)
      btn.setAttribute('data-size', 'm')
      btn.classList.add('gallery__slide-button', dir)
      // due to the way evil-icons are placed into the page
      // the listeners must be attached AFTER the evil icons are placed in the page

      container.append(btn)
    })
  }

  function addListenersToSlideButtons () {
    $('.gallery__slide-button.left').click(e => next('left'))
    $('.gallery__slide-button.right').click(e => next('right'))
  }

  function generatePlayButton () {
    const btn = document.createElement('button')
    btn.classList.add('gallery__toggle-play')
    btn.addEventListener('click', togglePlayState)
    
    container.append(btn)
  }

  function selectActiveSlide (prev = 0, next = 0) {
    slides.eq(prev).removeClass('active')
    jumpButtons.eq(prev).removeClass('active')

    slides.eq(next).addClass('active')
    jumpButtons.eq(next).addClass('active')

    currentSlide = next
  }


  return init()
}