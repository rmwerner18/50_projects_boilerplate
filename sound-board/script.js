let sounds = ['applause', 'boo', 'gasp', 'tada', 'victory','wrong']

sounds.forEach(sound => {
    let btn = document.createElement('button')

    btn.classList.add('btn')
    btn.innerText = sound

    btn.addEventListener('click', () => {
        stopSounds()

        document.getElementById(sound).play()
    })

    document.getElementById('buttons')
        .appendChild(btn)
})

function stopSounds() {
    sounds.forEach(s => {
        let sound = document.getElementById(s)

        sound.pause()
        sound.currentTime = 0
    })
}