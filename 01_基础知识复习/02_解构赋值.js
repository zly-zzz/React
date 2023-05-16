// let arr = ['孙悟空','猪八戒']
// let [a,b] = arr
// console.log(a,b)

// const obj = {
//   name: '孙悟空',
//   age: 18,
//   gender: '男'
// };
// // ({name:a,age:b,gender:c} = obj)
// const {name,age,gender} = obj
// console.log(name,age,gender)
// 利用数组解构交换两个变量的位置
// 在《javascript权威指南》中有-段话“如果一条语句以“ (”、 “[”、 “/”、 “+”、或“-”开始，那么它极有可能和前一条语句合在一起解释。
let a = 10;
let b = 20;
[a, b] = [b, a];
console.log('a=',a);
console.log('b=',b);

let arr = [1,2,3];
[arr[1],arr[2]] = [arr[2],arr[1]];
console.log(arr);