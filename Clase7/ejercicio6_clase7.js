/*
Ejercicio 6: Teniendo en cuenta la misma conferencia anterior, 
necesitamos saber el nombre y país de el primer desarrollador de cierto lenguaje que se haya inscripto.
*/

function firstProgrammer(pLanguage){
    const list1 = [
        { firstName: 'Mark', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
        { firstName: 'Victoria', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
        { firstName: 'Emma', country: 'Norway', continent: 'Europe', age: 19, language: 'Python' }
      ];

    const found = list1.find(function(item){
        return item.language == pLanguage;
    })

    if(found != undefined){
        console.log(found.firstName + " from " + found.country +  
        " was the first " + found.language + " developer in the conference");
    }else{
        console.log("There are no " + pLanguage + " developers in the conference");
    }
}

firstProgrammer("JavaScript");
firstProgrammer("Python");
firstProgrammer("C#");