export class World{
    constructor(map) {
        if(map === "JungleMap") this._map = JungleMap;
        else if(map === "DesertMap") this._map = DesertMap;
        else this._map = SnowMap;

        this.generateWorld();
    };

    generateWorld() {
        const world = document.getElementById("game").querySelector(".map");
        this._map.forEach(row => {
            if (row.length === 1){
                Array.from({ length: mapSize }).forEach((_, index) => {
                    world.appendChild(this.generateItem(row[0], index));
                }); 
            }
            else{
                row.forEach(col,index => {
                    world.appendChild(this.generateItem(col, index));
                })
            }
        });  
    };

    setMap(newMap){
        this._map = newMap;
        this.generateWorld();
    };

    generateItem(prop, index){
        const container = document.createElement("div");
        container.classList.add("block");
        container.classList.add(`${prop}`);
        container.id = index;
        return container;
    }

    addTile(tile, tileIndex){
        this._map[tileIndex] = tile;
        this.generateSpecificTile(tile, tileIndex);
    };
    removeTile(tileIndex){
        this._map[tileIndex] = "sky";
        this.generateSpecificTile("sky", tileIndex);

    };
    generateSpecificTile(tile,tileIndex) { 
        document.getElementById(tileIndex).innerHTML = tile.innerHTML;
    };
}

import {JungleMap,DesertMap,SnowMap, mapSize } from "../models/Constants.js";