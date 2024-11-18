const createName = require('./names');
const choiceHobbies = require('./hobbies');

function getPeople() {
    const people = createName('Mario', 'Rossi'); 
    const hobbies = choiceHobbies('Sport', 'Jogging', 'Lettura'); 

    return { ...people, ...hobbies };
}

console.log(getPeople());