// ⭐️ Typescipt로 객체 지향 프로그래밍 하는 것을 살펴봅시다.
// Typescript playground에서 JS로 어떻게 compile되는지 확인해보세요!
class Player {
  constructor(
    private firstName: string,
    private lastName: string,
    public nickName: string
  ) {}
}
// public, private은 JS에 반영되지 않습니다. TS에서 우리를 보호하기 위한 방법일 뿐입니다.

const john = new Player("john", "kim", "킴존");

// ⭐️ Abstract Class에 대해 알아봅시다.
