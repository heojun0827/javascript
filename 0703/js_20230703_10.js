/* 함수

  함수 정의부
  function 함수이름(parameter:imput){ 함수 선언부
    statement;    함수 body(구현부, 몸통)
    return 값;
  }

  함수 호출부
  함수이름(argument)
              ㄴ parameter 의 개수에 맞는 값

      프로그램에서의 함수 : input(parameter) / output(return 값)
  1) input(o) - output(o)
  2) input(o) - output(x)
  3) input(x) - output(o)
  4) input(x) - output(x)
*/

function test(){
  console.log("test");
}

console.log('test():', test());

function test2(){
  console.log("test2");
  return 100;
}

console.log('test2():', test2());

let name1 = '허준';
console.log('name1:', name1);

const age = 28;
console.log('age:', age);

// hoisting
test10();

function test10(){
  console.log('여기는 test10() 함수입니다')
}