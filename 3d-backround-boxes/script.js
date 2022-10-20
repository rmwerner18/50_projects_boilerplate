const boxes = document.getElementById('boxes')

const grid = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]

grid.forEach((row, rowI) => {
 row.forEach((col, colI) => {
  let box = document.createElement('div')
  box.classList.add('box')
  box.style.backgroundPosition = `-${colI * 125}px -${rowI * 125}px`
  boxes.append(box)
 })
})