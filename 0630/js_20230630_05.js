
// 이스케이프 문자
// 우리 학원은 '더조은' 학원입니다
console.log('우리 학원은 \'더조은\' 학원입니다')
console.log("우리 학원은 '더조은' 학원입니다")

// 우리 학원은 "더조은" 학원입니다
console.log("우리 학원은 \"더조은\" 학원입니다")
console.log('우리 학원은 "더조은" 학원입니다')

// 개행문자(줄바꿈 문자) : \n
// 탭 문자              : \t 
// 역슬래시             : \\

let str2 =`이순신(한국 한자: 李舜臣, 1545년 4월 28일 (음력 3월 8일) ~ 1598년 12월 16일 (음력 11월 19일))은 조선 중기의 무신이었다.
본관은 덕수(德水), 자는 여해(汝諧), 시호는 충무(忠武)였으며, 한성 출신이었다. 문반 가문 출신으로 1576년(선조 9년) 무과(武科)에 급제[2]하여 그 관직이
동구비보 권관, 훈련원 봉사, 발포진 수군만호, 조산보 만호, 전라남도수사를 거쳐 정헌대부 삼도수군통제사에 이르렀다. 위키백과`

let str3 = '이순신(한국 한자: 李舜臣, 1545년 4월 28일 (음력 3월 8일) ~ 1598년 12월 16일 (음력 11월 19일))은 조선 중기의 무신이었다. 본관은 덕수(德水), 자는 여해(汝諧), 시호는\n충무(忠武)였으며, 한성 출신이었다. 문반 가문 출신으로 1576년(선조 9년) 무과(武科)에 급제[2]하여 그 관직이\n동구비보 권관, 훈련원 봉사, 발포진 수군만호, 조산보 만호, 전라남도수사를 거쳐 정헌대부\n삼도수군통제사에 이르렀다. 위키백과'

let str4 = '이순신(한국 한자: 李舜臣, 1545년 4월 28일 (음력 3월 8일) ~ 1598년 12월 16일 (음력 11월 19일))은 조선 중기의 무신이었다. 본관은 덕수(德水), 자는 여해(汝諧), 시호는\
충무(忠武)였으며, 한성 출신이었다. 문반 가문 출신으로 1576년(선조 9년) 무과(武科)에 급제[2]하여 그 관직이\
동구비보 권관, 훈련원 봉사, 발포진 수군만호, 조산보 만호, 전라남도수사를 거쳐 정헌대부\
삼도수군통제사에 이르렀다. 위키백과'

console.log(str2)
console.log('-----------------------------------')
console.log(str3)
console.log('-----------------------------------')
console.log(str4)

let str5 = '더조은아이티 아카데미입니다'
'우리반은 \\ 자바 웹 개발자반\t 입니다\\';

let name1 = '더조은';
let age = 21;
let height = 183;
let weight = 79;

console.log('이름은', name1, '이고 나이는',age,'이고 키는',height,'cm, 몸무게는',
weight,'kg입니다')

//template literal
console.log('이름은 name1 이고 나이는 age 이고 키는 height cm, 몸무게는 weight kg입니다')
console.log('이름은 ${name1} 이고 나이는 ${age} 이고 키는 ${height} cm, 몸무게는 ${weight} kg입니다')

/* cf. python 의 f-string
print(f'이름은 {name1} 이고 나이는 {age} 이고 키는 {height} cm, 몸무게는 {weight} kg 입니다')
*/

let name2 = '아이티';
let age2 = 18;
let isStudent = true;

console.log(`저는 ${name2}이고, 나이는 ${age2} 입니다. 저는 ${isStudent ? '학생': '어른'}입니다`)
