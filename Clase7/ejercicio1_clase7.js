/*Ejercicio 1: Pensemos que tenemos que hacer un juego. Y lo primero que necesitamos es que se puedan crear héroes en el juego.
Haga una función o una clase que nos sirva para crear nuestro objeto “heroe”
Debe tener las siguientes propiedades y valores.

Propiedades    Valores
nombre      |    Valor por parametro o ‘heroe’
posicion    |    ‘00’
vida        |    100
dano        |    5
experiencia |    0

*/

class Hero{
    name
    position
    live
    damage
    experience

    constructor (heroName){
        if (heroName != undefined){  
            this.name = heroName;       //Si el nombre se pasa por parametro, toma ese valor como nombre
        }else{
            this.name = "hero";         //Si no se pasa por parametro el nombre (undefined), toma "hero" como nombre
        }

        this.position = "00";
        this.live = 100;
        this.damage = 5;
        this.experience = 0;
    }

}

let hero1 = new Hero("Carlos");
let hero2 = new Hero();

console.log(hero1); 
console.log(hero2);