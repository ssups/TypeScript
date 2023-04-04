// Implicit Type(암시적 타입)
// 타입을 직접 안적어줘도 타입스크립트가 알아서 추론해서 티압을 부여해준다.
let a = 'hello';
// a = 3; => type error

// Explicit Type(명시적 타입)
// 타입을 직접 선언해주는 방식
let b: boolean = false;

// 보통 가능하면 암시적 타입 방식으로 해서 타입스크립트가 직접 추론하도록 하는게 좋음
