const fn = function(a) {
  return 'hello'
}
const fn2 = a => a+'hello'
console.log(fn2(123))

// --箭头后面的值是函数的返回值
// -返回值必须是一个表达式（有值的语句）
// -如果返回值是对象，必须加（）

const sum = (a,b) => a+b
console.log(sum(123,456))

const sum2 = (a,b) => ({name:'孙悟空'})
console.log(sum2(123,456))