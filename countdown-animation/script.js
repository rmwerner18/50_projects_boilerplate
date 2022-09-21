const nums = document.querySelectorAll('.nums span')
const counter = document.querySelector('.counter')
const finalMsg = document.querySelector('.final')
const replay = document.getElementById('replay')

runAnimation()

function resetDOM() {
    counter.classList.remove('hide')
    finalMsg.classList.remove('show')

    nums.forEach(num => {
        num.className = ''
    })

    nums[0].classList.add('in')
}

function runAnimation() {
    nums.forEach((num, i) => {
        const nextToLast = nums.length - 1

        num.addEventListener('animationend', e => {
            if(e.animationName === 'goIn' && i !== nextToLast) {
                num.classList.remove('in')
                num.classList.add('out')
            } else if(e.animationName === 'goOut' && num.nextElementSibling) {
                num.nextElementSibling.classList.add('in')
            } else {
                counter.classList.add('hide')
                finalMsg.classList.add('show')
            }
        })

        // setTimeout(() => {
        //     num.classList.add('in')
        // }, 1000*i)
        // setTimeout(() => {
        //     num.classList.remove('in')
        //     num.classList.add('out')
        // }, 1000*i + 1000)
    })
}

replay.addEventListener('click', () => {
    resetDOM()
    runAnimation()
})