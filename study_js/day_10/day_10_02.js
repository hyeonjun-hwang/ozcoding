// console.log("good");

let arr1 = [];
// arr1[0] = 1;

let i = 1;
arr1[i] = 2;
arr1[arr1[i]] = 3;

console.log(arr1[i]);
console.log(arr1[arr1[i]]);

// ----
console.log("-----");

let b = [true, false];
console.log(b[2]);
console.log(b[-1]);

// 성긴 배열 (중간에 값이 없는거)
console.log("-----성긴배열------");

let c = new Array(5);
let a = [];
a[1000] = 0;
console.log(c);
console.log(a);

console.log([,]);
console.log([,].length);
