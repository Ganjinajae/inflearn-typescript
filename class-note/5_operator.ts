// function logMessage(value: string | number) {
//   console.log(value);
// }

// logMessage('hello');
// logMessage(100);

// var seho: string | number | boolean;
// function logMessage(value: string | number) {
//   if(typeof value === 'number') {
//     value.toLocaleString();
//   }
//   value.toString();
//   throw new TypeError('value must bo string or number');
// }

// interface Developer {
//   name: string;
//   skill: string;
// }

// // interface Person {
// //   name: string;
// //   age: string;
// // }

// // function askSomeone(someone: Developer | Person) {
// //   // someone.name;
// //   // someone.skill;
// //   // someone.age;
// // }

// // askSomeone({ name: 'developer', skill: 'web' });
// // askSomeone({ name: 'capt', age: 100 });

// function askSomeone(someone: Developer & Person) {
//   // someone.name;
//   // someone.skill;
//   // someone.age;
// }

// askSomeone({ name: 'developer', skill: 'web' });
// askSomeone({ name: 'capt', age: 100 });

// // var capt: string & number & boolean;

