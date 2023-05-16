class Animal{
  constructor(name,age){
    this.name = name
    this.age = age
  }
  sayHello = ()=>{
    console.log('动物在叫')
  }
}
// 通过继承可以使得类中拥有其他类的属性和方法
// 通过extends来继承一个类
class Dog extends Animal{
  // 当在子类中重写父类构造函数中，必须在子类构造函数中第一时间调用父类构造函数，否则会报错
  constructor(name,age,length) {
    super(name,age) // 调用父类的构造函数
    this.length = length
  }
  // 子类继承父类后，将获得父类中所有的属性和方法
  // 也可以创建同名的属性或方法来对父类进行重写
  sayHello = ()=>{
    console.log('汪汪汪')
  }

}
class Snake extends Animal{

}