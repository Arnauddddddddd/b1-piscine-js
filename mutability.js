const clone1 = person;
const clone2 = person;
samePerson = Object.assign({}, person);
person.age += 1;
person.country = 'FR';