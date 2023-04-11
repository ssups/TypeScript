abstract class User {
  constructor(protected firstName: string, protected lastName: string) {}
  abstract sayHi(name: string): string;
  abstract fullName(): string;
}

class Player extends User {
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi(name: string) {
    return `Hello ${name}. My name is ${this.fullName()}`;
  }
}

// 위처럼 짜면 abstract 클래스는 직접적으로 instance를 생성하지 못하게 하지만 JS로 컴파일되면 일반 class로 바뀌게 된다.
// JS식으로 생각하면 굳이 abstract 클래스는 필요가 없고 프로젝트 자체를 그냥 무겁게 할뿐이다.
// 따라서 이럴때 interface로 대체해서 사용한다.
// interface는 js로 컴파일할때 그냥 없어지기때문에 가볍고 좋다.
// 또한 abstract 매서드 처럼 상속받는 class가 무조건 생성해야할 매서드들도 강제할 수 있다.

interface Monster {
  firstName: string;
  lastName: string;
  sayHi(name: string): string;
  fullName(): string;
}
interface Status {
  hp: number;
}

class Dragon implements Monster, Status {
  constructor(public firstName: string, public lastName: string, public hp: number) {}
  // 상속받은 interface에서 명시된 변수들은 오직 public으로만 선언할 수 있음
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi(name: string) {
    return `Hello ${name}. My name is ${this.fullName()}`;
  }
}

// 추가적으로 interface도 타입으로 쓸 수 있음
function makeMonster(monster: Monster) {
  return `${monster.fullName()} say hi`;
}

makeMonster({
  firstName: 'choo',
  lastName: 'chchch',
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  sayHi(name: string) {
    return `Hello ${name}. My name is ${this.fullName()}`;
  },
});

export {};
