
scores = {'더조은':90, '아이티':80, '학원': 60}

//객체 리터럴에서 key만 가져오기
console.log(Object.keys(scores))

//객체 리터럴에서 value만 가져오기
console.log(Object.values(scores))

class Restaurant{
  number = 0;
  menu = {'스테이크':50000, '파스타' : 30000};

  constructor(name, number){
    this.name = name;
    if(number){ this.number = number; }
  }

  greeting(){
    return `안녕하세요. ${this.name} ${this.number} 호점입니다 
            \n 메뉴는 ${Object.keys(this.menu)} 입니다`
  }

  menuPrice(menuName){
    return `${menuName} 은(는) ${this.menu[menuName]} 원입니다`
  }
}
const r1 = new Restaurant('더조은레스토랑',1);
console.log(r1.greeting());
console.log(r1.menuPrice('스테이크'))
console.log(r1.menuPrice('파스타'))
console.log('-----------------------------');

const r2 = new Restaurant('아이티레스토랑',1);

// 메뉴추가 : r1 객체에만 추가되고 r2 객체에는 추가되지 않음
r1.menu['리조또'] = 40000;
console.log(r1);
console.log(r2);