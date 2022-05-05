let a: boolean = false;
let b: number[] = [1, 2, 3];
let c: string = "this is string";
let wrongPlayer: object = {
  name: "Nick",
};

let rightPlayer: {
  name: string;
  age?: number; // 선택적 타입을 정의해줬습니다.
} = {
  name: "Nick",
};

if (rightPlayer.age < 12) {
  console.log("true");
}

type Player = {
  // alias 타입을 정의하므로서 코드를 재사용할 수 있습니다.
  readonly name: string;
  age?: number;
};

let modifiedPlayer: Player = {
  name: "John",
  age: 2,
};

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
