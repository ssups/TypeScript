type Last = <T>(arr: T[]) => T;
const last: Last = arr => arr[arr.length - 1];

type Prepend = <T>(arr: T[], item: T) => T[];
const prepend: Prepend = (arr, item) => {
  arr.unshift(item);
  return arr;
};

type Mix = <T>(arr1: T[], arr2: T[]) => T[];
const mix: Mix = (arr1, arr2) => [...arr1, ...arr2];

type Count = <T>(arr: T[]) => number;
const count: Count = arr => arr.length;

type FindIndex = <T>(arr: T[], item: T) => number | null;
const findIndex: FindIndex = (arr, item) => {
  const index = arr.indexOf(item);
  return index >= 0 ? index : null;
};

type Slice = <T>(arr: T[], startIndex: number, endInex?: number) => T[];
const slice: Slice = (arr, startIndex, endIndex) => arr.slice(startIndex, endIndex);
