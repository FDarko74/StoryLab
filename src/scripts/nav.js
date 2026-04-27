function showSection(index) {
  sections.forEach(sec => {
    sec.style.opacity = '0'
    sec.style.pointerEvents = 'none'
    setTimeout(() => sec.style.display = 'none', 300)
  })

  setTimeout(() => {
    sections[index].style.display = 'flex'
    setTimeout(() => {
      sections[index].style.opacity = '1'
      sections[index].style.pointerEvents = 'all'
    }, 10)
  }, 300)

  buttons.forEach(btn => btn.classList.remove('button-active'))
  buttons[index].classList.add('button-active')
}