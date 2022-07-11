// function logText(text) {
//   console.log(text);
//   return text;
// }

// logText(10);
// logText('hello');
// logText(true);

// function logText<T>(text: T):T {
//   console.log(text);
//   return text;
// }

// logText('hi');
// logText<string>('hi');

// function logText(text: string) {
//   console.log(text);
//   // text.split('').reverse().join();
//   return Text;
// }

// function logNumber(num: number) {
//   console.log(num);
//   return num;
// }

// 타입을 바꾸기 위해서 중복된 코드를 생산하는 방식은 옳지 않다.

// function logText(text: string | number) {
//   console.log(text);
//   // 문제1. 공통의 속성만 프리뷰를 제공
//   return text;
// }

// const a = logText('a');
// a.split(''); // 문제2. 반환 값에 대한 것을 확신할 수 없어 프리뷰를 제공하지 않는다.

function logText<T>(text: T): T {
  console.log(text);
  return text;
}

const str = logText<string>('abc');
str.split('');
const login = logText<boolean>(true);


// logText('a');
// logText(10);

// 인터페이스에 제네릭을 선언하는 방법
// interface Dropdown {
//   value: string;
//   selected: boolean;
// }

// const obj: Dropdown = {
//   value: 'abcd',
//   selected: true
// }

// interface Dropdown<T> {
//   value: T;
//   selected: boolean;
// }

// const obj: Dropdown<string> = {
//   value: 'abcd',
//   selected: false
// }

