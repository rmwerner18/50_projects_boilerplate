const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const decrease = document.getElementById('decrease')
const increase = document.getElementById('increase')
const colorInput = document.getElementById('color')
const clearBtn = document.getElementById('clear')
const sizeDisplay = document.getElementById('size')

let size = 20
let color = 'black'
let isPressed = false
let x 
let y

setSize()

function setSize() {
    sizeDisplay.innerHTML = size
}

increase.addEventListener('click', () => {
    if (size < 50) {
        size++
    }
    setSize()
})

colorInput.addEventListener('change', e => {
    color = e.target.value
})

decrease.addEventListener('click', () => {
    if (size > 5) {
        size--
    }
    setSize()
})

function drawCircle(x, y) {
    ctx.beginPath()
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
}   

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    ctx.stroke()
}

canvas.addEventListener('mousedown', e => {
    isPressed = true
    x = e.offsetX
    y = e.offsetY
})

canvas.addEventListener('mouseup', e => {
    isPressed = false
    x = undefined
    y = undefined
})

canvas.addEventListener('mousemove', e => {
    if(isPressed) {
        let x2 = e.offsetX
        let y2 = e.offsetY

        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)

        x = x2
        y = y2
    }
})


