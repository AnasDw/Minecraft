
export const SnowMap = [
    ["Sky"],
    ["Sky"],
    ["Sky"],
    ["Sky"],
    ["Sky"],
    ["Sky"],
    ["DirtGrass"],
    ["DirtGrass"],
    ["DirtGrass"],
    ["DirtGrass"],
    ["DirtGrass"],
    ["DirtGrass"],
    ["DirtGrass"],
    ["DirtGrass"],
    ["DirtGrass"],
    ["DirtGrass"],
    ["DirtGrass"],
    ["DirtGrass"]
];
export const SnowMapList = [
    {Dirt: 0},
    {DirtGrass: 2},
    {TreeLeaves: 3},
    {Sky: 0},
    {Cloud: 0},
    {Blossom: 1},
    {Melon: 0},
];


export const JungleMap = [
    ["Sky"],
    ["Sky", "Sky", "Sky", "Cloud", "Cloud", "Cloud", "Cloud", "Sky"],
    ["Sky", "Sky", "Cloud", "Cloud", "Cloud", "Cloud", "Cloud", "Cloud", "Cloud" ,"Sky", "Sky", "Sky","Sky","Sky", "Sky","Sky", "Cloud"],
    ["Sky", "Sky", "Sky", "Sky", "Cloud", "Cloud", "Cloud", "Cloud", "Sky", "Sky","Sky", "Sky","Sky", "Sky", "Cloud"],
    ["Sky", "Sky", "Sky", "Sky", "Sky","Sky", "Sky", "Sky", "Sky" , "TreeLeaves", "TreeLeaves", "TreeLeaves", "Sky"],
    ["TreeLeaves", "Sky", "Sky", "Sky", "Sky","Sky", "Sky", "Sky", "TreeLeaves" , "TreeLeaves", "TreeLeaves", "TreeLeaves", "TreeLeaves" , "Sky"],
    ["TreeLeaves", "TreeLeaves", "Sky", "Sky", "Sky","Sky", "Sky", "Sky", "Sky" , "TreeLeaves", "TreeLeaves", "TreeLeaves" , "Sky"],
    ["TreeLeaves", "TreeLeaves", "TreeLeaves", "Sky", "Sky","Sky", "Sky", "Sky", "Sky", "Sky", "TreeWood" , "Sky","Sky", "Sky", "Sky", "Sky", "Sky","Sky", "Sky" , "Stone", "Stone", "Stone", "Sky"],
    ["TreeLeaves", "TreeWood", "Sky", "Sky", "Sky","Sky", "Sky", "Sky", "Sky", "Sky", "TreeWood" , "Sky","Sky", "Sky", "Sky", "Sky", "Sky","Sky", "Sky", "Stone", "Stone", "Stone", "Sky"],
    ["Blossom", "TreeWood", "Blossom", "Sky", "Sky","Blossom", "Blossom", "Sky", "Sky", "Sky", "TreeWood" , "Sky", "Sky", "Fence", "Melon" , "Melon", "Fence", "Sky" , "Stone"],
    ["DirtGrass"],
    ["Dirt"],
    ["Dirt"],
    ["Dirt"],
    ["Dirt"],
    ["Dirt"],
    ["Dirt"],
    ["Dirt"],
    ["Dirt"],
];
export const JungleMapList = [
    {Dirt: 0},
    {DirtGrass: 2},
    {TreeLeaves: 3},
    {Sky: 0},
    {Cloud: 0},
    {Blossom: 1},
    {Melon: 0},
];


export const DesertMap = [
    ["Sky"],
    ["Sky", "Sky", "Sky", "Cloud", "Cloud", "Cloud", "Cloud", "Sky"],
    ["Sky", "Sky", "Cloud", "Cloud", "Cloud", "Cloud", "Cloud", "Cloud", "Cloud" ,"Sky", "Sky", "Sky","Sky","Sky", "Sky","Sky", "Cloud"],
    ["Sky", "Sky", "Sky", "Sky", "Cloud", "Cloud", "Cloud", "Cloud", "Sky", "Sky","Sky", "Sky","Sky", "Sky", "Cloud"],
    ["Sky", "Sky", "Sky", "Sky", "Sky","Sky", "Sky", "Sky", "Sky" , "TreeLeaves", "TreeLeaves", "TreeLeaves", "Sky"],
    ["TreeLeaves", "Sky", "Sky", "Sky", "Sky","Sky", "Sky", "Sky", "TreeLeaves" , "TreeLeaves", "TreeLeaves", "TreeLeaves", "TreeLeaves" , "Sky"],
    ["TreeLeaves", "TreeLeaves", "Sky", "Sky", "Sky","Sky", "Sky", "Sky", "Sky" , "TreeLeaves", "TreeLeaves", "TreeLeaves" , "Sky"],
    ["TreeLeaves", "TreeLeaves", "TreeLeaves", "Sky", "Sky","Sky", "Sky", "Sky", "Sky", "Sky", "TreeWood" , "Sky","Sky", "Sky", "Sky", "Sky", "Sky","Sky", "Sky" , "Stone", "Stone", "Stone", "Sky"],
    ["Sky", "TreeWood", "Sky", "Sky", "BrownCow","Cow", "Sky", "Sky", "Sky", "Sky", "TreeWood" , "Sky","Sky", "BrownCow","Cow" , "Sky", "Sky", "Sky", "Sky", "Stone", "Stone", "Stone", "Sky"],
    ["Sand", "Sand" , "Sand", "Sand" , "Sand", "Sand" , "Sand", "Sand" , "Sand", "Sand" , "Sand", "Sand" , "Sand", "Sand" , "Sand", "Sand" , "Water"],
    ["Sand", "Sand" , "Sand", "Sand" , "Sand", "Sand" , "Sand", "Sand" , "Sand", "Sand" , "Sand", "Sand" , "Sand", "Sand" , "Sand", "Sand" , "Sand" , "Water"],
    ["Sand", "Sand" , "Sand", "Sand" , "Sand", "Sand" , "Sand", "Sand" , "Sand", "Sand" , "Sand", "Sand" , "Sand", "Sand" , "Sand", "Sand" , "Sand", "Sand" , "Water"],
    ["Sand"],
    ["Sand"],
    ["Sand"],
    ["Sand"],
];
export const DesertMapList = [
    {Dirt: 0},
    {DirtGrass: 2},
    {TreeLeaves: 3},
    {Sky: 0},
    {Cloud: 0},
    {Blossom: 1},
    {Melon: 0},
]

export const mapSize = 24;

export function SwitchScreenShow (returnScreen, exitsScreen){
    returnScreen.style.display = "none";
    exitsScreen.style.display = "flex";
    setTimeout(function(){
        exitsScreen.style.display = "none"
        returnScreen.style.display = "flex";
    }, 3000);
}