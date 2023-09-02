
export const SnowMap = [
    ["Sky"],
    ["Sky"],
    ["Sky"],
    ["Sky"],
    ["Sky"],
    ["Sky"],
    ["Dirt"],
    ["Dirt"],
    ["Dirt"],
    ["Dirt"],
    ["Dirt"],
    ["Dirt"],
    ["Dirt"],
];
export const SnowMapList = {
    A: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
};


export const JungleMap = [
    ["Sky"],
    ["Sky"],
    ["Sky"],
    ["Sky"],
    ["Sky"],
    ["Sky"],
    ["Dirt"],
    ["Dirt"],
    ["Dirt"],
    ["Dirt"],
    ["Dirt"],
    ["Dirt"],
    ["Dirt"],
];
export const JungleMapList = {
    A: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
};


export const DesertMap = [
    ["Sky"],
    ["Sky"],
    ["Sky"],
    ["Sky"],
    ["Sky"],
    ["Sky"],
    ["Dirt"],
    ["Dirt"],
    ["Dirt"],
    ["Dirt"],
    ["Dirt"],
    ["Dirt"],
    ["Dirt"],
];
export const DesertMapList = {
    A: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
};

export const mapSize = 18;

export function SwitchScreenShow (returnScreen, exitsScreen){
    returnScreen.style.display = "none";
    exitsScreen.style.display = "flex";
    setTimeout(function(){
        exitsScreen.style.display = "none"
        returnScreen.style.display = "flex";
    }, 3000);
}