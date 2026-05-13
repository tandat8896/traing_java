new Promise((resolve) => {
  resolve(2);
})
.then((num) => {
  return num * 2;
})
.then((num) => {
  return num * 3;
})
.then((result) => {
  console.log(result);
});
