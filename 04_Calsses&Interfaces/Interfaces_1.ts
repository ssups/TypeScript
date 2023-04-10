type Nickname = string;
type Friends = Array<string>; // Array 자체가 하나의 class로 만들어진거라서 타입으로도 사용 가능

type Team = 'read' | 'blue' | 'yellow'; // 이런식으로 훨씬 더 concrete 하게 타입 지정 가능
type Health = 1 | 5 | 10;

type Gamer = {
  nickname: Nickname;
  team: Team;
  health: Health;
};
interface Player {
  nickname: Nickname;
  team: Team;
  health: Health;
}
// 인터페이스는 object의 모양을 지정해주는 기능만 하는 것
// type처럼 모든 변수의 타입을 정해주지 못함 오직 object에서만 가능

const nico: Player = {
  nickname: 'nico',
  team: 'yellow',
  health: 10,
};

interface Monster {
  name: string;
}

interface Dragon extends Monster {} // 이런식으로 상속해서 쓸수도 있음

// 이걸 type 방식으로 한다면 밑에처럼

type Parent = {
  firsName: string;
};

type Mother = Parent & {};

// 인터페이스의 또다른 특징은 properties들을 축적시킬 수 있다는 점이다.

interface Accumulation {
  name: string;
}
interface Accumulation {
  age: number;
}
interface Accumulation {
  sex: string;
}

const accumulation: Accumulation = {
  name: 'hi',
  age: 23,
  sex: 'boy',
};

// 타입으로는 이런식을 축적 불가함

export {};
