function snInstanceOf(left, right) {
  if (left ) return false;
  return left.__proto__ === right.prototype || snInstanceOf(left.__proto__, right)
}

//编写测试用例
function Person(name, age) {
  this.name = name;
  this.age = age;
}
function School(name, address) {
  this.name= name;
  this.address = address;
}
const p1 = new Person('james', 23);
console.log(snInstanceOf(p1, Person) + '--' + snInstanceOf(p1, Object) + '--' + snInstanceOf(p1, School))