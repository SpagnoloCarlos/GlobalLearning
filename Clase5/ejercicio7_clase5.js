/*
Dado un arreglo de números enteros, encuentre el mayor producto posible dado a partir de números adyacentes
adjacentElementsProduct([9,5,10,2,24,-1]) ==> return (50)
// 5 * 10 = 50
*/

function mayorProductoAdyacentes(array){
   // let anterior = 0;
    let mayor = array[0] * array[1];
   /* array.forEach(function(item){
        if (item * anterior > mayor){
            mayor = item * anterior;
        }
        anterior = item;
    }) */

    for (let i=3; i < array.length; i++){
        if(array[i]*array[i-1] > mayor){
            mayor = array[i]*array[i-1];
        }
    }
   
    console.log("El mayor producto posible entre numeros adyacentes es: ", mayor);
   
}

const arreglo = [15, 5 ,8 , 1 , 40, 9, 12];
mayorProductoAdyacentes(arreglo);
