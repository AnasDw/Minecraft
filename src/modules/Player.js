export class Player {
    constructor(map){
        if(map === "JungleMap") this._ItemsList = JungleMapList;
        else if(map === "DesertMap") this._ItemsList = DesertMapList;
        else this._ItemsList = SnowMapList;
    }
    getItemsList(){
        const items = this._ItemsList
        return items;
    };
    _addItem(item){
        if(item in this._ItemsList){
            this._ItemsList[item]++;
            return true;
        }else{
            return false;
        }
    };
    _removeItem(item) {
        if(item in this._ItemsList){
            if (this._ItemsList[item] <= 0)  this._ItemsList[item] = 0;
            else this._ItemsList[item]--;
            return true;
        }else{
            return false;
        }
    };
    _selectTool(){

    };
};

import {JungleMapList, SnowMapList, DesertMapList } from "../models/Constants.js";