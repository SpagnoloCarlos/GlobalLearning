/*
Crear una función que reciba un número como parámetro y devuelva “par” o “impar”
dependiendo del número que tome ese parámetro
*/

function isEven(number){
    if (number % 2 == 0){
        console.log("Es par");
    }else {
        console.log("No es par");
    }
}

isEven(5);