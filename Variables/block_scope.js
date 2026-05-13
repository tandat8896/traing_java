// test case global goi local
// let y= 20;
{
  let x = 10;
  // test case local goi local
  console.log(x)
}
console.log(x)


//trace log 
//at Object.<anonymous> (/home/tandat/Desktop/Internship_2026/portal_v2/JavaScript_fundamental/variables/block_scope.js:8:13)
//lỗi file block_scope.js dòng thứ 8 do console.log không gọi được local trong block_scope
