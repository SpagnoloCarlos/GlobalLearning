/*
Dado un arreglo de números enteros, encuentre la menor suma posible entre ellos
minSum([7,4,2,3]) ==> return (5)
*/

function menorSuma(array){
    let menor1 = array[0];

    array.forEach(function(item){
        if (item < menor1){
            menor1 = item;
        }
    })
   
    array.splice(array.indexOf(menor1), 1);

    let menor2 = array[0];
   
    array.forEach(function(item){
       
        if (item < menor2){
            menor2 = item;
        }
    })
   
    console.log("La menor suma posible es: ", menor1 + menor2);
}

function menorSuma2(array){
    menor1 = Math.min(... array);
    array.splice(array.indexOf(menor1), 1);
    menor2 = Math.min(... array);
    console.log("La menor suma posible es: ", menor1 + menor2);
   
}

const arreglo = [4, 11, 1, 27, 5, 52, 89];

menorSuma(arreglo);
//menorSuma2(arreglo);
