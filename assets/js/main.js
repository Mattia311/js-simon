//Un alert() espone 5 numeri generati casualmente. Da li parte un timer di 30 secondi. Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.




var number = [];
var typeNumber = []
var numberUguali = []
setTimeout (showNumber, 3000)
while(number.length < 5){
    
    var numberRandom = Math. floor(Math. random() * 100) + 1;
    
    if(number.indexOf(numberRandom) === -1) number.push(numberRandom);
    
}

const numeri = alert(number)
console.log('i numeri generati casualmente sono i seguenti:', number);



function showNumber () {
    
    for (var i=1; i <= 5; i++) {
        var numero = parseInt(prompt("Inserisci un numero"));
        typeNumber.push(numero);
    }
    console.log('hai inserito i numeri:',typeNumber);

    for (var i=0; i <= typeNumber.length; i++) {
    if(number.includes(typeNumber[i])){
        numberUguali.push(typeNumber[i]);
    }
}
    
    
    /*console.log(typeNumber);*/
    /*console.log(numberUguali);*/
    if(numberUguali.length > 1){
        console.log("Sono stai individuati",numberUguali.length,'numeri','e sono rispettivamente:', numberUguali)

        
    } else if (numberUguali.length = 1) {
        console.log("è stato individuato",numberUguali.length,'numero','ed è:', numberUguali)

    }else if (numberUguali.length < 1) {
        console.log('Non è stato individuato nessun numero');
    }
}
