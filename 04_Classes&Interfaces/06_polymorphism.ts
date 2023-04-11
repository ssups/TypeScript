interface SStorage<T> {
  [key: string]: T;
}
class LocalStorage<T> {
  private storage: SStorage<T> = {}; //원래 여기서 interface에 선언된 제네릭의 타입을 정해줘야하지만 여기또한 제네릭으로 만들어서 인터페이스에게 보내준다?
  set(key: string, value: T) {
    this.storage[key] = value;
  }
  remove(key: string) {
    delete this.storage[key];
  }
  get(key: string): T {
    return this.storage[key];
  }
  clear() {
    this.storage = {};
  }
}

const stringsStorage = new LocalStorage<string>(); // 인스턴스 생성하는 시점에 제네릭 타입을 지정

const booleanStorage = new LocalStorage<boolean>();

// type Obj<T> = {
//   [key: string]: T;
// };
// const obj: Obj<number> = {
//   hello: 2,
// };
