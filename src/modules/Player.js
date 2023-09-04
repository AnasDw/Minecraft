export class Player {
    constructor(map){
        this._Tool = null;
        if(map === "JungleMap") this._ItemsList = JungleMapList;
        else if(map === "DesertMap") this._ItemsList = DesertMapList;
        else this._ItemsList = SnowMapList;
    }
    getItemsList(){
        const items = this._ItemsList
        return items;
    };
    _getItemCounter(itemToReturn){
        let value = null;
        this._ItemsList.forEach(item => {
            if(Object.keys(item)[0] === itemToReturn){
                value = Object.values(item)[0];
            }
        });
        return value;
    }
    _addItem(itemToAdd, valuesToAdd) {
        this._ItemsList.forEach((item, index) => {
          if (Object.keys(item)[0] === itemToAdd) {
            const currentItem = this._ItemsList[index];
            const currentCount = currentItem[itemToAdd];
            currentItem[itemToAdd] = currentCount + valuesToAdd;
          }
        });
      }

    _selectTool(tool){
        if(tool === "axe") this._Tool = new Axe();
        else if(tool === "shovel") this._Tool = new Shovel();
        else if(tool === "Pickaxe") this._Tool = new Pickaxe();
        else if (tool === "Sword") this._Tool = new Sword();
        else this._Tool = null;
    };
    _getTool(){
        return this._Tool;
    }
};

import {JungleMapList, SnowMapList, DesertMapList } from "../models/Constants.js";
import {Axe, Shovel, Pickaxe, Sword} from "./Tool.js"