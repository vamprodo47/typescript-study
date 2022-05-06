// ⭐️ call signatures에 대해서 알아봅시다.
// 함수 위에 마우스를 올렸을 때, 보게 되는 것을 함수의 call signatures라고 말합니다. 함수를 어떻게 호출해야하는지 알려줍니다.
// typescript가 가끔 우리의 타입을 추론하지 못하는 상황을 염두에 두고 살펴봅시다.

// typescript는 return의 타입을 명시해주지 않아도 number가 리턴될 것을 추론해서 알고 있습니다.
function add(a: number, b: number) {
  return a + b;
}

// 다음이 call signature입니다.
// React.js로 코딩할 때 props로 함수를 보내준다면, 함수가 어떻게 작동하는지 typescript에게 설명해주는 경우에 사용합니다.
type Add = (a: number, b: number) => number;

// a, b, return의 타입을 정해주지 않아도 typescript가 Add를 통해서 타입들을 알고 있습니다.
const addWithCallSignatures: Add = (a, b) => a + b;

// ⭐️ overloading에 대해서 알아봅시다.
// function overloading이나 method overloading이라고 불리기도 합니다.
// 오버로딩은 패키지나 라이브러리에서 많이 사용됩니다.

// 1. 오버로딩은 함수가 서로 다른 여러 개의 call signatures를 가지고 있을 때 발생시킵니다.
type OverloadingAdd = {
  // 기존에 alias를 정의했던 방식을 중괄호 안에 넣는 방식으로 대체할 수도 있습니다.
  (a: number, b: number): number;
  (a: number, b: string): number;
};
// 위와 같이 작성하면 b는 number이거나 string일 수 있습니다.
// 오버로딩은 여러 call signatures가 있는 함수일 뿐입니다.
const addWithOverloading: Add = (a, b) => {
  if (typeof b === "number") {
    return a + b;
  }
  return a;
};

// 2. 오버로딩이 실제 라이브러리에서 사용되는 방식을 살펴봅시다.
type Config = {
  path: string;
  state: object;
};

type Push = {
  (path: string): void;
  (config: Config): void;
};

const push: Push = (config) => {
  if (typeof config === "string") {
    console.log(config);
  } else {
    // config의 타입이 Config 타입 객체인 경우입니다. Typescript Playground에서 코드를 작성하면 좀 더 명확하게 확인할 수 있습니다.
    console.log(config.path, config.state);
  }
};

// 3. 오버로딩을 사용하면서, 각각 parameter의 갯수가 다른 경우는 어떻게 작성해야하는지 살펴봅시다.
// 흔하지는 않지만 사용되는 방법입니다.
type OverloadingAddWithParams = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
};

const addWithParams: OverloadingAddWithParams = (a, b, c?: number) => {
  // c가 옵션이라는 것을 알려주기 위해 이렇게 작성해줘야합니다. Typescript Playground에서 코드를 작성하면 좀 더 명확하게 확인할 수 있습니다.
  if (c) return a + b + c;
  return a + b;
};

// ⭐️ polymorphism(다형성)에 대해서 알아봅시다.
// poly + morph = many structure
// typescript에서 함수는 string이나 object를 첫번째 parameter로 가질 수 있습니다.
// Number | Boolean | String 배열을 받아서 배열의 요소를 차례대로 출력하는 함수를 만들어보겠습니다.
type SuperPrint = {
  (arr: number[]): void;
  (arr: boolean[]): void;
  (arr: string[]): void;
};

const superPrint: SuperPrint = (arr) => {
  arr.forEach((i) => console.log(i));
};

// number, boolean, string, void, unknown ... 은 concrete type입니다.
// generic은 타입의 placeholder와 같습니다. call signature를 작성할 때, 들어올 확실한 타입(concrete type)을 모를 때 generic을 사용합니다.
type SuperPrintWithGeneric = {
  <TypePlaceholder>(add: TypePlaceholder[]): void;
};
