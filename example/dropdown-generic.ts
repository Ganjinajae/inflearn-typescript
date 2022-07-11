interface DropdownItem<T> {
  value: T;
  selected: boolean;
}

// interface Email {
//   value: string;
//   selected: boolean;
// }

// interface ProductNumber {
//   value: number;
//   selected: boolean;
// }

// interface TrueFalse {
//   value: boolean;
//   selected: boolean;
// }

// 계속 타입을 정의하는게 아니라 제네릭을 사용해서 하는 방식으로

const emails: DropdownItem<string>[] = [
  { value: 'naver.com', selected: true },
  { value: 'gmail.com', selected: false },
  { value: 'hanmail.net', selected: false },
];

const numberOfProducts: DropdownItem<number>[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

// function createDropdownItem(item: DropdownItem<string> | DropdownItem<number>) {
//   const option = document.createElement('option');
//   option.value = item.value.toString();
//   option.innerText = item.value.toString();
//   option.selected = item.selected;
//   return option;
// }

// 유니온 타입이 거슬리니까 타입 받아서 제네릭으로
function createDropdownItem<T>(item: DropdownItem<T>) {
  const option = document.createElement('option');
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

// NOTE: 이메일 드롭 다운 아이템 추가
emails.forEach(function (email) {
  const item = createDropdownItem<string>(email);
  const selectTag = document.querySelector('#email-dropdown');
  selectTag.appendChild(item);
});

numberOfProducts.forEach(function(eamil) {
});

// 제네릭의 타입 제한
// function logTextLength<T>(text: T[]): T[] {
//   console.log(text.length); // 어떤 타입이 올지 알 수 없음 -> [] 배열로 활용
//   text.forEach(function(text) {
//     console.log(text);
//   });
//   return text;
// }
// logTextLength(['hi', 'abc']);
// 'abc'.length;

// 제네릭 타입 제한 2 - 정의된 타입 이용하기
interface LengthType {
  length: number;
}

function logTextLength<T extends LengthType>(text: T): T {
  text.length;
  return text;
}

logTextLength('a'); // 기본으로 문자열 length 속성을 포함
logTextLength(10); // length 불포함
logTextLength({ length: 10 });
logTextLength({ lengdd: 10 });

// 제네릭 타입 제한 3 - keyof
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

// ShoppingItem의 키로 값을 제한할 수 있다. 기존에 string, number와 같은 타입을 제한하는 것과는 다른 부류
function getShoppingItemOption<T extends keyof ShoppingItem>(itempOption: T): T {
  return itempOption
}

// getShoppingItemOption(10);
// getShoppingItemOption<string>('a');
getShoppingItemOption('name'); // ctrl + space 가능한 목록 나옴
getShoppingItemOption('hihi');