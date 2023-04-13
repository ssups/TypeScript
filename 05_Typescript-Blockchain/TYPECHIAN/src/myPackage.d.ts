// ts에서 import할 파일이 그냥 일반 js로 작성되었으면 strict모드에서 빨간줄뜸
// .d.ts declare ? definition ? 파일을 만들어서 해당 js 파일에서 export 된 것에 대한 type 설명을 적어주면
// 마치 ts로 작성한 것 처럼 해당 파일에 들어있는 export된 것에 대한 설명이나 등등이 뜬다.

// 타입스크립트로 작업하면서 일반 js로 만들어진 패기지를 쓸때 이렇게 declare 해주는 작업이 필요할때가 있다.
// 일반 자바스크립트로 작성된 코드들에 type을 입혀주는게 이 declare 파일이다.

interface Config {
  url: string;
}
declare module 'myPackage' {
  function init(config: Config): boolean;
  function exit(code: number): number;
}
