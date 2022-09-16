const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const lengthEl = document.getElementById('length')
const resultEl = document.getElementById('result')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

clipboardEl.addEventListener('click', () => {
    const textarea = document.createElement('textarea')
    const password = resultEl.innerText

    if (!password) { return }
    textarea.value = password
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()
    alert('Password copied to clipboard')
})

generateEl.addEventListener('click', () => {
    const length = +lengthEl.value
    const uppercase = uppercaseEl.checked
    const lowercase = lowercaseEl.checked
    const numbers = numbersEl.checked
    const symbols = symbolsEl.checked

    resultEl.innerText = generatePassword(uppercase, lowercase, numbers, symbols, length)

})

function generatePassword(uppercase, lowercase, numbers, symbols, length) {
    let generatedPassword = ''
    const typesCount = uppercase + lowercase + numbers + symbols
    const typesArray = [{uppercase}, {lowercase}, {numbers}, {symbols}].filter(item => Object.values(item)[0])

    if (typesCount === 0) {
        return ''
    } 

    for (let i = 0; i < length; i++) {
        let type = Object.keys(typesArray[Math.floor(Math.random() * typesCount)])[0]
        generatedPassword = generatedPassword + randomFunc[type]()
    }

    return generatedPassword
}

const randomFunc = {
    lowercase: getRandomLower,
    uppercase: getRandomUpper,
    numbers: getRandomNumber,
    symbols: getRandomSymbol
}

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
}