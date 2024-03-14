// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// chiedere all'utente un numero da 1 a 5 
const numUser = parseInt(prompt('inserisci un numero da 1 a 5'))
console.log(numUser,'numero user')

// chiedere all'utente se sceglie pari o dispari
const userEvenOrOdd = prompt('scegli pari o dispari')
console.log(userEvenOrOdd,'predizione user')


// numero random per il pc 
const numPc = generaNumRandom(); ;
console.log(numPc,'num random pc')

// risultato della somma dei umeni di user e pc 
const result = sumEvenOrOdd(numPc,numUser)
console.log(result ,'risultato')


// creare condizione che dice che se il risultato della somma e uguale alla predizione dell'utete ha vinto altrimenti a perso 
if(userEvenOrOdd === result){
    alert('hai vinto')
}else{
    alert('hai perso')
}




// FUNCTIONS
   
   //creata funzione che genera un numero random da 1 a 5 
   function generaNumRandom() {
    // Genera un numero casuale tra 0 e 1 (escluso 1)
    const operationRandom = Math.random();
    // Moltiplica il numero casuale per 5
    const num1to5 = Math.floor(operationRandom * 5) + 1;
    // Restituisce il numero da 1 a 5
    return num1to5;
  }
 
    //creare funzione dove fa la somma del numero user e del numero random del pc e dice se il risultato è pari o dispari
    // pc--> numero del pc random
    // user-->numero dell'utente   
  function sumEvenOrOdd(pc,user){
        // fare la somma dei numeri di user e pc
        sum = pc + user;
        let messaggio;
        // creare condizione se somma è pari o dispari 
         if (sum % 2 === 0) {
           messaggio = "pari";
         } else {
           messaggio = "dispari";
         }
        return messaggio ;
  }








//   function getRndInteger(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) ) + min;
// }



// function somma(a, b) {
//     return a + b;
//   }
  
//   const risultato = somma(2, 3);
  
//   console.log(risultato); // Stampa 5