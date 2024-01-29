let attempts = 1;
let resetButton = document.getElementById("resetButton")
let attemptButton = document.getElementById("attemptButton")
let choosenNumbers = []
let maxNumber = 10
let secretNumber = getRandomNumber()
assignTextToElement("h1", "Juego del número secreto")
assignTextToElement("p", `Indica un número del 1 al ${maxNumber}`)

function assignTextToElement(element, text) {
  let htmlElement = document.querySelector(element);
  htmlElement.textContent = text;
}

function cleanInput() {
  document.querySelector("#userNumber").value = ""
}

function getRandomNumber() {
  let number = Math.floor(Math.random() * maxNumber) + 1
  if (choosenNumbers.length == maxNumber) {
    assignTextToElement("p", "Ya se utilizaron todos los números posibles")
  } else {
    if (choosenNumbers.includes(number)) {
      return getRandomNumber()
    } else {
      choosenNumbers.push(number)
      return number
    }
  }
}

function initialConditions() {
  assignTextToElement("h1", "Juego del número secreto")
  assignTextToElement("p", `Indica un número del 1 al ${maxNumber}`)
  attempts = 1
  secretNumber = getRandomNumber();
}

function resetGame() {
  cleanInput()
  initialConditions()
  resetButton.setAttribute("disabled", true)
  attemptButton.removeAttribute("disabled")
}

function userTry() {
  let input = parseInt(document.getElementById("userNumber").value);

  if (secretNumber === input) {
    assignTextToElement("p", `Acertaste  el número es: ${secretNumber} en ${attempts} ${attempts > 1 ? "veces" : "vez"}`)
    resetButton.removeAttribute("disabled")
    attemptButton.setAttribute("disabled", true)
  } else {
    if (input > secretNumber) {
      assignTextToElement("p", "El número secreto es menor")
    } else {
      assignTextToElement("p", "El número secreto es mayor")
    }
    attempts++;
    cleanInput()
  }
}


