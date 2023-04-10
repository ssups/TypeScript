abstract class User {
  constructor(private firstName: string, private lastName: string, protected nickname: string) {}
  // ts에서는 constructor에서 받을 인수 타입만 정해줘도 됨
  // 알아서 this.firstName = firstName 이런거 인식해서 해줌

  // private 이나 public은 js로 컴파일되면 사라짐
  // private으로 선언한 값은 클래스 외부에서 호출 불가, 상속받은 클래스에서도 호출 불가하다
  // protected는 클래스 외부에서 호출불가하지만 상속받은 클래스에서는 호출할 수 있다. (솔리디티 internal이랑 같은듯)
  abstract getNickName(): void;
  // abstract method는 해당 추상 클래스를 상속받는 모든 클래스들이 구현해야하는 method를 의미함
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
// abstract class는 다른class가 상속받아서 쓸 수 있는 class
// 하지만 abstract class 그자체로는 new instance를 생성하지 못한다.
// const nico = new User('nico','las','nicco') => 불가

class Player extends User {
  getNickName() {
    console.log(this.nickname);
  }
}

const nico = new Player('nico', 'las', 'nicco');
nico.getFullName();

export {};
