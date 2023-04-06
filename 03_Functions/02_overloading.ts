// overloading 하나의 함수가 여러개의 callSignature를 가지고 있을때 사용

type Plus = {
  (num1: number, num2: number): number;
  (num: number, str: string): number;
};

const sub: Plus = (a, b) => a + b; // b에 들어가는 인수의 타입에따라 return 타입이 달라지므로 불가
const sub2: Plus = (a, b) => {
  if (typeof b === 'number') return a + b;
  return a;
};

// 오버로딩을 사용하는 좋은 예시
type Config = {
  path: string;
  state: object;
};

type Push = {
  (path: string): void;
  (config: Config): void;
};

const push: Push = config => {
  if (typeof config === 'string') {
    console.log(config);
  } else {
    console.log(config.path, config.state);
  }
};

// 여러개의 인수를 가진 함수일떄
type AddAlot = {
  //   (a: number, b: number): number;
  //   (a: number, b: number, c: number): number; //틀린예시 두개를 하나로 합쳐서
  (a: number, b: number, c?: number): number;
};

const addAlot: AddAlot = (a, b, c) => {
  if (c) return a + b + c;
  return a + b;
};
