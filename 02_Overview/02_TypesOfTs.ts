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

// readOnly
type Boy = {
  readonly name: Name;
  age?: Age;
};
const boy: Boy = {
  name: 'seop',
};
// boy.name = 'ni'; // readonly는 변경불가

const numbers: readonly number[] = [1, 2, 3, 4];
// numbers.push(1); // 배열에 추가도 불가함

// Turple
const monster: [string, number, boolean] = ['slime', 3, true];

// Any
// 타입을 안정해주면 any
const anyArr: any[] = []; // -> anyType array
anyArr.push('123');

const anyTemp: any = 'd';

// Unknown
let u: unknown; // 이 변수로 어떤 작업을 하려면 코드로 먼저 어떤타입인지 확인해야함

// let sum = u + 2; // => 안됨
if (typeof u === 'number') {
  let sum = u + 1;
}
if (typeof u === 'string') {
  let upper = u.toUpperCase();
}

// Void
// return값이 없는 함수 대상으로 사용
function hello() {
  console.log('x');
}
// 위 함수는 volid 함수
// 따로 타입을 정해주지 않아도 됨 알아서 void로 정의됨

// Never
// 함수가 절대 return을 하지못할때 사용
// 혹은 타입이 두가지일수 있는 상황일때 사용
function hello2(): never {
  throw new Error('xxx');
}
function hello3(name: string | number) {
  if (typeof name === 'string') {
    name; // string
  } else if (typeof name === 'number') {
    name; // number
  } else {
    name; // never 절대 실행되면 안될 코드
  }
}
