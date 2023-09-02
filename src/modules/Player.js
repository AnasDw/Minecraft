import { SelectedItems } from "../main";

class Player {
    constructor(map){
        this._ItemsList = MapList;
    }
    _getItemsList(){
        return this._ItemsList;
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