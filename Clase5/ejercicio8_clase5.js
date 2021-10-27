/*Ejercicio 8: Tenemos un grupo de ovejas amenazadas por un lobo y necesitamos saber a cual se esta por comer.
Consideramos que tenemos a las ovejas y al lobo en un arreglo y que en ese mismo 
consideramos al último elemento como el primero
El lobo solo puede comer a la oveja que tiene a su derecha

sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (ESTE ES EL FRENTE DE LA FILA)
   7      6      5      4      3            2      1

*/

const array = ["obeja", "obeja", "obeja", "lobo", "obeja", "obeja"];

function warnTheSheep(array){
    let position = array.lastIndexOf("obeja") - array.indexOf("lobo");

    if (position > 0){
        console.log("Hey! Oveja numero", position + " ! El lobo esta cerca!");
    }else{
        console.log("Hey Lobo! No sigas comiendo ovejas!");
    }
}

warnTheSheep(array);