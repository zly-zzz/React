class MyClass{
  // 静态方法this不是实例对象而是当前的类对象
  static name = 'haha'
  static fn = ()=>{
    console.log(函数)
  }
}
console.log(MyClass.name)
MyClass.fn()