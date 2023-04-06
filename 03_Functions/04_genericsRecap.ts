// any와 generic 타입의 차이점은
// any는 그냥 타입이 없는거라서 보호받지 못하지만
// generic은 함수가 호출될때 타입을 알아서 유추해주는거기 때문에
// 타입이 정해지는거고 보호를 받을 수 있다.

// '제네릭은 선언 시점이 아니라 생성 시점에 타입을 명시하여
// 하나의 타입만이 아닌 다양한 타입을 사용할 수 있도록 하는 기법이다.'

type GenericFunc = <T, M>(arr: T[], ran: M) => T;

const genericFunc: GenericFunc = arr => arr[0];

const aaa = genericFunc([1, 2, 3, 4], 'x');
const bbb = genericFunc([true, false, true], 1);
const ccc = genericFunc(['a', 'c', 'b'], false);
const ddd = genericFunc([1, true], null);
