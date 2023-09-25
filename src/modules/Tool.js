export class Tool {
  constructor() {}
  CheckCollision() {
    return false;
  }
  makeSound() {
    return false;
  }
  makeCursor() {
    return false;
  }
}

export class Axe extends Tool {
  makeSound() {
    var audio = new Audio("../../assets/sounds/Wood.mp3");
    audio.play();
  }
  makeCursor() {}
  CheckCollision(itemToCheck) {
    const CollisionList = [
      "TreeWood",
      "TreeLeaves",
      "Blossom",
      "Melon",
      "Fence",
      "BrownWood",
      "PinkLeaves",
    ];
    if (CollisionList.includes(itemToCheck[0])) {
      this.makeSound();
      return true;
    }
    return false;
  }
}
export class Shovel extends Tool {
  makeSound() {
    var audio = new Audio("../../assets/sounds/Shovel.mp3");
    audio.play();
  }
  makeCursor() {}
  CheckCollision(itemToCheck) {
    const CollisionList = [
      "DirtGrass",
      "Dirt",
      "Blossom",
      "Melon",
      "Sand",
      "Snow",
      "PinkLeaves",
    ];
    if (CollisionList.includes(itemToCheck[0])) {
      this.makeSound();

      return true;
    }
    return false;
  }
}
export class Pickaxe extends Tool {
  makeSound() {
    var audio = new Audio("../../assets/sounds/PickAxe.mp3");
    audio.play();
  }
  makeCursor() {}
  CheckCollision(itemToCheck) {
    const CollisionList = [
      "Stone",
      "Carbon",
      "Gold",
      "Diamond",
      "RedDiamond",
      "Ore",
      "PinkLeaves",
    ];
    if (CollisionList.includes(itemToCheck[0])) {
      this.makeSound();

      return true;
    }
    return false;
  }
}
export class Sword extends Tool {
  makeSound(name) {
    var audio = new Audio();
    if (name === "FrozenZombie") {
      audio = new Audio(
        "../../assets/sounds/Minecraft Zombie Groan - Sound Effect (HD).mp3"
      );
    } else {
      audio = new Audio("../../assets/sounds/mow.mov");
    }
    audio.play();
  }
  makeCursor() {}
  CheckCollision(itemToCheck) {
    const CollisionList = ["FrozenZombie", "Cow", "BrownCow"];
    if (CollisionList.includes(itemToCheck[0])) {
      this.makeSound(itemToCheck[0]);
      return true;
    }
    return false;
  }
}
