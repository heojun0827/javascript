
const fruit1 = {
  name : '사과',
  price : '2000',
  stock : false
};

console.log(fruit1);
console.log(fruit1['name'])
console.log(fruit1.price)
console.log(fruit1['stock'])

// 비어있는 객체 생성 후, 속성(property) 추가하기
const fruit2 = {};

// 없는 속성(property(key)) 에 값(value) 을 할당하면 추가됨
fruit2['name'] = '딸기';
fruit2.price = 8000;
fruit2.stock = true;
console.log('fruit2 :', fruit2);

// 이미 있는 속성(property(key)) 에 값(value) 을 할당하면 값이 수정됨
fruit2['price'] = 9000;
console.log('fruit2 :', fruit2);

let obj1 = {
  1 : 'one',
  'title' : 'restaurant',
  'user-name' : '허준',
  'user_nickname' : '멋쟁이',
  'a d d r e s s' : '파주'
}

console.log(obj1);
console.log(obj1[1]);
console.log(obj1.title);
console.log(obj1['user-name']);
//console.log(obj1.user-name);
console.log(obj1['a d d r e s s']);
//console.log(obj1.a d d r e s s);
console.log(obj1.user_nickname);