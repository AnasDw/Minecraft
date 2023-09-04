export class World{
    constructor(map) {
        if(map === "JungleMap") this._map = JungleMap;
        else if(map === "DesertMap") this._map = DesertMap;
        else this._map = SnowMap;

        this._Item = new Item(null);
        this._mapName = map;
        this.generateWorld();
    };

    generateWorld() {
        const world = document.getElementById("game").querySelector(".map");
        let indexCounter = 0;
        this._map.forEach(row => {
            if (row.length == 1){
                Array.from({ length: mapSize }).forEach((_, index) => {
                    let texture = row[0] ;
                    if (row[0] === "Sand" || row[0] === "Dirt"){
                        const Randomlist = ["Carbon", "Gold", "Sand", "Dirt", "Sand", "Dirt", "Diamond", "Ore", "RedDiamond"]
                        const randomIndex = Math.floor(Math.random() * Randomlist.length);
                        texture = Randomlist[randomIndex];
                    }    
                    world.appendChild(this.generateItem(texture, indexCounter));
                    indexCounter++;
                }); 
            }
            else{
                row.forEach((col, index) => {
                    if(index === row.length - 1 && row.length < mapSize){
                        Array.from({ length: (mapSize - index) }).forEach((_, index) => {
                            world.appendChild(this.generateItem(col, indexCounter));
                            indexCounter++;
                        }); 
                    }else 
                        world.appendChild(this.generateItem(col,indexCounter));
                        indexCounter++;
                })
            }
        });  
    };

    _getItem(){
        return this._Item;
    }
    
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
        this._generateSpecificTile(tile, tileIndex);
    };

    _removeTile(tileDiv){
        if (this._mapName === "SnowMap"){
            this._generateSpecificTile("SnowSky", tileDiv);
        }else
            this._generateSpecificTile("Sky", tileDiv);
    };

    _generateSpecificTile(Prop,tileDiv) { 
        const A = document.getElementById(`${tileDiv.id}`);
        A.classList = ""
        A.classList.add("block");
        A.classList.add(Prop);
    };
}

import {JungleMap,DesertMap,SnowMap, mapSize } from "../models/Constants.js";
import { Item } from "./Item.js";