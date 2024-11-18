function choiceHobbies(hobbyOne, hobbyTwo, hobbyThree) {
  const findHobbies = {
      hobbies: [hobbyOne, hobbyTwo, hobbyThree], 
  };
  return findHobbies; 
}

module.exports = choiceHobbies;

console.log(choiceHobbies('Sport', 'Lettura', 'Jogging'));