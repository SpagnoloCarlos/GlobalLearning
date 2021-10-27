/*
Ejercicio 2: Hubo una conferencia de programación hace poco y necesitamos saber quienes
fueron las personas que estuvieron en el evento.
Sabemos que la información está guardada en un array de objetos.
Necesitamos saber cuántas personas de “Europa” asistieron
*/

const list = [
    { firstName: 'Noah', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
    { firstName: 'Carla', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
    { firstName: 'Maria', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' }, 
    { firstName: 'Ramiro', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
];

function presence(array){
    let accountant = 0;
    let personFromEurope = [];

    array.forEach(function(item){
        if (item.continent == "Europe"){           
            accountant++;
            personFromEurope.push(item);
        }
    })
    console.log("Asistieron", accountant + " persona/s de Europa"); // Muestra cuantas personas asistieron de Europa
    console.log(personFromEurope);                                    // Muestra la informacion de esas personas
}

presence(list);
