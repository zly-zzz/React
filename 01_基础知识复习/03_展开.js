function fn(a,b,c) {
  return a+b+c
}
const arr = [1,2,3]
// 能遍历的都能展开
let result = fn(...arr)
console.log(result)

const obj = {
  name: '孙悟空',
  age: 18,
  gender: '男'
}
const obj2 = {address: '花果山', ...obj, name: '猪八戒'}
console.log(obj2)