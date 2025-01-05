function foo(x){
  if (x === null || x === undefined) {
    return 0; // Handle null or undefined
  }
  return x.length; // This will throw an error if x is not an object with a length property
}