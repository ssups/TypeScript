// @ts-check
// 위에 쓴거는 타입스크립트한테 일반js파일을 확인하라고 알리는거
// 그대로 자바스크립트 파일로 나두고싶지만 타입스크립트의 보호를 받고싶을때 사용하는 기능
// 밑에 js-docs랑 함께 활용하면 타입을 다 설정할 수 있다.
/**
 * Inintializes the project
 * @param {object} config
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns {boolean} boolean
 */
export function init2(config) {
  return true;
}
/**
 * Exits the program
 * @param {number} code
 * @returns {number} number
 */
export function exit2(code) {
  return code + 1;
}
