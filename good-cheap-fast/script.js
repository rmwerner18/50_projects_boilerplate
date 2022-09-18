const toggles = document.querySelectorAll('.toggle')
const good = document.getElementById('good')
const cheap = document.getElementById('cheap')
const fast = document.getElementById('fast')

toggles.forEach(toggle => {
    toggle.addEventListener('change', e => doTheTrick(e.target))
})

function doTheTrick(target) {
    let checked = 0
    if (good.checked && cheap.checked && fast.checked) {
        if (good === target) {
            fast.checked = false
        }
        if (cheap === target) {
            good.checked = false
        }
        if (fast === target) {
            cheap.checked = false
        }
    }
    // toggles.forEach(togg => {
    //     if (togg.checked === true) {
    //         checked++
    //     }
    //     if (checked > 2 && togg !== target) {
    //         togg.checked = false
    //     }
    // })
    // console.log(checked)
}

