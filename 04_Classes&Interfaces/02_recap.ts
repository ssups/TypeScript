type Words = {
  [key: string]: string;
  // 객체에 들어갈 key와 value의 타입을 정해주는거
};

class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }
  // words라는 변수 값을 받아와서 넣고싶은게 아니기때문에 위와같은 방식으로 해줌
  add(word: Word) {
    // 클래스의 인스턴스가 인수로 들어가기때문에 클래스를 type으로도 사용할 수 있음
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }
  def(term: string) {
    return this.words[term];
  }
  static hello() {
    return 'hello';
  }
  // static은 instance 생성 안하고 바로 쓰는 함수
  // Dict.static() 이런식으로 사용함
}

class Word {
  constructor(public readonly term: string, public readonly def: string) {}
  //   단어의 정의를 추가하거나 수정하는 메서드, 단어를 출력하는 메서드
}

const kimchi = new Word('kimchi', '한국의 뻘건 배추로만든 양념채소반찬');

const dict = new Dict();
dict.add(kimchi);
dict.def('kimchi');

export {}; // 파일간에 서로 간섭하는거 막을라고 함
