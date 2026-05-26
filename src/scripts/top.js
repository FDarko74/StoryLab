const buttons = document.querySelectorAll('.button')
const secVideos  = document.querySelector('.videos')
const secHistory = document.querySelector('.history')
const secGaleria = document.querySelector('.galeria')

const sections = [secVideos, secHistory, secGaleria]

function showSection(index) {
  sections.forEach(sec => sec.style.display = 'none')
  sections[index].style.display = 'flex'

  buttons.forEach(btn => btn.classList.remove('button-active'))
  buttons[index].classList.add('button-active')
}

buttons[0].addEventListener('click', () => showSection(0))
buttons[1].addEventListener('click', () => showSection(1))
buttons[2].addEventListener('click', () => showSection(2))

showSection(0)