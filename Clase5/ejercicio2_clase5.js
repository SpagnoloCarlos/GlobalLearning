/*
Haga una función que solo reciba arreglos con más de 5 elementos y luego elimine los últimos 3
*/

function eliminarUltimosTres(array){
    if (array.length > 5){
        array.splice(array.length - 3);
        
    }else{
        console.log("El arreglo tiene menos de 5 elementos");
    }

    console.log(array);
}

const arreglo = [5, 7, 25, 9, 26, 8, 42, 28];
console.log(arreglo);
eliminarUltimosTres(arreglo);