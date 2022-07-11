// var a;

// // vscode 내 language server가 타입을 추론하여 프리뷰해준다.
// // vscdoe intelli Sense
// function getB(b = 10) {
//   var c = 'hi';
//   return b + c;
// }

// 10 + '10'; // '1010'

// // 타입 추론 기본 2
// // interface Dropdown<T> {
// //   value: T;
// //   title: string;
// // }

// // var shoppingItem: Dropdown<string> = {
// //   value: 'hi',
// //   title: 'dd'
// // }

// // 타입 추론 기본 3
// interface Dropdown<T> {
//   value: T;
//   title: string;
// }

// interface DetailedDropdown<K> extends Dropdown<K> {
//   description: string;
//   tag: K;
// }

// var detailedItem: DetailedDropdown<string> = {
//   title: 'abc',
//   description: 'ab',
//   value: 'dd',
//   tag: 'dd'
// }

// // Best Common Type -> typescript가 type을 해석하는 방식
// var arr = [1,2,true, 'a']; // union으로 다 묶음

