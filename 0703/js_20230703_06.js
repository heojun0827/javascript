// 조건문
// if (조건식 : boolean type 의 값, 변수, 식)
//                ㄴ expression(표현식)

const money = true;

if(money){
  console.log('외식을 할수있습니다')
}else {
  console.log('외식을 못합니다');
}

let number = 10
if (number == 10){
  console.log('number 는 10입니다')
}
if (number >= 5){
  console.log('number 는 5보다 크거나 같습니다')
}
if (number <= 20){
  console.log('number 는 20보다 작거나 같습니다')
}
if (number == 8){
  console.log('number 는 8입니다')
}
if (number <= 100){
  console.log('number 는 100보다 작거나 같습니다')
}
console.log('-----------------------------------')

if (number == 10){
  console.log('number 는 10입니다')
}else if (number >= 5){
  console.log('number 는 5보다 크거나 같습니다')
}else if (number <= 20){
  console.log('number 는 20보다 작거나 같습니다')
}else if (number == 8){
  console.log('number 는 8입니다')
}else if (number <= 100){
  console.log('number 는 100보다 작거나 같습니다')
}else{
  console.log('위의 내용은 모두 거짓입니다')
}
console.log('-----------------------------------')
/*
  아이디가 heojun 이고
  비밀번호가 1234 인 경우에는 '로그인 성공!!' 을 출력하고
  아니면 '로그인실패' 를 출력하는 if 문을 작성하세요
*/

let id = 'heojun';
let pw = 1234;

if(id == 'heojun' && pw == 1234){
  console.log('로그인 성공 !!!');
}else{
  console.log('로그인 실패');
}

id = 'heojun2';
pw = 1234;

// 중첩 if 문
if (id == 'heojun2'){
  if(pw == 1234){
    console.log('로그인 성공 !!!');
  }else{
    console.log('비밀번호를 확인해 주세요');
  }
}else{
  console.log('아이디를 확인해 주세요')
}

let flag1 = id == 'heojun2'
flag1 = flag1 && pw ==1234
// flag1 && = pw == 1234

if(flag1){
  console.log('로그인 성공 !!!');
}else{
  console.log('로그인 실패');
}

let flag2 = id == 'heojun2'
let flag3 = pw == 1234

if(flag2 && flag3){
  console.log('로그인 성공 !!!');
}else{
  console.log('로그인 실패');
}