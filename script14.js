const person = {
  name: "jhon",
  age: 20
};

person.age = 21;
person.city = "Chennai";

console.log(person);
//we can modify the properties of the object even if it is declared with const
//but cant reassign the object itself
//person={} will give error

const fruits = ["apple", "banana"];
fruits.push("orange");
fruits[0] = "mango";
console.log(fruits);
//we can modify it but cant reassign entire array