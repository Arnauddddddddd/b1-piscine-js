const person = {
    name: 'Rick',
    age: 77,
    country: 'US',
  }
const clone1 = {...person};
const clone2 = {...person};
samePerson = Object.assign({}, person);
Object.freeze(clone1);
Object.freeze(clone2);
person[age] += 1;
person[country] = 'FR';