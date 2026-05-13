// Primitive Types (8 loại)

// 1. String
let name = "Dat";
console.log(name);

// 2. Number
let age = 20;
console.log(age);

// 3. Boolean
let isLoggedIn = true;
console.log(isLoggedIn);

// 4. Undefined
let x;
console.log(x);

// 5. Null
let emptyValue = null;
console.log(emptyValue);

// 6. BigInt
let bigNumber = 123456789012345678901234567890n;
console.log(bigNumber);

// 7. Symbol
let id = Symbol("id");
console.log(id);

let a = Symbol("id");
let b = Symbol("id");

let user = {
  [a]: 1,
  [b]: 2
};
console.log(user[a])



// 8. (Bonus logic type often mentioned) Function is NOT primitive
// nhưng trong typeof sẽ trả "function"
function greet() {
  return "hello";
}
console.log(typeof greet);
