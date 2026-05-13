// ========================================
// NULLISH COALESCING OPERATOR REPORT
// ========================================

// ----------------------------------------
// ?? chỉ check null / undefined
// ----------------------------------------

console.log("0 ?? 100 =", null ?? 100);
// 0 không phải null/undefined
// => giữ nguyên 0

console.log("0 || 100 =", null || 100);
// 0 là falsy
// => lấy 100
// falsy list 
// false
// 0
// -0
// 0n
// ""
// null
// undefined
// NaN
//
//
// 
//
console.log("Dat" || "Guest");
// ----------------------------------------
// || dễ gây bug với dữ liệu hợp lệ
// ----------------------------------------

let price = 0;

let result_or = price || 999;

console.log("price || 999 =", result_or);
// 0 là falsy
// => JS lấy 999
// => dễ sai logic


// ----------------------------------------
// ?? an toàn hơn cho dữ liệu thật
// ----------------------------------------

let result_nullish = price ?? 999;

console.log("price ?? 999 =", result_nullish);
// 0 không phải null/undefined
// => giữ nguyên 0


// ----------------------------------------
// Không được mix || với ?? trực tiếp
// ----------------------------------------

// true || null ?? "A";
// SyntaxError

let mix_operator = (true || null) ?? "A";

console.log("(true || null) ?? 'A' =", mix_operator);
// true || null
// => true
// true ?? "A"
// => true


// ----------------------------------------
// Short-circuit
// ----------------------------------------

function expensiveFunction() {
  console.log("expensiveFunction was called");
  return "Expensive";
}

let x = "Dat";

console.log("x ?? expensiveFunction() =", x ?? expensiveFunction());

// x đã có giá trị
// => expensiveFunction KHÔNG chạy


// ----------------------------------------
// Optional chaining + ??
// ----------------------------------------

let response = {};

let username = response.data?.user?.name ?? "Guest";

console.log("username =", username);

// response.data
// => undefined
// ?. dừng an toàn
// ?? lấy "Guest"


// ----------------------------------------
// ??= assignment operator
// ----------------------------------------

let count = 0;

count ??= 100;

console.log("count after ??= 100 =", count);

// count = 0
// 0 không phải null/undefined
// => KHÔNG gán 100


// ----------------------------------------
// Nếu là null thì mới gán
// ----------------------------------------

let total = null;

total ??= 500;

console.log("total after ??= 500 =", total);

// total = null
// => gán thành 500
