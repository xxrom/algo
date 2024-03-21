// Array
// last
// makeArr: 2 generics, return, overwrite interface, default value
// addFullName: extends
// interfaces
// props
// useState
// jsx generic

//
// Array ----------------------------------------
//
type arr = Array<number>;

//
// last ----------------------------------------
//
const last = (arr: Array<number>) => {
  return arr[arr.length - 1];
};
const l = last([1, 2, 3]); // l type - number
const l_0 = last(["a", "b", "c"]); // errors

// T - generic type, like number/string/boolean
const last2 = <T>(arr: Array<T>): T => {
  return arr[arr.length - 1];
};

const l2 = last2(["a", "b", "c"]); // l2 type - string
// I can provide specific generic type before calling function
const l3 = last2<boolean>([true, false, true]); // l3 type - boolean

//
// makeArr ----------------------------------------
//
const makeArr = (x: number) => {
  return [x];
};

const v = makeArr(3); // n - Array<number>
const v_0 = makeArr("asdf"); // Error

const makeArr2 = <T, Y>(x: T, y: Y) => {
  return [x, y];
};
const v2 = makeArr2(1, 2); // Array<number>
const v3 = makeArr2(1, "asf"); // Array<string | number> - it's could be problem
// Return tuple
const makeArr3 = <X, Y>(x: X, y: Y): [X, Y] => {
  return [x, y];
};
const v4 = makeArr3<number | null, string>(1, "asdf"); // type - [number | null, string] like tuple
// We can add default type for one of the generics if not provided
const v5 = makeArr3<number | null>(1, "asdf"); // Error because of only one type

// Adding default type for the second Generic
const makeArr4 = <X, Y = string>(x: X, y: Y): [X, Y] => {
  return [x, y];
};
const v6 = makeArr4<number | null>(1, "asdf"); // type - [number | null, string - default type]

//
// addFullName extending ----------------------------------------
//

// we extending from object and because of that we can add anything inside it
// besides firstName and lastName
const makeFullName = <T extends { firstName: string; lastName: string }>(
  obj: T
) => {
  return {
    ...obj,
    fullName: `${obj.firstName} ${obj.lastName}`,
  };
};

const b = makeFullName({ firstName: "Bob", lastName: "Tst", another: 234 });

//
// Interfaces ----------------------------------------
//

interface Tab {
  id: string;
  position: number;
  data: any; // issue with any
}
// If we don't want any, so we have to use generics
interface Tab2<T> {
  id: string;
  position: number;
  data: T; // any type that we pass will be used in Tab
}

type NumberTab = Tab2<number>; // Tab with number data
type BooleanTab = Tab2<boolean>; // data - boolean
