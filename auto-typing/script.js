const sentenceEl = document.getElementById('sentence')

const sentence = 'Hello World'

let interval = 1000
let index = 1

writeText()

function writeText() {
    sentenceEl.innerText = sentence.slice(0, index)
    index++

    if (index > sentence.length) {
        index = 1
    }

    setTimeout(writeText, 100)
}

