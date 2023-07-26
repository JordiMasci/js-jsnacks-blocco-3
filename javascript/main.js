// PRIMO ESERCIZIO


// // chiedi all'utente 1 numero
// const firstNumber = parseInt(prompt("inserisci un numero"));

// // chiedi all'utente un secondo numero
// const secondNumber = parseInt(prompt("inserisci un numero"));

// let randomNumber;
// // genera un numero casuale compreso tra i due
// if (firstNumber > secondNumber) {
//   randomNumber = Math.floor(Math.random() * (firstNumber - secondNumber + 1)) + secondNumber;
// } else if(secondNumber > firstNumber) {
//   randomNumber = Math.floor(Math.random() * (secondNumber - firstNumber + 1)) + firstNumber;
// } else {
//     alert('i numeri sono uguali');
// }

//console.log(randomNumber);



// SECONDO ESERCIZIO

// chiedere 1 parola
const firstWord = prompt("inserisci una parola");

// chiedere 2 parola
const secondWord = prompt('inserisci un"altra parola');
// verificare la lunghezza delle due parole


// stampare la parola più lunga
if (firstWord.length > secondWord.length) {
    alert(firstWord);
} else if (firstWord.length < secondWord.length) {
    alert(secondWord);
} else {
    // se uguali stamparle entrambe
  alert(firstWord + " " + secondWord);
}
