/*
Haga una función que siempre elimine al primer elemento del arreglo
*/

function eliminarPrimerElemento(array){
    array.shift();
    console.log(array);
}

const arreglo = [2, 4, 5, 1, 9, 7];
eliminarPrimerElemento(arreglo);