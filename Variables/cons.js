const x = 10;
console.log(x);
// x=10;
//-> constant la bat bien 
// console.log(x)
const user = {name: "A"};
// user = {name: "b"};
// object ben trong co the thay doi 
user.name = "B"
console.log(user);

//Const co the giu func 
const add = function (a, b) {
 return a + b;
};
console.log(add(5,7));


// Arrow function 
const add2 = (a,b ) => a + 5;
console.log(add2(5,6));
// -> const Binding thì ko có thể thay đổi --> Object hoặc layer thì có thể 
//a -> primary value objct -> heap-> {user:"Name"}
