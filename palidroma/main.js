// Palidroma
// Chiedere all’utente di inserire una parola.
// Creare una funzione per capire se la parola inserita è palindroma.


// chiedo all'utente di inserire una parola e me la salvo
var userWord = prompt('inserisci una parola');

// qua mi salvo la parola al contarrio che mi restituisce la funzione backwardWord
var reverseWord = backwardWord(userWord);
// prendo la parola e la ristampo partendo dall'ultima posizione dell'arrey e andnando a ritroso e sommandole una all'altra e diminuendo il contatore
function backwardWord(str) {
    var reverseWord = '';

    var i = str.length - 1;

    while (i >= 0) {
        reverseWord += str[i];
        i--;
    }

    return reverseWord;
}
// un semplice if mi fa il controllo tra la parola inserita e quella 'creata' e mi restituisce il risultato in console
if (userWord == reverseWord) {
    console.log('la parola è palindroma');
} else {
    console.log('la parola non è palindroma');
}
