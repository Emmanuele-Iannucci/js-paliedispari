// Chiediamo all’utente di scegliere "pari" o "dispari".

// Chiediamo all’utente di inserire un numero da 1 a 5.

// Generiamo un numero casuale da 1 a 5 per il computer (con una funzione).

// Sommiamo il numero dell’utente con quello del computer.

// Creiamo una funzione che ci dica se la somma è pari o dispari.

// Se la scelta dell’utente corrisponde al risultato, ha vinto. Altrimenti, ha perso.

// Stampiamo tutti i passaggi in console.log() per capire cosa succede.

// 1. Chiediamo all'utente di scegliere "pari" o "dispari"
let choose = prompt("Scegli 'pari' o 'dispari':");
console.log("Hai scelto:", choose);

// 2. Chiediamo all'utente un numero tra 1 e 5 (inserito come stringa)
const inputUtente = prompt("Inserisci un numero da 1 a 5:");
console.log("Hai scritto (stringa):", inputUtente);

// 3. Convertiamo la stringa in numero
const inserire = parseInt(prompt("Inserisci un numero da 1 a 5:"))
console.log ("The number converted is:", inputUtente)

// 4. Generiamo un numero casuale
function casualNumber() {
  return 4; // Simuliamo come se fosse un numero casuale
}

const computerNumb = casualNumber ()
console.log ("computer numb is", computerNumb)

// 5. Sommiamo i due numeri
const sum = inserire + computerNumb;
console.log("sum is:", sum);

// 6. Funzione che stabilisce se un numero è pari o dispari
function EvenOrOdd (numero) {
  if (numero % 2 === 0) {
    return "pari";
  } else {
    return "dispari";
  }
}

const risultato = EvenOrOdd (sum);
console.log("Il risultato è:", risultato);