class MyClass{
  fn(){
    console.log('-->',this)
  }
}
const mc = new MyClass()
// mc.fn()
const test = mc.fn
test() 