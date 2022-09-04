const sliderContainer = document.querySelector('.slider-container') 
const slideRight = document.querySelector('.right-slide') 
const slideLeft = document.querySelector('.left-slide') 
const upButton = document.querySelector('.up-button') 
const downButton = document.querySelector('.donw-button')
const slidesLength = slideRight.querySelectorAll('div').length

console.log(slidesLength)

let activeSlidesIndex = 0

slideLeft.style.top = `-${(slidesLength - 1) * 100 }vh`

upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))


const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight

    if(direction === 'up') {
        activeSlidesIndex++
        if(active)
    }
}   