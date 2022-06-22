// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
let choice
 let flag = true;

while(flag){
let choice = prompt('scegli pari o dispari') .toUpperCase();
if((choice === 'PARI') || (choice==='DISPARI')){
    flag = false
}
console.log(choice)
}

let userNumber
let fleg = true
while(fleg){
    let userNumber = parseInt(prompt('inserisci un numero da 1 a 5'))

    if((userNumber>=1) && (userNumber<=5)){
        fleg=false
    }
    
    console.log(userNumber)

}

const pcNumber = randomNumber(1,5)
console.log(pcNumber)




sum = userNumber + pcNumber


if (((choice === "PARI") && (isEven(sum) === true)) || ((choice === "DISPARI") && (isEven(sum) === false ))){
    console.log(`vince l'utente`);
} else {
    console.log(`vince il calcolatore`);
} 







function randomNumber (min,max){
    return Math.floor(Math.random()*(max - min) + min);
}

function isEven (number){
    
    if(number % 2 == 0){
     return true
    }
    else{
        return false
    }
    
}

