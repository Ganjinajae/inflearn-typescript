// interface Developer {
//   name: string;
// }

// interface Person {
//   name: string;
//   age: number;
// }

// function introduce(): Developer | Person {
//   return { name: 'Tony', age: 33, skill: 'Iron Making' };
// }
// var tony = introduce();
// console.log(tony.skill); // union type 공통속성만 쩝근가능

// if ((tony as Developer).skill) {
//   var skill = (tony as Developer).skill;
//   console.log(skill);
// } else if((tony as Developer).age) { // 계속 단언을 사용하여 반복됨. 가독성이 줄어듦 -> 타입가드를 사용

// }

// // 타입 가드 정의
// function isDeveloper(target: Developer | Person): target is Developer {
//   return (target as Developer).skill !== undefined;
// }

// if (isDeveloper(tony)) {
//   tony.skill;
// } else {
//   tony.age;
// }