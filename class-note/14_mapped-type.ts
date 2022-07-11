type Heroes = 'Hulk' | 'Capt' | 'Thor';
type HeroesAges = { [K in Heroes]: number };
const ages: HeroesAges = {
  Hulk: 33,
  Capt: 100,
  Thor: 100
}

// var arr = ['a', 'b', 'c'];
// for(var k in arr) {
//   console.log(arr[k]);
// }