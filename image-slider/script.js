const slides = document.querySelectorAll('.slide')
const rightArrow = document.getElementById('right')
const leftArrow = document.getElementById('left')
const body = document.body

rightArrow.addEventListener('click', () => {
    activeSlide++

    if (activeSlide > slides.length-1) {
        activeSlide = 0
    }

    refresh()
})

leftArrow.addEventListener('click', () => {
    activeSlide--

    if (activeSlide < 0) {
        activeSlide = slides.length-1
    }
    
    refresh()
})

let activeSlide = 0
refresh()

function refresh() {
    setBgToBody()
    setActiveSlide()
}

function setBgToBody() {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

function setActiveSlide() {
    slides.forEach(slide => slide.classList.remove('active'))

    slides[activeSlide].classList.add('active')
}

