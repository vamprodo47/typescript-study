// ⭐️ Typescipt로 객체 지향 프로그래밍 하는 것을 살펴봅시다.
// Typescript playground에서 JS로 어떻게 compile되는지 확인해보세요!
// class Player {
//   constructor(
//     private firstName: string,
//     private lastName: string,
//     public nickName: string
//   ) {}
// }
// public, private은 JS에 반영되지 않습니다. TS에서 우리를 보호하기 위한 방법일 뿐입니다.

// const john = new Player("john", "kim", "킴존");

// ⭐️ Abstract Class에 대해 알아봅시다.
abstract class User {
  constructor(
    public firstName: string,
    private lastName: string,
    protected nickName: string
  ) {}

  abstract getNickName(): void;
  // abstract method는 구현되지 않은 메소드입니다. call signature만 가지고 있습니다.
  // User를 상속한다면, 무조건 추상 메소드를 구현해줘야합니다.

  getFullName() {
    // getFullName() 앞에 접근제한자인 private를 붙인다면, User class를 상속할지라도 getFullName 메소드에 접근이 불가능합니다.
    return `${this.firstName} ${this.lastName}`;
  }
}
// abstract class는 다른 class가 상속 받을 수 있는 클래스입니다. 하지만 직접 새로운 인스턴스를 만들 순 없습니다.
// const player = new User("john", "kim", "킴존");와 같이 작성할 순 없다는 뜻입니다.

class Player extends User {
  getNickName() {
    console.log(this.nickName);
  }
  // nickName은 User class에서 protected 이므로, Player에서 접근이 가능합니다.
}
// User class를 상속했을지라도, private property에는 접근할 수 없습니다.
// User class의 인스턴스에서는 접근할 수 있습니다.

const john = new Player("john", "kim", "킴존");
john.getFullName();
