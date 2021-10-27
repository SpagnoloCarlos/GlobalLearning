/*
Hay un arreglo con varios números donde todos son iguales excepto uno. Haga una función que lo identifique
findUniq([1,1,1,1,2,1,1,1]) ==> return (2)
*/

function distinto(array){
    let anterior = array[0];
    array.forEach(function(item){   
       
        if (item != anterior){           
            return console.log("El indice del elemento distinto es:", array.indexOf(item) + " - El elemnto distinto es: ", item);           
        }
        anterior = item;
    })   
}

const arreglo = [1, 1, 1, 1, 2, 1, 1, 1];
distinto(arreglo);
