const animal = {
  legs: 4,
};
const dog = Object.create(animal);
dog.name = "Манго";

console.log(dog.__proto__); // { name: 'Манго', __proto__: animal }