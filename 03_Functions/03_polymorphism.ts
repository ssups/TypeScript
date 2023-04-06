// polymorphism 다형성
// 함수의 다형성을 부여?
// callSignatrue을 작성할때 인수로 어떤타입 들어올지 모를때 generic type을 설정해줌
// string, boolean 같은건 concrete type

// concrete 방식

type ConcreteSuperPrint = {
  (arr: number[]): void;
  (arr: boolean[]): void;
  (arr: string[]): void;
  (arr: (number | boolean)[]): void;
};

const ConcreteSuperPrint: ConcreteSuperPrint = arr => {
  arr.forEach(i => console.log(i));
};

ConcreteSuperPrint([1, 2, 3, 4]);
ConcreteSuperPrint([true, false, true]);
ConcreteSuperPrint(['a', 'c', 'b']);
ConcreteSuperPrint([1, true]);

// generic

type GenericSuperPrint = {
  <T>(arr: T[]): T;
  // 요자리에 어떤게 와도 상관없음
  // 제네릭으로 쓰면 함수를 사용할때 타입을 추론해서 넣어줌
};

const GenericSuperPrint: ConcreteSuperPrint = arr => arr[0];

const aa = GenericSuperPrint([1, 2, 3, 4]);
const bb = GenericSuperPrint([true, false, true]);
const cc = GenericSuperPrint(['a', 'c', 'b']);
const dd = GenericSuperPrint([1, true]);
