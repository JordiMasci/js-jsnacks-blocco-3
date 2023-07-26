// chiedi all'utente 1 numero
const firstNumber = parseInt(prompt("inserisci un numero"));

// chiedi all'utente un secondo numero
const secondNumber = parseInt(prompt("inserisci un numero"));

let randomNumber;
// genera un numero casuale compreso tra i due
if (firstNumber > secondNumber) {
  randomNumber = Math.floor(Math.random() * (firstNumber - secondNumber + 1)) + secondNumber;
} else if(secondNumber > firstNumber) {
  randomNumber = Math.floor(Math.random() * (secondNumber - firstNumber + 1)) + firstNumber;
} else {
    alert('i numeri sono uguali');
}

console.log(randomNumber);
