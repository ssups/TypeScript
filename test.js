class Word {
  constructor(term, def) {
    this.term = term;
    this.def = def;
  }
}
class Dict {
  constructor() {
    this.words = {};
  }
  add(word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }
  get(term) {
    return this.words[term];
  }
  delete(term) {
    if (this.words[term]) delete this.words[term];
  }
  update(word) {
    if (this.words[word.term]) this.words[word.term] = word.def;
  }
  showAll() {
    console.log(this.words);
  }
}
const kimchi = new Word('kimchi', '한국의 뻘건 배추로만든 양념채소반찬');
const pickle = new Word('pickle', '미국식 오이절임');
const gochoo = new Word('gochoo', '된장찍먹 고추');
const updatedKimchi = new Word('kimchi', '이번엔 무김치');
const dict = new Dict();
dict.add(kimchi);
dict.add(pickle);
dict.add(gochoo);
console.log(dict.get('kimchi'));
dict.delete('pickle');
dict.update(updatedKimchi);
dict.showAll();

const obj = { a: 1, b: 2 };
delete obj['a'];
const arr = ['a', 'b'];
delete arr[0];
console.log(!!obj['a']);
console.log(!!obj['b']);
console.log(!!obj['c']);
