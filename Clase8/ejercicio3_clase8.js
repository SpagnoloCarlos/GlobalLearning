/*
Ejercicio 3: Teniendo en cuenta la misma conferencia anterior,
necesitamos crear nombre de usuario a cada persona registrada
dependiendo del nombre y el año en el que nacieron. 
Este nombre de usuario tiene que agregarse como una nueva propiedad llamada "userName";
*/

const list1 = [
    { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
    { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
]

function userNames(array) {
    array.forEach(function(item){
        let {firstName, lastName, age} = item;
        const date = new Date();
        const currentYear = date.getFullYear();
        let yearOfBirth = currentYear - age;

        item.userName = firstName.toLowerCase() + lastName.toLowerCase().charAt(0) + yearOfBirth;
    })

    console.log(array);    
}
  
userNames(list1);

