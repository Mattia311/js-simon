//Un alert() espone 5 numeri generati casualmente. Da li parte un timer di 30 secondi. Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.



var number = [];
while(number.length < 5){
    
    var numberRandom = Math. floor(Math. random() * 10) + 1;
    
    if(number.indexOf(numberRandom) === -1) number. push(numberRandom);
    
}

const numeri = alert(number)

setTimeout (showNumber, 3000)

typeNumber = []

function showNumber () {
    const askNumber1 = parseInt(prompt('Inserisci un numero'))
    const askNumber2 = parseInt(prompt('Inserisci un numero'))
    const askNumber3 = parseInt(prompt('Inserisci un numero'))
    const askNumber4 = parseInt(prompt('Inserisci un numero'))
    const askNumber5 = parseInt(prompt('Inserisci un numero'))
    console.log(askNumber1,askNumber2,askNumber3,askNumber4,askNumber5);
    typeNumber.push(askNumber1,askNumber2,askNumber3,askNumber4,askNumber5)
    if (number = typeNumber) {
         alert('Complimenti, hai indovinato tutti i numeri')
    }
    else {
         alert('non hai vinto')
    }
    console.log(typeNumber);
}





/*for (let index = 0; index < 5; index++) {
    
   const askNumber = parseInt(prompt('Inserisci un numero'))
   console.log(askNumber);
}*/
