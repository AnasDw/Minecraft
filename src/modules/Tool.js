export class Tool {
    constructor() {

    };
    CheckCollision (){
        return false;
    };
    makeSound(){
        return false;
    };
    makeCursor(){
        return false;
    };
}

export class Axe extends Tool {
    makeSound(){

    };
    makeCursor(){

    };
    CheckCollision (itemToCheck){
        const CollisionList = ["TreeWood", "TreeLeaves", "Blossom" , "Melon" , "Fence" , "BrownWood" , "PinkLeaves"]; 
        if(CollisionList.includes(itemToCheck[0])) return true;
        return false;
    };
};
export class Shovel extends Tool {
    makeSound(){

    };
    makeCursor(){

    };
    CheckCollision (itemToCheck){
        const CollisionList = ["DirtGrass", "Dirt", "Blossom" , "Melon" , "Sand" , "Snow" , "PinkLeaves"]; 
        if(CollisionList.includes(itemToCheck[0])) return true;
        return false;
    };
};
export class Pickaxe extends Tool {
    makeSound(){
        console.log("TTTTTTT");

    };
    makeCursor(){

    };
    CheckCollision (itemToCheck){
        const CollisionList = ["Stone", "Carbon", "Gold" , "Diamond" , "RedDiamond" , "Ore" , "PinkLeaves"]; 
        if(CollisionList.includes(itemToCheck[0])) return true;
        return false;
    };
};
export class Sword extends Tool {
    makeSound(){
        console.log("sssssssss");
    };
    makeCursor(){

    };
    CheckCollision (itemToCheck){
        const CollisionList = ["FrozenZombie" , "Cow" , "BrownCow"]; 
        if(CollisionList.includes(itemToCheck[0])) return true;
        return false;
    };
};


// else if ( element.target.id  === "axe"){
//     gameWindow.style.cursor = 'url("https://ik.imagekit.io/AnasDweik/Minecraft/Axe.png?updatedAt=1693242201304"),auto';
// } 
// else if ( element.target.id  === "shovel") {
//     gameWindow.style.cursor = 'url("https://ik.imagekit.io/AnasDweik/Minecraft/shovel.png?updatedAt=1693242201334"),auto';
// }
// else if ( element.target.id  === "Pickaxe"){
//     gameWindow.style.cursor = 'url("https://ik.imagekit.io/AnasDweik/Minecraft/stoneCrusher.png?updatedAt=1693242201292"),auto';
// }