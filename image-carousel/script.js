const left = document.getElementById('left')
const right = document.getElementById('right')
const imageContainer = document.getElementById('imgs')

let currentImg = 0

console.log(imageContainer.childElementCount)

function moveRight() {
    currentImg++
    if(currentImg === imageContainer.childElementCount) {
        currentImg = 0
    }
    imgs.style.transform = `translateX(-${currentImg * 100}%)`
    resetinterval()
}

function moveLeft() {
    currentImg--
    if(currentImg === -1) {
        currentImg = imageContainer.childElementCount - 1
    }
    imgs.style.transform = `translateX(-${currentImg * 100}%)`
    resetinterval() 
}

left.addEventListener('click', moveLeft)
right.addEventListener('click', moveRight)

let interval = setInterval(moveRight, 2000)

function resetinterval() {
    clearInterval(interval)
    interval = setInterval(moveRight, 2000)
}