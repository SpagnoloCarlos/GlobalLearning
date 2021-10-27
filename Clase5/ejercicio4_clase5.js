/*
Haga una función que reciba un número y retorne un arreglo que tenga el tamaño del número recibido.
El contenido del arreglo deben ser números desde el 0 hasta el número recibido -1 (0 a n-1)
*/

function tamanioArray(numero){
    const array = [];

    for (let i=0; i<numero; i++){
        array[i] = i;
    }

    console.log(array);
}

tamanioArray(6);