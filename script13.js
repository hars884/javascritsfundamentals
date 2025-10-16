let str = "Hello World";
console.log(typeof str); // "string"

let num1 = 42;
let num2 = 3.14;
console.log(typeof num1); // "number"
console.log(typeof num2); // "number"

let n = null;
console.log(typeof n); // "object" known JS bug

let u;
console.log(typeof u); // "undefined"

let isReady = true;
console.log(typeof isReady); // "boolean"

let sym = Symbol("id");
console.log(typeof sym); // "symbol"

let big = 1234567890123456789012345678901234567890n;
console.log(typeof big); // "bigint"

//undefined- a variable is declared but the value is not defined
// null it has no value