// 1. obj type

type PlayerA = {
  name: string;
};
type PlayerAA = PlayerA & {
  lastName: string;
};
const playerA: PlayerAA = {
  name: 'nico',
  lastName: 'xxx',
};
///
interface PlayerB {
  name: string;
}
interface PlayerBB extends PlayerB {
  lastName: string;
} // 둘다가능 아래
interface PlayerBB {
  health: number;
} // 둘다가능 위
const playerB: PlayerBB = {
  name: 'nico',
  lastName: 'xxx',
  health: 2,
};

// 2. class type

type MonsterA = {
  firstName: string;
};
///
interface MonsterB {
  firstName: string;
}

class Dragon implements MonsterB {
  constructor(public firstName: string) {}
}

// ts 커뮤니티에서는 클래스나 오브젝트의 모양을 정의할때는 인터페이스를  사용하고
// 나머지 모든 경우에는 타입을 사용하길 추천하고있음
