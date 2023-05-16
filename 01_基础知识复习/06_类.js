class Person{
  // name = '孙悟空';
  // age = 18;
  // 当我们通过new创造对象时，实际上就是在调用类的构造函数
  // 在构造函数中，可以通过this来引用当前的对象
  constructor(name,age){
    this.name = name
    this.age = age
  }

  // 定义方法 实例方法
  run(){
    console.log('我会跑！')
  }
}
const per1 = new Person()
const per2 = new Person()

console.log(per)