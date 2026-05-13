
console.log(
  "10 & 6 =",
  "10 = 1010 = 8 + 2 (2^3 + 2^1)",
  "6 = 0110 = 4 + 2 (2^2 + 2^1)",
  "AND: 1010 & 0110 = 0010",
  "=> 2"
);

console.log(
  "10 | 6 =",
  "1010 | 0110 = 1110",
  "=> 8 + 4 + 2 = 14"
);

console.log(
  "~10 =",
  "10 = 00001010",
  "NOT → 11110101 (two's complement)",
  "=> -11"
);

console.log(
  "5 << 1 =",
  "5 = 0101",
  "shift left → 1010",
  "=> 10 (×2)"
);

console.log(
  "5 >> 1 =",
  "5 = 0101",
  "shift right → 0010",
  "=> 2 (÷2)"
);



console.log("\n===== PERMISSION SYSTEM =====");

const READ = 1;   // 001
const WRITE = 2;  // 010
const EXEC = 4;   // 100

console.log("READ =", READ, "= 001");
console.log("WRITE =", WRITE, "= 010");
console.log("EXEC =", EXEC, "= 100");

let user = READ | WRITE;

console.log(
  "user = READ | WRITE = 001 | 010 = 011 =>",
  user
);

console.log(
  "Has READ?",
  "(user & READ) = 011 & 001 = 001 =>",
  (user & READ) !== 0
);

console.log(
  "Has EXEC?",
  "(user & EXEC) = 011 & 100 = 000 =>",
  (user & EXEC) !== 0
);
