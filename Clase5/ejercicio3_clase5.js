/*
Teniendo un arreglo numérico, tenemos que sumarle un número (por parámetro) a cada elemento de nuestro arreglo
*/

function sumar(numero){
    let array = [5, 10, 8, 17, 22, 35];
    console.log(array);

    array.forEach((item, index)=> array[index] = item + numero);

    console.log(array);
}


sumar(10);