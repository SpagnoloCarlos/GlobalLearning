/*
Crear una función que reciba dos parámetros. Un número y un string (texto). 
Luego debe repetir ese string tantas veces como lo diga el número recibido
*/

function repetir(numero, palabra){
    for (var i=0; i < numero; i++){
        console.log(palabra);
    }
}

repetir(5, "Full Stack");