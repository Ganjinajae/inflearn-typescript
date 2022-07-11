// // 타입 단언(type assertion)
// var a;
// a = 20;
// a = 'a'
// var b = a as string; // language server보다 개발자가 많이 알고 있을 때 사용하기 좋음

// // DOM API 조작할 때 많이 사용됨
// // <div id="app">hi</div>
// var div = document.querySelector('div'); // css 선택자든 div로든 접근할 수 있음
// if(div) { // 접근하는 시점에 div가 있다고 보장할 수 없기 때문에
//   div.innerHTML
// }
