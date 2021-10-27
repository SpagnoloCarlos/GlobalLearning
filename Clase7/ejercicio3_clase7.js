/*
Ejercicio 3: Teniendo en cuenta la misma conferencia anterior, 
necesitamos poder personalizar un mensaje para cada persona que asista al evento la próxima vez. 
Para eso, nuestra tarea es tener una función que devuelva un array donde cada 
posición tiene un objeto con una nueva propiedad de nombre “greeting” o “bienvenida”.
*/

const list1 = [
    { firstName: 'Sofia', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
    { firstName: 'Madison', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
  ];

function greeting(array){

    array.forEach(function(item){
        item.greeting = "Hi " + item.firstName + ", what do you like the most about " + item.language + "?";
    })                  

    return console.log(array);
}

greeting(list1);