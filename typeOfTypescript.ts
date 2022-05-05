// ⭐️ 기본적인 타입 사용 방법에 대해서 알아봅시다.
let a: boolean = false;
let b: number[] = [1, 2, 3];
let c: string = "this is string";
let wrongPlayer: object = {
  name: "Nick",
};

let suggestedPlayer: {
  name: string;
  age?: number; // 선택적 타입을 정의해줬습니다. age는 number이거나 undefined 입니다.
} = {
  name: "Nick",
};

if (suggestedPlayer.age < 12) {
  console.log("true");
}

// ⭐️ alias 타입을 정의하므로서 코드를 재사용할 수 있습니다.
type Player = {
  readonly name: string;
  age?: number;
};

let modifiedPlayer: Player = {
  name: "John",
  age: 2,
};

// ⭐️ readonly에 대해서 알아봅시다.
const numbers: readonly number[] = [1, 2, 3, 4];
// numbers.push(1);  -> readonly 라서 error가 발생합니다.
// numbers.map((num) => num * 2);  -> readonly 라서 error가 발생합니다.

// ⭐️ 함수를 사용해봅시다.
function playerMaker(name: string): Player {
  return {
    name,
  };
}

// 화살표 함수로 나타내는 방법입니다.
const arrowPlayerMaker = (name: string): Player => ({
  name,
});

const john = playerMaker("John");
john.age = 12; // john이 Player 타입이라는 것을 알고 있어서 age에 값을 넣는 것이 가능합니다.

// ⭐️ Tuple 타입을 살펴봅시다.
// 최소 길이를 가져야 하고 ( 정해진 갯수의 요소를 가짐 ), 특정 위치에 특정 타입이 있어야 합니다.
// 가끔 API가 object를 주지 않고, array를 줄 때가 있는데 그 때 API에서 Tuple을 확인해야합니다.
const players: [string, number, boolean] = ["Jason", 12, false];
const readonlyPlaters: readonly [string, number, boolean] = ["John", 13, false];

// ⭐️ any 타입에 대해 알아봅시다. 비어 있는 값을 쓰면 기본값이 any입니다. 기본적으로 사용하지 않는 것이 좋습니다.
let anyA = [];
// typescript는 anyA를 any의 array라고 생각합니다.
// any는 typescript의 보호장치로부터 빠져나오고 싶을 때 사용합니다.

// ⭐️ typescript의 독특한 타입인 void, never, unknown에 대해 알아봅시다.
// typescript의 핵심은 type checker와 소통하는 것입니다.

// 1️. API로부터 응답을 받는데 그 타입을 모르겠다면 unknown을 사용할 수 있습니다.
// typescript로부터 일종의 보호를 받을 수 있습니다. 어떤 작업을 하기 전에 이 변수의 타입을 먼저 확인하는 방식입니다.
let unknownA: unknown;

if (typeof unknownA === "number") {
  let b = unknownA + 1;
}
// if 문 내에서 unknownA는 number 타입이므로 연산이 가능합니다.

if (typeof unknownA === "string") {
  unknownA.toUpperCase();
}
// if 문 내에서 unknownA는 string 타입이므로 toUpperCase 메소드를 사용할 수 있습니다.

// 2️. void 타입에 대해서 알아봅시다.
// 아무것도 return 하지 않는 함수에 사용합니다.
// 보통 void를 따로 지정해 줄 필요가 없습니다.
function hello() {
  // 함수 hello가 void 타입인 것을 확인할 수 있습니다.
  console.log("Hello");
}

// 3. never 타입에 대해서 알아봅시다.
// 절대 return 하지 않을 때 사용합니다. 예를 들어서, 함수에서 exception(예외)가 발생하는 경우가 있습니다.

// 잘못된 사용 방법입니다.
// function wrongNeverFunction(): never {
//   return "X";
// }

// 올바른 사용 방법 1입니다.
// 리턴하지 않고 오류를 발생시키는 함수입니다.
function firstSuggestedFunction(): never {
  throw new Error("X");
}

// 올바른 사용 방법 2입니다.
// 타입이 2가지일 수 있는 상황에서 사용 가능합니다.
function secondSuggestedFunction(player: string | number) {
  // 여기서 else 문은 절대 실행되지 않아야 합니다. 그 과정을 살펴봅시다.
  if (typeof player === "string") {
    player = "John"; // player가 string 타입인 것을 확인할 수 있습니다.
  } else if (typeof player === "number") {
    player = "12"; // player가 number 타입인 것을 확인할 수 있습니다.
  } else {
    player; // 위에서 두 타입을 모두 확인해줬기 때문에 player가 never 타입인 것을 확인할 수 있습니다.
  }
}
