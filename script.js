const cvs = document.getElementById('board')
const ctx = cvs.getContext('2d')

let clicked = false

cvs.addEventListener('mousedown', (e) => {
  clicked = true
  ctx.beginPath()
})

cvs.addEventListener('mousemove', (e) => {
  if (clicked) {
    const x = e.layerX
    const y = e.layerY
    ctx.lineTo(x, y)
    ctx.stroke()
  }
})

cvs.addEventListener('mouseup', (e) => {
  clicked = false
})

const clearButton = document.getElementById('clear')

clearButton.addEventListener('click', (e) => {
  ctx.clearRect(0, 0, 500, 300)
})
