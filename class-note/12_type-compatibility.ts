interface Developer {
  name: string;
  skill: string;
}
// interface Person {
//   name: string;
// }
// class Person {
//   name: string;
//   skill: string;
// }

var person: Person;
// developer = person;
person = developer; // 구조적으로 큰 것이 작은 것을 포함할 수 있다.
developer = new Person();

// 함수
var add = function(a: number) { // 함수 표현식
  // ...
}
var sum = function(a: number, b: number) {
  // ...
}

// sum이 add를 포함할 수 있다. 구조적으로
add = sum;
sum = add;

// 제네릭
interface Empty<T> {

}
var empty1: Empty<string>;
var empty2: Empty<number>;
empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
  data: T;
}
var notempty1: NotEmpty<string>;
var notempty2: NotEmpty<number>;
notempty1 = notempty2;
notempty2 = notempty1;