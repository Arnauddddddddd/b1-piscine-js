const person = {
    name: 'Rick',
    age: 77,
    country: 'US',
  }
const clone1 = new Object(person);
const clone2 = new Object(person);
var samePerson = Object.assign({}, person);
Object.freeze(clone1);
Object.freeze(clone2);
person[age] += 1;
person[country] = 'FR';