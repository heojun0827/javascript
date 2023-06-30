
/*
primitive data type
    원시 자료형
*/

let a = true;
let b = 3.14;
let c = '안녕';

// typeof 연산자 : 자료형을 반환함
// boolean
console.log(a, typeof a);
// number
console.log(b, typeof b);
// string
console.log(c, typeof c);

let d;
console.log(d, typeof d);

d = null;
console.log(d, typeof d);

let e = Symbol('tjoeun');
console.log(e, typeof e);

// javascript 에서의 자료형 (data type)
// boolean, number, string, undefined, object, Symbol


//boolean
const b1 = 10 > 20;
const b2 = 10 > 20;

console.log(b1, typeof b1, ':', b2, typeof b2);

// number
// javascript 에서는 정수와 실수를 구분하지 않고
// 모두 실수로 취급함

let integer = 1234;
let realNumber = 6.25;
let negativeNumber = -654;
console.log(integer, realNumber, negativeNumber);

// string type
let name1 = '이순신'
let name2 = '유관순'
//back tick
let info = `이순신(한국 한자: 李舜臣, 1545년 4월 28일 (음력 3월 8일) ~ 1598년 12월 16일 (음력 11월 19일))은 조선 중기의 무신이었다.
본관은 덕수(德水), 자는 여해(汝諧), 시호는 충무(忠武)였으며, 한성 출신이었다. 문반 가문 출신으로 1576년(선조 9년) 무과(武科)에 급제[2]하여 그 관직이
동구비보 권관, 훈련원 봉사, 발포진 수군만호, 조산보 만호, 전라남도수사를 거쳐 정헌대부 삼도수군통제사에 이르렀다. 위키백과`;

console.log(name1, name2)
console.log(info)

// undefined type
let position;
console.log(position)

let x = 500;
console.log('x:',x)
x= undefined
console.log('x :',x)

// null : 객체를 초기화하는 값
//        객체가 연결되어 있지 않은 변수의 값
x = null
console.log('x: ',x)
console.log('x :',typeof x)

// 변수가 null 인지 아닌지 알아보기
// === : 값과 type 을 모두 비교함
console.log(x === null);
// == : 값만 비교함
console.log(x == null);