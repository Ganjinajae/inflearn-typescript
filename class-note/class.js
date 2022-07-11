// class가 내부적으로
// 단순히 문법만 바뀐 것, 보기 좋은 코드로
function Person(name, age) {
  this.name = name;
  this.age = age;
}
var capt = new Person('캡틴', 100);

// ES2015(ES6)부터 나옴 class
class Person {
  // 클래스 로직
  constructor(name, age) {
    console.log(('생성 되었습니다.'));
    this.name = name;
    this.age = age;
  }
}

var seho = new Person('세호', 30);
console.log(seho);
