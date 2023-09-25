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
  makeSound() {}
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
    if (CollisionList.includes(itemToCheck[0])) return true;
    return false;
  }
}
export class Shovel extends Tool {
  makeSound() {}
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
    if (CollisionList.includes(itemToCheck[0])) return true;
    return false;
  }
}
export class Pickaxe extends Tool {
  makeSound() {}
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
    if (CollisionList.includes(itemToCheck[0])) return true;
    return false;
  }
}
export class Sword extends Tool {
  makeSound() {}
  makeCursor() {}
  CheckCollision(itemToCheck) {
    const CollisionList = ["FrozenZombie", "Cow", "BrownCow"];
    if (CollisionList.includes(itemToCheck[0])) return true;
    return false;
  }
}
