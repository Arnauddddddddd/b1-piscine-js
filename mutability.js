const clone1 = new Object(person);
const clone2 = new Object(person);
samePerson = Object.assign({}, person);
person.age += 1;
person.country = 'FR';