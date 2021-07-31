const guessInput = document.querySelector('.guessInput')
const rangeInput = document.querySelector('.rangeInput')
const iterationsInput =  document.querySelector('.iterationsInput')
const iterationsCounter = document.querySelector('.iterationsCounter')
const rollBtn = document.querySelector('.roll-submit');
const resultConsole = document.querySelector('.result-console')

// Запоминаем значения, введенные в поля
/*
let guessNumber = Number(guessInput.value)
let rangeNumber = Number(rangeInput.value)
let iterationsNumber = Number(iterationsInput.value)
*/

window.onload = checkMatch;
guessInput.addEventListener('input', checkMatch)
rangeInput.addEventListener('input', checkMatch)
iterationsInput.addEventListener('input', checkMatch)


function checkMatch() {
  let guessNumber = Number(guessInput.value)
  var rangeNumber = Number(rangeInput.value)
  let iterationsNumber = Number(iterationsInput.value)
  resultConsole.textContent = ''
  if (guessNumber > rangeNumber) {
    disableButton();
    iterationsCounter.textContent = '∞ Число находится за пределами диапазона: перебор будет бесконечным и быстро заполнит всю память браузера... Уменьши число или увеличь диапазон.'
    console.log('Не входит')
  }
  else {
    enableButton()
    iterationsCounter.textContent = ''
    checkPossibility()
    console.log('Входит')
  }
}

function checkPossibility() {
  let guessNumber = Number(guessInput.value)
  var rangeNumber = Number(rangeInput.value)
  let iterationsNumber = Number(iterationsInput.value)
  if (iterationsNumber < rangeNumber*2) {
    disableButton();
    iterationsCounter.textContent = 'Слишком маленькое число итераций для такого большого диапазона. Программа может не успеть подобрать число. Увеличь число итераций.'
  }
  else {
    enableButton()
  }
}

function disableButton() {
  rollBtn.disabled = true
  rollBtn.classList.replace('roll-submit', 'roll-submit_disabled')  
}
function enableButton() {
  rollBtn.disabled = false
  rollBtn.classList.replace('roll-submit_disabled', 'roll-submit')  
}

function clearConsole() {
  resultConsole.textContent = ''
}

function roll(guessNumber, rangeNumber, iterationsNumber) {
  guessNumber = Number(guessInput.value)
  rangeNumber = Number(rangeInput.value)
  iterationsNumber = Number(iterationsInput.value)
  let rollCounter
  for (rollCounter = 0; randomNumber !== guessNumber; rollCounter++) {
    var randomNumber = Math.floor(Math.random() * rangeNumber) + 1
    if (rollCounter == iterationsNumber) break
    resultConsole.textContent += `${rollCounter + 1})` + ' ' + randomNumber + ', '
    console.log(`Попытка ${rollCounter}, полученное число ${randomNumber}`)
  }
  console.log(`Перебор окончен, количество операций — ${rollCounter}`)
  iterationsCounter.textContent = 'Получилось подобрать за ' + rollCounter + ' попыток'
}
rollBtn.addEventListener('click', clearConsole)
rollBtn.addEventListener('click', roll)

