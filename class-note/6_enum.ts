enum Shoes {
  Nike = '나이키',
  Adidas = '아디다스'
}

var myShoes = Shoes.Nike;
console.log(myShoes); // '나이키'

// 예제
enum Answer {
  YES = 'Y',
  No = 'N',
}
function askQuestion(answer: Answer) {
  if(answer ===  Answer.YES) {
    console.log('정답입니다.');
  }
  else {
    console.log('오답입니다.');
  }
}

askQuestion(Answer.YES);
askQuestion(Answer.No);
askQuestion('Y');
askQuestion('ddd');