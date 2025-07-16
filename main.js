// STEPS: 

// 1. Chiediamo all’utente una parola.

// 2. Creiamo una funzione chiamata wordPalindroma.

// 3. La funzione riceve una parola come parametro.

// 4. All’interno della funzione confrontiamo la parola originale con la sua versione al contrario.

// 5. SE sono uguali: La parola è palindroma. ALTRIMENTI non lo è. 

// 6. Stampiamo il risultato in console 

// -----------------

// 1. Chiediamo all'utente di inserire una parola (In questo caso utilizziamo la parola "otto")

const userWord = prompt("Inserisci una parola per verificare se è palindroma");
console.log ("Hai immesso:", userWord)
// 2. Funzione (dichiarazione di funzione) che verifica se la parola è palindroma 

function wordPalindroma(parola) {

    // Inizializziamo una variabile utile per costruire la parola invertita

    let ReversedWord = ""

    // Utilizziamo un ciclo for per ciclare la parola al contrario dall'ultimo carattere

    for (let i = parola.length - 1; i >= 0; i--) {
    
/* Continua a ciclare finché i è maggiore o uguale a 0.
Serve per scorrere la parola al contrario (dall’ultimo carattere al primo).
i-- fa diminuire il valore di i a ogni giro. */

    ReversedWord += parola [i]

/* Aggiungi il carattere parola[i] alla fine della variabile ReversedWord.
È il modo per costruire la parola al contrario, un carattere alla volta. */
}

// Confrontiamo la parola originale con quella invertita
if ( parola === ReversedWord) { 

    return true; // è palindroma
} else {
    return false; // non è palindroma
}
} 

if (wordPalindroma (userWord)) {
    console.log ("La parola è palindroma")
} else {
    console.log ("La parola non è palindroma")
}