let newArray1 = new Array();
let newArray2 = new Array(5);
let newArray3 = new Array(1, 5, 4, 3, "Dd", "asd");

console.log(newArray1);
console.log(newArray2);
console.log(newArray3);

let arrayOf = Array.of(2);

console.log(arrayOf);

// array.from()
console.log("=======array.from======");

let str = "hello";
let arr = Array.from(str, (char, index) => {
  return char + index;
});
let arr2 = Array.from(str);

console.log(str);
console.log(arr);
console.log(arr2);
