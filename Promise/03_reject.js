const promise = new Promise((resolve, reject)=> {
  reject("Loi ");
});

promise.catch((error)=> {
  console.log(error);
});

