// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// chiedere all'utente di inserire una parola 
const userWord = prompt('digita una parola per sapere se è palindroma')
console.log(userWord)

// evocare funzione 
const messageFinal = verifyPalindrome(userWord)

// comunicare all'utente se è palidroma o no 
alert(messageFinal)

// FUNZIONE 
// creare una funzione per capire se una parola è PALINDROMA
// word-->parola da verificare
function verifyPalindrome (word){
    // inanzitutti bisogna lavorare su ogni singola lettera 
    // e salvare la parola al contrario nella variabile wordVerify 
    let wordVerify = '' ;
    for(let i = userWord.length - 1 ; i >= 0 ;i--){
        wordVerify += userWord[i] ;
    }
    // creare condizione che se la parola utente è uguale alla parola al contrario allora la parola e palindroma 
    message = '';
    if(userWord === wordVerify){
        message = 'la parola è PALIDROMA'
    }else {
        message = 'la parola non è PALIDROMA'
    }
    return message;
}