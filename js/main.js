/*
    Snack 5 - Bonus
    Crea due array di numeri che hanno un numero di elementi diversi.
    Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.
*/

var arrayUno = [1, 6, 36, 47];
var arrayDue = [5, 65];

if (arrayUno.length > arrayDue.length) {
    for (var i = arrayDue.length; i < arrayUno.length; i++) {
        arrayDue.push( Math.floor( Math.random() * 100 ) );
    }
} else {
    for (var i = arrayUno.length; i < arrayDue.length; i++) {
        arrayUno.push( Math.floor( Math.random() * 100 ) );
    }
}

console.log(arrayUno);
console.log(arrayDue);