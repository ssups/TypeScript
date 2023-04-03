// Implicit Type(암시적 타입)
// 타입을 직접 안적어줘도 타입스크립트가 알아서 추론해서 티압을 부여해준다.
let a = 'hello';
// a = 3; => type error

// Explicit Type(명시적 타입)
// 타입을 직접 선언해주는 방식
let b: boolean = false;

// 보통 가능하면 암시적 타입 방식으로 해서 타입스크립트가 직접 추론하도록 하는게 좋음

// 타입 종류들
let c: number = 1;
let d: string = 'hi';
let e: boolean = true;
let f: number[] = [1, 2];
let g: string[] = ['hi', 'hello'];
let h: boolean[] = [true, false];

const player: {
  name: string;
  age?: number; // 물음표를 달면 해당값은 넣어도되고 안넣어도 됨 (optional parameter) 선택적 변수
} = {
  name: 'nico',
};

// Type Alias
type Player = {
  name: string;
  age?: number;
};

const nico: Player = {
  name: 'nico',
};
const lynn: Player = {
  name: 'lynn',
  age: 12,
};

// 꼭 객체가 아니어라도 Type을 만들수 있음
type Name = string;
type Age = number;
type Person = {
  name: Name;
  age?: Age;
};

// 함수에 타입적용하는 방식
// 매개변수 뒤에 : 타입 -> 해당함수의 return 타입
function personMaker(name: string): Person {
  return {
    name: 'seop',
  };
}
const seop = personMaker('seop');
seop.age = 26;

const playerMaker = (name: string): Player => {
  return {
    name: 'joon',
  };
};
