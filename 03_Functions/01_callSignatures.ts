// call signature란 함수명 위에 마우스 갖다됐을때 나오는 간략한 설명? 같은거
// 해당 함수에 어떤 타입의 인수를 집어넣어야하고 어떤 타입의 리턴값이 나오는지에 대한 설명

function add(a: number, b: number) {
  return a + b;
}
const add2 = (a: number, b: number) => a + b;
// 위처럼만 해주고 return에 대한 type은 명시안해줘도 알아서 return의 타입을 추론해준다.

type Add = (a: number, b: number) => number;
const add3: Add = (a, b) => a + b;
// 위처럼 call signature를 타입으로 먼저 만들 수 있음
// 함수를 만들기 전에 미리 그 함수에 대한 타입설명(call signature)을 만들 수 있는거.
